# Trello Clone - MERN Stack Project

Một ứng dụng quản lý công việc (Task Management) chuyên nghiệp được xây dựng theo phong cách Trello, tập trung vào trải nghiệm người dùng mượt mà và cấu trúc code chuẩn chỉnh.

## 🚀 Tính năng nổi bật

- **Giao diện hiện đại:** Xây dựng trên nền tảng **Material UI (MUI v6)**.
- **Dark/Light Mode:** Hỗ trợ chuyển đổi giao diện sáng/tối mượt mà qua `CssVarsProvider`.
- **Quản lý Board:** Cấu trúc Columns và Cards lồng nhau theo chuẩn dữ liệu thực tế.
- **Tối ưu Layout:** Hệ thống scroll riêng biệt cho từng Column và Board, không gây tràn trang.
- **Clean Code:** Tổ chức thư mục rõ ràng, dễ bảo trì và mở rộng.

## 🛠 Công nghệ sử dụng

- **Core:** ReactJS (Vite), TypeScript.
- **UI:** Material UI v6, Emotion, Lucide Icons.
- **Styling:** CSS-in-JS (MUI Style System).
- **Helper:** Lodash, Dayjs, Axios.

## 📁 Cấu trúc thư mục tiêu biểu

| Thư mục            | Chức năng                                                     |
| :----------------- | :------------------------------------------------------------ |
| `src/theme.ts`     | Cấu hình Dark/Light mode và định dạng chung (MUI Theme)       |
| `src/pages/Boards` | Quản lý logic và giao diện trang Board chi tiết               |
| `src/components`   | Chứa các thành phần dùng chung (AppBar, Modal, v.v.)          |
| `src/utils`        | Các hàm xử lý logic format, tính toán                         |
| `src/types`        | Định nghĩa TypeScript Interface cho dữ liệu Board/Column/Card |

## ⚙️ Cài đặt dự án

1. **Clone project:**
   ```bash
   git clone [https://github.com/your-username/trello-clone-mern.git](https://github.com/your-username/trello-clone-mern.git)
   ```
