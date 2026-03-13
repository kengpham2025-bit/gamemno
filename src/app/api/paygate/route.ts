import crypto from 'crypto';
import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../_lib/legacy';
import { buildSepayQrUrl, resolveSepayBankCode } from '@/lib/proxy';
import {
  getActiveBanks,
  getActiveMomo,
  getActiveTelcos,
  getActiveTheCao,
  insertPaygateTransaction,
} from '@/lib/db';

const defaultTelcoExchangeRates = [
  { gold: 40000, amount: 50000, promotionPercent: 0, brand: '789.club' },
  { gold: 80000, amount: 100000, promotionPercent: 0, brand: '789.club' },
  { gold: 400000, amount: 500000, promotionPercent: 0, brand: '789.club' },
  { gold: 800000, amount: 1000000, promotionPercent: 0, brand: '789.club' },
];

const fallbackGiftCards = [
  {
    name: 'Viettel',
    id: 1,
    url: '/images/bank/VIETTEL.png',
    items: [
      { image: '/images/bank/VIETTEL.png', amount: 50000, displayName: 'Viettel 50000', price: 50000, name: 'Viettel 50000', active: true, id: '690403340d2850cfa80004d6', type: 1, brand: '789.club', telcoId: 1 },
      { image: '/images/bank/VIETTEL.png', amount: 100000, displayName: 'Viettel 100000', price: 100000, name: 'Viettel 100000', active: true, id: '690403390d2850cfa80004d7', type: 1, brand: '789.club', telcoId: 1 },
      { image: '/images/bank/VIETTEL.png', amount: 500000, displayName: 'Viettel 500000', price: 500000, name: 'Viettel 500000', active: true, id: '6904033c0d2850cfa80004d8', type: 1, brand: '789.club', telcoId: 1 },
      { image: '/images/bank/VIETTEL.png', amount: 1000000, displayName: 'Viettel 1000000', price: 1000000, name: 'Viettel 1000000', active: true, id: '690403400d2850cfa80004d9', type: 1, brand: '789.club', telcoId: 1 },
    ],
  },
  {
    name: 'MobiFone',
    id: 3,
    url: '/images/bank/MOBIFONE.png',
    items: [
      { image: '/images/bank/MOBIFONE.png', amount: 50000, displayName: 'MobiFone 50000', price: 50000, name: 'MobiFone 50000', active: true, id: '690403960d2850cfa80004e2', type: 1, brand: '789.club', telcoId: 3 },
      { image: '/images/bank/MOBIFONE.png', amount: 100000, displayName: 'MobiFone 100000', price: 100000, name: 'MobiFone 100000', active: true, id: '6904039b0d2850cfa80004e3', type: 1, brand: '789.club', telcoId: 3 },
      { image: '/images/bank/MOBIFONE.png', amount: 500000, displayName: 'MobiFone 500000', price: 500000, name: 'MobiFone 500000', active: true, id: '6904039d0d2850cfa80004e4', type: 1, brand: '789.club', telcoId: 3 },
      { image: '/images/bank/MOBIFONE.png', amount: 1000000, displayName: 'MobiFone 1000000', price: 1000000, name: 'MobiFone 1000000', active: true, id: '690403a10d2850cfa80004e5', type: 1, brand: '789.club', telcoId: 3 },
    ],
  },
  {
    name: 'VinaPhone',
    id: 2,
    url: '/images/bank/VINAPHONE.png',
    items: [
      { image: '/images/bank/VINAPHONE.png', amount: 50000, displayName: 'VinaPhone 50000', price: 50000, name: 'VinaPhone 50000', active: true, id: '690403630d2850cfa80004dc', type: 1, brand: '789.club', telcoId: 2 },
      { image: '/images/bank/VINAPHONE.png', amount: 100000, displayName: 'VinaPhone 100000', price: 100000, name: 'VinaPhone 100000', active: true, id: '690403690d2850cfa80004dd', type: 1, brand: '789.club', telcoId: 2 },
      { image: '/images/bank/VINAPHONE.png', amount: 500000, displayName: 'VinaPhone 500000', price: 500000, name: 'VinaPhone 500000', active: true, id: '6904036b0d2850cfa80004de', type: 1, brand: '789.club', telcoId: 2 },
      { image: '/images/bank/VINAPHONE.png', amount: 1000000, displayName: 'VinaPhone 1000000', price: 1000000, name: 'VinaPhone 1000000', active: true, id: '6904036f0d2850cfa80004df', type: 1, brand: '789.club', telcoId: 2 },
    ],
  },
  {
    name: 'Vietnamobile',
    id: 4,
    url: '/images/bank/VIETNAMOBILE.png',
    items: [
      { image: '/images/bank/VIETNAMOBILE.png', amount: 50000, displayName: 'Vietnamobile 50000', price: 50000, name: 'Vietnamobile 50000', active: true, id: '690403c90d2850cfa80004e8', type: 1, brand: '789.club', telcoId: 4 },
      { image: '/images/bank/VIETNAMOBILE.png', amount: 100000, displayName: 'Vietnamobile 100000', price: 100000, name: 'Vietnamobile 100000', active: true, id: '690403cc0d2850cfa80004e9', type: 1, brand: '789.club', telcoId: 4 },
      { image: '/images/bank/VIETNAMOBILE.png', amount: 500000, displayName: 'Vietnamobile 500000', price: 500000, name: 'Vietnamobile 500000', active: true, id: '690403ce0d2850cfa80004ea', type: 1, brand: '789.club', telcoId: 4 },
    ],
  },
];

const sepayBankCodeMap: Record<string, string> = {
  napnhanh247: 'NAPNHANH247',
  'nap nhanh': 'NAPNHANH247',
  vietcombank: 'VCB',
  vcb: 'VCB',
  vietinbank: 'ICB',
  vietin: 'ICB',
  vtb: 'ICB',
  icb: 'ICB',
  bidv: 'BIDV',
  mbbank: 'MB',
  'mb ': 'MB',
  maritime: 'MSB',
  acb: 'ACB',
  vpbank: 'VPB',
  vpb: 'VPB',
  tpbank: 'TPB',
  tpb: 'TPB',
  sacombank: 'STB',
  stb: 'STB',
  techcombank: 'TCB',
  tcb: 'TCB',
  hdbank: 'HDB',
  hdb: 'HDB',
  vib: 'VIB',
  eximbank: 'EIB',
  eib: 'EIB',
  agribank: 'VBA',
  bacabank: 'BAB',
  baca: 'BAB',
  abbank: 'ABB',
  'ab bank': 'ABB',
  seabank: 'SEAB',
  'sea ': 'SEAB',
  pvcombank: 'PVCB',
  ncb: 'NCB',
  shb: 'SHB',
  shinhan: 'SHBVN',
  pgbank: 'PGB',
  'pg bank': 'PGB',
  ocb: 'OCB',
  publicbank: 'PBVN',
  public: 'PBVN',
  lienvietpostbank: 'LPB',
  lienviet: 'LPB',
  kienlongbank: 'KLB',
  kienlong: 'KLB',
  indovinabank: 'IVB',
  indovina: 'IVB',
  vietcapital: 'VCCB',
  'viet capital': 'VCCB',
  vietbank: 'VIETBANK',
  'viet bank': 'VIETBANK',
  namabank: 'NAB',
  'nam a': 'NAB',
  msb: 'MSB',
  vncb: 'VNCB',
  wooribank: 'WVN',
  woori: 'WVN',
};

const sepayBankShortNameMap: Record<string, string> = {
  NAPNHANH247: 'NAPNHANH247',
  VCB: 'Vietcombank',
  ICB: 'VietinBank',
  BIDV: 'BIDV',
  MB: 'MBBank',
  ACB: 'ACB',
  VPB: 'VPBank',
  TPB: 'TPBank',
  STB: 'Sacombank',
  TCB: 'Techcombank',
  HDB: 'HDBank',
  VIB: 'VIB',
  EIB: 'Eximbank',
  VBA: 'Agribank',
  BAB: 'BacABank',
  ABB: 'ABBANK',
  SEAB: 'SeABank',
  PVCB: 'PVcomBank',
  NCB: 'NCB',
  SHB: 'SHB',
  SHBVN: 'ShinhanBank',
  PGB: 'PGBank',
  OCB: 'OCB',
  PBVN: 'PublicBank',
  LPB: 'LienVietPostBank',
  KLB: 'KienLongBank',
  IVB: 'IndovinaBank',
  VCCB: 'VietCapitalBank',
  VIETBANK: 'VietBank',
  NAB: 'NamABank',
  MSB: 'MSB',
  VNCB: 'VNCB',
  WVN: 'Woori',
};

type CodepayDefinition = {
  shortName: string;
  name: string;
  fullName: string;
  id: string;
};

type CodepayListItem = {
  supportQRCode: boolean;
  supportWithdraw: boolean;
  bankType: number;
  name: string;
  fullName: string;
  id: string;
  accounts: PaygateAccount[];
  shortName: string;
  url: string;
  loginSmartpayOption?: number;
  supportSmartpay?: boolean;
};

const codepayDefinitions: CodepayDefinition[] = [
  { shortName: 'Napnhanh247', name: 'NapNhanh247', fullName: 'NapNhanh247 - Chuyen khoan nhanh 24/7', id: 'napnhanh247001' },
  { shortName: 'ACB', name: 'ACB', fullName: 'Ngan hang TMCP A Chau - ACB', id: 'e12b5fe1b86b2c96ac5f42f2c3e97474' },
  { shortName: 'Agribank', name: 'Agribank', fullName: 'Ngan hang Nong nghiep va Phat trien Nong thon - Agribank', id: 'agribank001' },
  { shortName: 'BIDV', name: 'BIDV', fullName: 'Ngan hang Dau tu va Phat trien Viet Nam - BIDV', id: '00cf8f74a0e283ef480a4097ad83047d' },
  { shortName: 'Eximbank', name: 'Eximbank', fullName: 'Ngan hang TMCP Xuat Nhap khau - Eximbank', id: 'eximbank001' },
  { shortName: 'MBBank', name: 'MBBank', fullName: 'Ngan hang Quan doi - MBBank', id: '98be5c9ab5206451d31cc9f3f1fc0744' },
  { shortName: 'NCB', name: 'NCB', fullName: 'Ngan hang TMCP Quoc Dan - NCB', id: 'ncb001' },
  { shortName: 'OCB', name: 'OCB', fullName: 'Ngan hang TMCP Phuong Dong - OCB', id: 'ocb001' },
  { shortName: 'PGBank', name: 'PGBank', fullName: 'Ngan hang TMCP Xang dau Petrolimex - PGBank', id: 'pgbank001' },
  { shortName: 'PVcomBank', name: 'PVcomBank', fullName: 'Ngan hang TMCP Dai Chung Viet Nam - PVcomBank', id: 'pvcombank001' },
  { shortName: 'Sacombank', name: 'Sacombank', fullName: 'Ngan hang Sai Gon Thuong Tin - Sacombank', id: '40d01281a503d5a0887526c4b45fb840' },
  { shortName: 'SeABank', name: 'SeABank', fullName: 'Ngan hang TMCP Dong Nam A - SeABank', id: 'seabank001' },
  { shortName: 'SHB', name: 'SHB', fullName: 'Ngan hang Sai Gon Ha Noi - SHB', id: 'cbfd7760ba90f4d0dc1c4ab903436c63' },
  { shortName: 'Techcombank', name: 'Techcombank', fullName: 'Ngan hang Ky Thuong Viet Nam - Techcombank', id: '454f53c0126a195a9733276dfcdb87ba' },
  { shortName: 'TPBank', name: 'TPBank', fullName: 'Ngan hang Tien Phong - TPBank', id: '2573fa19d88e09505e88de89e8db158f' },
  { shortName: 'VietCapitalBank', name: 'VietCapitalBank', fullName: 'Ngan hang TMCP Ban Viet - Viet Capital Bank', id: 'vietcapital001' },
  { shortName: 'Vietcombank', name: 'Vietcombank', fullName: 'Ngan hang Ngoai thuong Viet Nam - Vietcombank', id: 'fd21057d9967a8ff084fb721c441c2f1' },
  { shortName: 'VietinBank', name: 'VietinBank', fullName: 'Ngan hang Cong thuong Viet Nam - VietinBank', id: '15b6d8db5ba966342410898dea0ef52e' },
  { shortName: 'VNCB', name: 'VNCB', fullName: 'Ngan hang TMCP Viet Nam Thuong Tin - VNCB', id: 'vncb001' },
  { shortName: 'VPBank', name: 'VPBank', fullName: 'Ngan hang Viet Nam Thinh Vuong - VPBank', id: 'a05a5f6306064cb1c45e828004a885aa' },
  { shortName: 'WooriBank', name: 'WooriBank', fullName: 'Ngan hang TNHH MTV Woori Viet Nam', id: 'wooribank001' },
] ;

type PaygateAccount = {
  bankId: string;
  accountName: string;
  bankBranch: string;
  publicRss: number;
  id: string;
  accountNumber: string;
  type: number;
  bankName: string;
  sepayBankCode?: string;
  sepayBankShortName?: string;
  qrSepayUrl?: string;
  qrCode?: string;
};

function parseExchangeRates(rawValue: unknown) {
  if (Array.isArray(rawValue)) return rawValue;
  if (typeof rawValue !== 'string' || !rawValue.trim()) return null;
  try {
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
}

function generateRandomCode(length = 11) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
  return result;
}

function getLocalFallbackBanks() {
  const bankName = process.env.PAYGATE_BANK_NAME || 'Vietcombank';
  const accountNumber = process.env.PAYGATE_BANK_NUMBER || '0969696969';
  const accountName = process.env.PAYGATE_ACCOUNT_NAME || 'LOCAL PAYGATE';
  const isEnabled = (process.env.PAYGATE_FALLBACK_ENABLED || 'true').toLowerCase() !== 'false';
  if (!isEnabled || !accountNumber) return [];
  return [{ bank_name: bankName, account_number: accountNumber, account_name: accountName, is_active: true }];
}

function getLocalFallbackMomo() {
  const momoNumber = process.env.PAYGATE_MOMO_NUMBER || '';
  const momoName = process.env.PAYGATE_MOMO_NAME || '';
  const isEnabled = (process.env.PAYGATE_FALLBACK_ENABLED || 'true').toLowerCase() !== 'false';
  if (!isEnabled || !momoNumber) return null;
  return { momo_number: momoNumber, momo_name: momoName, is_active: true };
}

function resolveCardTelco(rawValue: string, telcos: any[]) {
  const normalized = String(rawValue || '').trim().toLowerCase();
  const builtinMap: Record<string, string> = {
    '1': 'VIETTEL',
    viettel: 'VIETTEL',
    '2': 'VINAPHONE',
    vinaphone: 'VINAPHONE',
    '3': 'MOBIFONE',
    mobifone: 'MOBIFONE',
    '4': 'ZING',
    zing: 'ZING',
    '5': 'GATE',
    gate: 'GATE',
    '6': 'VNMOBI',
    vnmobile: 'VNMOBI',
    vnmobi: 'VNMOBI',
  };
  if (builtinMap[normalized]) return builtinMap[normalized];
  const matchedTelco = telcos.find((item) => String(item.telco_id ?? '') === normalized);
  return matchedTelco?.name ? String(matchedTelco.name).trim().toUpperCase() : null;
}

function buildAdminAccount(adminBank: any): PaygateAccount | null {
  if (!adminBank?.account_number) return null;

  const bankName = String(adminBank.bank_name || 'Ngan hang');
  const accountNumber = String(adminBank.account_number || '');
  const accountName = String(adminBank.account_name || '');

  let sepayBankCode = String(adminBank.sepay_bank_code || '').trim().toUpperCase();
  if (!sepayBankCode) {
    sepayBankCode = resolveSepayBankCode(bankName);
  }
  if (!sepayBankCode) {
    const normalizedBankName = bankName.toLowerCase().replace(/\s+/g, '');
    for (const [key, code] of Object.entries(sepayBankCodeMap)) {
      if (bankName.toLowerCase().includes(key) || normalizedBankName.includes(key.replace(/\s+/g, ''))) {
        sepayBankCode = code;
        break;
      }
    }
  }
  if (!sepayBankCode) sepayBankCode = 'NAPNHANH247';

  const sepayBankShortName = sepayBankShortNameMap[sepayBankCode] || sepayBankCode;
  const id = Buffer.from(accountNumber).toString('hex').substring(0, 16);
  const qrTemplateUrl = `https://qr.sepay.vn/img?acc=${encodeURIComponent(accountNumber)}&bank=${encodeURIComponent(sepayBankCode)}&amount={amount}&des={des}`;

  return {
    bankId: id,
    accountName,
    bankBranch: 'NICEPAY',
    publicRss: 0,
    id,
    accountNumber,
    type: 1,
    bankName,
    sepayBankCode,
    sepayBankShortName,
    qrSepayUrl: qrTemplateUrl,
  };
}

function buildPlaceholderAccount(account: PaygateAccount): PaygateAccount {
  return {
    bankId: account.bankId,
    accountName: '',
    bankBranch: account.type === 2 ? '' : 'NICEPAY',
    publicRss: 0,
    id: account.id,
    accountNumber: '',
    type: account.type,
    bankName: account.bankName,
    sepayBankCode: account.sepayBankCode,
    sepayBankShortName: account.sepayBankShortName,
    qrSepayUrl: account.qrSepayUrl,
    qrCode: account.qrSepayUrl,
  };
}

function getCodepayDefinitionById(bankAccountId: string) {
  return codepayDefinitions.find((item) => item.id === bankAccountId) || null;
}

/** Trả về URL đầy đủ (có domain) để frontend khác domain vẫn load được ảnh QR */
function toAbsoluteQrUrl(path: string, baseUrl: string | undefined): string {
  if (!baseUrl || !path) return path;
  const base = baseUrl.replace(/\/$/, '');
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
}

function buildCodepayViewAccount(baseAccount: PaygateAccount, definition: CodepayDefinition, baseUrl?: string): PaygateAccount {
  const selectedBankName = definition.name || definition.shortName;
  const adminSepayBankCode =
    String(baseAccount.sepayBankCode || '').trim() ||
    resolveSepayBankCode(baseAccount.bankName) ||
    'NAPNHANH247';

  const qrPath = `/paygate/qr?acc=${encodeURIComponent(baseAccount.accountNumber)}&bank=${encodeURIComponent(adminSepayBankCode)}&amount={amount}&des={des}`;
  return {
    ...baseAccount,
    bankName: selectedBankName,
    sepayBankCode: adminSepayBankCode,
    sepayBankShortName: sepayBankShortNameMap[adminSepayBankCode] || baseAccount.bankName,
    qrSepayUrl: toAbsoluteQrUrl(qrPath, baseUrl),
  };
}

function buildRuntimeCodepayData(account: PaygateAccount, amount: number, codepay: string, compactDisplay = false, baseUrl?: string) {
  const sepayBankCode = String(account.sepayBankCode || '').trim() || resolveSepayBankCode(account.bankName) || 'NAPNHANH247';
  const qrPath = `/paygate/qr?bank=${encodeURIComponent(sepayBankCode)}&acc=${encodeURIComponent(account.accountNumber)}&amount=${amount}&des=${encodeURIComponent(codepay)}`;
  const proxyQrUrl = toAbsoluteQrUrl(qrPath, baseUrl);
  const directQrUrl = buildSepayQrUrl(sepayBankCode, account.accountNumber, amount, codepay);
  // Ưu tiên direct URL vì cùng domain với sepay.vn không bị chặn
  let qrCodeUrl = (directQrUrl || proxyQrUrl) || '';
  qrCodeUrl = qrCodeUrl.replace(/\/imq\?/g, '/img?').replace(/&&des=/g, '&des=');
  return {
    compactDisplay,
    bankAccount: compactDisplay ? '' : account.accountNumber,
    accountNumber: compactDisplay ? '' : account.accountNumber,
    amount,
    statusId: 1,
    accountName: account.accountName || '',
    bankBranch: compactDisplay ? '' : (account.bankBranch || ''),
    qrcode: qrCodeUrl,
    qrCode: qrCodeUrl,
    qrcode_url: qrCodeUrl,
    qr_sepay_url: qrCodeUrl,
    qrSepayUrl: qrCodeUrl,
    sepayBankCode,
    codepay,
    bankName: account.bankName || '',
    message: 'Thanh cong',
    remainingTime: 7200000,
    note: codepay,
  };
}

/** Fetch ảnh QR từ URL, trả về data URL (base64) để Cocos base64ToSpriteFrame hiển thị được */
async function fetchQrAsDataUrl(qrImageUrl: string): Promise<string | null> {
  if (!qrImageUrl || !qrImageUrl.startsWith('http')) return null;
  try {
    const res = await fetch(qrImageUrl, {
      cache: 'no-store',
      headers: { 'Accept': 'image/png,image/*;q=0.8,*/*;q=0.5' },
    });
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const b64 = Buffer.from(buf).toString('base64');
    const contentType = res.headers.get('content-type') || 'image/png';
    return `data:${contentType};base64,${b64}`;
  } catch {
    return null;
  }
}

function buildCheckCodepayData(account: PaygateAccount) {
  return {
    bankAccount: '',
    accountNumber: '',
    amount: 0,
    statusId: 0,
    accountName: '',
    bankBranch: '',
    qrcode: '',
    qrCode: '',
    codepay: '',
    bankName: account.bankName || '',
    sepayBankCode: account.sepayBankCode || '',
    message: '',
    remainingTime: 0,
    note: '',
  };
}

async function getPaygateSources() {
  const activeBanks = await getActiveBanks();
  const banks = activeBanks.length > 0 ? activeBanks : getLocalFallbackBanks();
  const activeMomoConfig = await getActiveMomo();
  const momoConfig = activeMomoConfig || getLocalFallbackMomo();
  const telcos = await getActiveTelcos();
  /* Tiền điện tử tắt: luôn trả crypto rỗng để client không hiển thị tab và tránh lỗi */
  const cryptos: any[] = [];

  const primaryBankAccount = buildAdminAccount(banks[0]);
  const momoAccount: PaygateAccount | null = momoConfig?.momo_number
    ? {
        bankId: 'fkjhqweh2n2mmwmjespky5',
        accountName: String(momoConfig.momo_name || ''),
        bankBranch: '',
        publicRss: 0,
        id: 'fkjhqweh2n2mmwmjespky5',
        accountNumber: String(momoConfig.momo_number || ''),
        type: 2,
        bankName: 'MOMO',
      }
    : null;

  return {
    bankSource: banks[0] || null,
    primaryBankAccount,
    momoConfig,
    momoAccount,
    telcos,
    cryptos,
  };
}

function buildTelcosConfig(telcos: any[]) {
  if (!telcos.length) {
    return [
      { name: 'Viettel', active: true, exchangeRates: defaultTelcoExchangeRates, id: 1, url: '/images/bank/VIETTEL.png' },
      { name: 'MobiFone', active: true, exchangeRates: defaultTelcoExchangeRates, id: 3, url: '/images/bank/MOBIFONE.png' },
      { name: 'VinaPhone', active: true, exchangeRates: defaultTelcoExchangeRates, id: 2, url: '/images/bank/VINAPHONE.png' },
      { name: 'Vietnamobile', active: true, exchangeRates: defaultTelcoExchangeRates, id: 4, url: '/images/bank/VIETNAMOBILE.png' },
    ];
  }

  return telcos.map((t) => ({
    name: t.name,
    active: Boolean(t.active),
    exchangeRates: parseExchangeRates(t.exchange_rates) || defaultTelcoExchangeRates,
    id: Number(t.telco_id),
    url: t.url || '/images/bank/VIETTEL.png',
  }));
}

function buildCodepayList(bankAccount: PaygateAccount | null, momoAccount: PaygateAccount | null, baseUrl?: string) {
  const list: CodepayListItem[] = codepayDefinitions.map((bank) => ({
    supportQRCode: true,
    supportWithdraw: false,
    bankType: 1,
    name: bank.name,
    fullName: bank.fullName,
    id: bank.id,
    accounts: bankAccount ? [buildPlaceholderAccount(buildCodepayViewAccount(bankAccount, bank, baseUrl))] : [],
    shortName: bank.shortName,
    url: `/images/bank/${String(bank.shortName).replace(/\s+/g, '')}.png`,
  }));

  list.push({
    supportQRCode: true,
    supportWithdraw: false,
    bankType: 2,
    loginSmartpayOption: 2,
    name: 'MOMO',
    fullName: 'MOMO',
    supportSmartpay: false,
    id: 'fkjhqweh2n2mmwmjespky5',
    accounts: momoAccount ? [buildPlaceholderAccount(momoAccount)] : [],
    shortName: 'MOMO',
    url: '',
  });

  return list;
}

async function handler(req: any, res: any) {
  const q = req.query;
  let command = q.command;
  const bankAccountId = q.bankAccountId ?? q.bankAccountid;
  const bankId = q.bankId ?? q.bankid;
  const amount = q.amount;
  const des = q.des ?? q.description;
  let serial = q.serial ?? q.cardSerial ?? q.seri;
  let pin = q.pin ?? q.code ?? q.cardPin ?? q.card_code;
  const telcoId = q.telcoId ?? q.type ?? q.telco;
  const type = q.type;
  if (command && String(command).includes('=')) {
    const parts = String(command).split('=');
    command = parts[0];
    if (parts.length > 1 && !serial) serial = parts.slice(1).join('=');
  }
  if (command === 'changeCardSerial' || String(command).startsWith('changeCardSerial')) {
    command = 'chargeCard';
  }

  const host = (req.headers && req.headers['host']) || '';
  const scheme = (req.headers && req.headers['x-forwarded-proto']) || (host.includes('localhost') ? 'http' : 'https');
  const baseUrl = host ? `${scheme}://${host}` : (process.env.NEXT_PUBLIC_APP_URL || '');

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const cmd = String(command || '');
  const finalDes = String(des || generateRandomCode(11));
  const finalAmount = parseInt(String(amount || '0').replace(/\D/g, ''), 10) || 0;
  const { bankSource, primaryBankAccount, momoAccount, momoConfig, telcos, cryptos } = await getPaygateSources();
  const normalizedBankId = String(bankId || '')
    .replace(/naonhanh247001/i, 'napnhanh247001')
    .replace(/rapnhanh247001/i, 'napnhanh247001');
  const normalizedBankAccountId = String(bankAccountId || '')
    .replace(/naonhanh247001/i, 'napnhanh247001')
    .replace(/rapnhanh247001/i, 'napnhanh247001');
  const selectedCodepayDefinition =
    getCodepayDefinitionById(normalizedBankAccountId) ||
    getCodepayDefinitionById(normalizedBankId);

  if (cmd === 'card' || cmd === 'chargeCard') {
    const cardSerial = String(serial || '').trim();
    const cardPin = String(pin || '').trim();
    const cardTelcoId = String(telcoId || type || '').trim();
    if (!cardSerial || !cardPin || !cardTelcoId) {
      const message = 'Vui long nhap day du thong tin (So seri, Ma the, chon nha mang va menh gia)';
      return res.status(200).json({ status: 1, data: { message, error: message, systemMessage: message } });
    }
    const minCardAmount = 50000;
    if (!finalAmount || finalAmount < minCardAmount) {
      const message = `Vui long chon menh gia the hop le (toi thieu ${(minCardAmount / 1000).toFixed(0)}.000 VND)`;
      return res.status(200).json({ status: 1, data: { message, error: message, systemMessage: message } });
    }

    const theCaoConfig = await getActiveTheCao();
    if (!theCaoConfig?.partner_id || !theCaoConfig?.partner_key) {
      const message = 'He thong nap the dang bao tri';
      return res.status(200).json({ status: 1, data: { message, error: message, systemMessage: message } });
    }

    const telco = resolveCardTelco(cardTelcoId, telcos);
    if (!telco) {
      const message = 'Loai the khong ho tro';
      return res.status(200).json({ status: 1, data: { message, error: message, systemMessage: message } });
    }

    const requestId = Date.now() + Math.floor(Math.random() * 99999);
    const sign = crypto.createHash('md5').update(theCaoConfig.partner_key + cardPin + cardSerial).digest('hex');
    const params = new URLSearchParams({
      telco,
      code: cardPin,
      serial: cardSerial,
      amount: String(finalAmount),
      request_id: String(requestId),
      partner_id: theCaoConfig.partner_id,
      sign,
      command: 'charging',
    });

    try {
      const response = await fetch(`${theCaoConfig.url || 'https://doithe1s.vn/chargingws/v2'}?${params}`, {
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      const data = await response.json();
      const apiStatus = parseInt(String(data?.status || '0'), 10);
      const apiMsg = data?.message || 'Giao dich thanh cong';
      const success = apiStatus === 99 || apiStatus === 1 || apiStatus === 2;

      await insertPaygateTransaction({
        method: 'card',
        amount: finalAmount,
        status: success ? 'success' : 'failed',
        telco,
        serial: cardSerial,
        card_code: cardPin,
        note: success ? 'Nap the thanh cong' : apiMsg,
      });

      if (success) return res.status(200).json({ status: 0, data: { message: 'Nap the thanh cong!' } });
      return res.status(200).json({ status: 1, data: { message: apiMsg, error: apiMsg, systemMessage: apiMsg } });
    } catch {
      await insertPaygateTransaction({
        method: 'card',
        amount: finalAmount,
        status: 'success',
        telco,
        serial: cardSerial,
        card_code: cardPin,
        note: 'Nap the thanh cong - Auto duyet (loi ket noi)',
      });
      return res.status(200).json({ status: 0, data: { message: 'Nap the thanh cong!' } });
    }
  }

  if (cmd === 'checkCodePay') {
    const selectedAccountId = String(bankAccountId || '');
    const selectedBankId = String(bankId || '');
    const isMomoSelected =
      selectedAccountId === 'fkjhqweh2n2mmwmjespky5' ||
      selectedBankId === 'fkjhqweh2n2mmwmjespky5';

    const account = isMomoSelected
      ? momoAccount
      : primaryBankAccount && selectedCodepayDefinition
        ? buildCodepayViewAccount(primaryBankAccount, selectedCodepayDefinition, baseUrl)
        : primaryBankAccount;
    if (!account) return res.status(200).json({ status: 1, data: { message: 'Chua cau hinh tai khoan ngan hang.' } });
    return res.status(200).json({ status: 0, data: buildCheckCodepayData(account) });
  }

  if (cmd === 'changeCodePay') {
    return res.status(200).json({ status: 1, data: { message: 'Chua co giao dich nap hop le de doi ma.' } });
  }

  if (cmd === 'createCodePay') {
    if (finalAmount <= 0) {
      const message = 'Vui long nhap so tien hop le.';
      return res.status(200).json({ status: 1, data: { message, error: message, systemMessage: message } });
    }

    const selectedAccountId = String(bankAccountId || '');
    const selectedBankId = String(bankId || '');
    const isMomoSelected =
      selectedAccountId === 'fkjhqweh2n2mmwmjespky5' ||
      selectedBankId === 'fkjhqweh2n2mmwmjespky5';

    if (isMomoSelected) {
      if (!primaryBankAccount) {
        return res.status(200).json({ status: 1, data: { message: 'Chua cau hinh tai khoan ngan hang.' } });
      }

      await insertPaygateTransaction({
        method: 'momo',
        amount: finalAmount,
        status: 'success',
        bank_name: bankSource?.bank_name || primaryBankAccount.bankName,
        account_number: primaryBankAccount.accountNumber,
        codepay: finalDes,
        note: 'Tao ma nap Momo qua bank - Tu dong duyet',
        ip_address: req.socket.remoteAddress || '',
      });

      let momoData = buildRuntimeCodepayData(primaryBankAccount, finalAmount, finalDes, true, baseUrl);
      const momoQrDataUrl = await fetchQrAsDataUrl(momoData.qrcode_url || momoData.qrCode || '');
      if (momoQrDataUrl) {
        momoData = { ...momoData, qrcode: momoQrDataUrl, qrCode: momoQrDataUrl, qrcode_url: momoQrDataUrl, qr_sepay_url: momoQrDataUrl, qrSepayUrl: momoQrDataUrl };
      }
      return res.status(200).json({
        locale: 'vi',
        messageKey: 'paygate.success',
        status: 0,
        data: momoData,
      });
    }

    if (!primaryBankAccount) {
      return res.status(200).json({ status: 1, data: { message: 'Chua cau hinh tai khoan ngan hang.' } });
    }

    const runtimeAccount = selectedCodepayDefinition
      ? buildCodepayViewAccount(primaryBankAccount, selectedCodepayDefinition, baseUrl)
      : primaryBankAccount;

    await insertPaygateTransaction({
      method: 'bank',
      amount: finalAmount,
      status: 'success',
      bank_name: bankSource?.bank_name || primaryBankAccount.bankName,
      account_number: primaryBankAccount.accountNumber,
      codepay: finalDes,
      note: 'Tao ma nap Bank - Tu dong duyet',
      ip_address: req.socket.remoteAddress || '',
    });

    let bankData = buildRuntimeCodepayData(runtimeAccount, finalAmount, finalDes, false, baseUrl);
    const bankQrDataUrl = await fetchQrAsDataUrl(bankData.qrcode_url || bankData.qrCode || '');
    if (bankQrDataUrl) {
      bankData = { ...bankData, qrcode: bankQrDataUrl, qrCode: bankQrDataUrl, qrcode_url: bankQrDataUrl, qr_sepay_url: bankQrDataUrl, qrSepayUrl: bankQrDataUrl };
    }
    return res.status(200).json({
      Locale: 'vi',
      messageKey: 'paygate.success',
      status: 0,
      data: bankData,
    });
  }

  const codepayList = buildCodepayList(primaryBankAccount, momoAccount, baseUrl);

  return res.status(200).json({
    codePayHelpUrl: './help/codepay/',
    bankHelpUrl: './huong-dan/nap-tien-banking/',
    qrSepayBaseUrl: 'https://qr.sepay.vn/img',
    data: {
      minTranfer: 10000,
      cashoutGiftCards: fallbackGiftCards,
      digitalWallets: [],
      smartOTPRegistered: false,
      crypto: cryptos,
      batCK: false,
      tranferTax: 0.02,
      sSportUrl: '/sport?command=get-token',
      depositTypes: [
        { description: 'Internet Banking', id: 1 },
        { description: 'ATM', id: 2 },
        { description: 'Quay giao dich', id: 3 },
      ],
      telcos: buildTelcosConfig(telcos),
      codepay: codepayList,
      verifiedAccountHolder: [],
      verifiedBankAccounts: [],
      items: codepayList.map((bank) => ({
        supportWithdraw: true,
        bankType: bank.bankType,
        name: bank.shortName,
        fullName: bank.fullName,
        id: bank.id,
        accounts: bank.accounts || [],
        suggestedTransCode: [
          { text: 'Ho ten nguoi gui tien', type: 3 },
          { text: 'STK cua ban', type: 2 },
          { text: 'Ma lenh giao dich', type: 1 },
        ],
        shortName: bank.shortName,
        url: bank.url,
      })),
      activeMomoName: momoConfig?.momo_name || '',
    },
    eWalletHelpUrl: './huong-dan/nap-tien-vi-dien-tu/',
    status: 0,
  });
}

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function POST(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function OPTIONS(request: NextRequest) {
  return runLegacyHandler(request, handler);
}
