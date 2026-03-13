# Hướng dẫn Deploy lên Hostinger

## Yêu cầu
- Hosting Hostinger có hỗ trợ Node.js (gói Web Hosting, không phải PHP Hosting)
- Domain đã được kết nối

---

## Bước 1: Thiết lập MongoDB

### Cách 1: Dùng MongoDB Atlas (Miễn phí - Khuyên dùng)

1. Truy cập https://www.mongodb.com/cloud/atlas
2. Đăng ký tài khoản miễn phí
3. Tạo "Free Cluster":
   - Chọn region gần Việt Nam (Singapore)
   - Chọn "M0 Free Cluster"
4. Tạo database user:
   - Username: admin
   - Password: [tạo password mạnh]
5. Network Access:
   - Chọn "Allow Access from Anywhere" (IP: 0.0.0.0/0)
6. Lấy Connection String:
   - Vào Database → Connect → Connect your application
   - Copy connection string dạng:
   ```
   mongodb+srv://admin:<password>@cluster0.xxx.mongodb.net/admin_tool?retryWrites=true&w=majority
   ```

### Cách 2: Dùng MongoDB trên Hostinger

1. Đăng nhập Hostinger hPanel
2. Vào **Advanced** → **MongoDB**
3. Tạo database mới
4. Lấy thông tin connection

---

## Bước 2: Cấu hình Environment Variables

Chỉnh sửa file `.env.production`:

```env
# MongoDB - Sử dụng connection string từ Bước 1
MONGODB_URI=mongodb+srv://admin:your_password@cluster0.xxx.mongodb.net/admin_tool?retryWrites=true&w=majority
MONGODB_DB=admin_tool

# Proxy Configuration
PROXY_HOST=91.239.130.17
PROXY_PORT=11222
PROXY_USER=ZP15462_aavbxB
PROXY_PASS=EomRJB4H__country-vn_city-phurieng_session-6u2wp2m3_lifetime-5m
PROXY_TYPE=http
PROXY_REQUIRED=true

# Thay đổi thành domain của bạn
UPSTREAM_BASE=https://demo7892.fun
```

---

## Bước 3: Upload Code lên Hostinger

### Cách 1: Sử dụng Git (Khuyên dùng)

1. Đẩy code lên GitHub/GitLab
2. Trong Hostinger hPanel:
   - Vào **Git** → **Git Repository**
   - Kết nối với repository của bạn

### Cách 2: Sử dụng File Manager

1. Nén các file sau thành file .zip:
   - `package.json`
   - `package-lock.json`
   - `next.config.js`
   - `tsconfig.json`
   - `next-env.d.ts`
   - `src/`
   - `public/`
   - `.next/`
   - `.gitignore`
   - `.env.production`

2. Upload qua **File Manager** → **public_html**
3. Giải nén file

---

## Bước 4: Cài đặt và Chạy

### Trong Hostinger hPanel:

1. Vào **Websites** → **Advanced** → **Node.js**
2. Bật Node.js
3. Chọn phiên bản Node.js (khuyên dùng Node.js 20.x)
4. Set Application Root: thư mục chứa code
5. Application Entry point: `npm` → `start`

### Cài đặt PM2 (Quản lý process):

SSH vào server và chạy:

```bash
npm install -g pm2
pm2 start npm --name "nextjs" -- start
pm2 save
pm2 startup
```

---

## Bước 5: Khởi tạo Database

```bash
npm run init-db
```

---

## Kiểm tra hoạt động

- Truy cập domain của bạn
- Truy cập admin: `yourdomain.com/admin`

---

## Các lệnh hữu ích

```bash
# Restart app
pm2 restart nextjs

# Xem logs
pm2 logs nextjs

# Xem status
pm2 status

# Stop app
pm2 stop nextjs
```

---

## Xử lý lỗi thường gặp

### Lỗi "Port already in use"
```bash
pm2 delete all
pm2 start npm --name "nextjs" -- start
```

### Lỗi MongoDB connection
- Kiểm tra MONGODB_URI trong .env.production
- Đảm bảo MongoDB Atlas cho phép IP của Hostinger

### Lỗi "Module not found"
```bash
npm install
npm run build
```

---

## Lưu ý bảo mật

1. Đổi tất cả password trong .env.production
2. Không đẩy .env.production lên GitHub
3. Sử dụng HTTPS cho domain
