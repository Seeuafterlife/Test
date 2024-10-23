
# Test Project

## Hướng dẫn sử dụng

### 1. Clone dự án từ GitHub

Đầu tiên, bạn cần tải về dự án từ GitHub. Mở terminal và chạy lệnh sau:

```bash
git clone https://github.com/Seeuafterlife/Test.git
```

Sau khi clone xong, điều hướng vào thư mục dự án:

```bash
cd Test
```

### 2. Cài đặt dependencies

Trước khi chạy dự án, bạn cần cài đặt các dependencies. Chạy lệnh sau:

```bash
npm install
```

Lệnh này sẽ tự động tải về tất cả các thư viện cần thiết dựa trên file `package.json`.

### 3. Chạy dự án

Để chạy ứng dụng, sử dụng lệnh:

```bash
npm run dev
```

Sau khi chạy lệnh này, bạn có thể mở trình duyệt và truy cập địa chỉ `http://localhost:5173` để xem ứng dụng.

### 4. Tạo bản build (tùy chọn)

Nếu bạn muốn tạo một bản build tối ưu cho sản xuất (production), bạn có thể chạy lệnh sau:

```bash
npm run build
```

Bản build sẽ được tạo trong thư mục `dist/`, và bạn có thể triển khai nó lên server.

### 5. Xử lý sự cố (nếu có)

- Nếu gặp lỗi trong quá trình cài đặt hoặc chạy, hãy kiểm tra phiên bản Node.js và các gói thư viện trong `package.json` để đảm bảo tương thích.
- Nếu có bất kỳ vấn đề nào, hãy đảm bảo rằng bạn đã cài đặt đúng phiên bản Node.js và chạy lệnh `npm install` đúng cách.

---

## Cấu trúc dự án

Cấu trúc thư mục dự án sau khi cài đặt:

```
Test/
│
├── node_modules/     # Thư mục chứa các gói thư viện (sẽ được tạo sau khi chạy npm install)
├── public/           # Thư mục chứa file tĩnh (index.html)
├── src/              # Mã nguồn React
│   ├── App.jsx       # Thành phần chính
│   ├── Slideshow.jsx # Thành phần slideshow
│   └── ...           # Các thành phần khác
├── .gitignore        # File để loại trừ những thư mục không tải lên GitHub
├── package.json      # Danh sách các gói dependencies và các lệnh npm
├── package-lock.json # File ghi lại phiên bản chính xác của các gói thư viện
└── vite.config.js    # Cấu hình Vite
```

Nếu có thêm bất kỳ câu hỏi nào, vui lòng liên hệ hoặc mở một Issue trong repository này.
