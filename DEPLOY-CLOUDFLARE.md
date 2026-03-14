# Deploy lên Cloudflare Pages

## Cấu hình đã thêm

Project đã được cấu hình cho Cloudflare với các file:
- `.dev.vars` - biến môi trường cho local dev
- `wrangler.jsonc` - cấu hình Cloudflare Workers
- `open-next.config.ts` - cấu hình OpenNext
- `public/_headers` - caching headers cho static assets

## Build command

Trong **Cloudflare Pages** → project → **Settings** → **Builds & deployments** → **Build configuration**, đặt:

**Build command:**
```bash
npm run build
```

**Deploy command:**
```bash
npx wrangler deploy
```

Sau đó **Save** và **Redeploy**.

## Local development

Chạy local với:
```bash
npm run dev
```

(Lệnh này sẽ dùng `opennextjs-cloudflare dev` để chạy Next.js với Cloudflare adapter.)
