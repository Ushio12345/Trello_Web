/**
 * File cấu hình ESLint
 * Dùng để quy định coding convention và kiểm tra lỗi code
 */

module.exports = {
  // Thiết lập môi trường chạy
  env: {
    browser: true, // Cho phép dùng window, document,...
    es2020: true, // Hỗ trợ cú pháp ES2020
    node: true, // Cho phép dùng module, require,...
  },

  // Kế thừa các rule có sẵn
  extends: [
    "eslint:recommended", // Rule cơ bản của ESLint
    "plugin:react/recommended", // Rule khuyến nghị cho React
    "plugin:react/jsx-runtime", // Hỗ trợ JSX Runtime React mới
    "plugin:react-hooks/recommended", // Rule cho React Hooks
  ],

  // Cấu hình parser
  parserOptions: {
    ecmaVersion: "latest", // Hỗ trợ ES mới nhất
    sourceType: "module", // Dùng import/export
  },

  // Thiết lập version React
  settings: {
    react: {
      version: "18.2",
    },
  },

  // Các plugin ESLint sử dụng
  plugins: ["react", "react-hooks", "react-refresh"],

  rules: {
     "no-restricted-imports": [
      "error",
      {
        "patterns": [{ "regex": "^@mui/[^/]+$" }]
      }
    ]
  },
    // Cảnh báo nếu export sai với React Refresh
    "react-refresh/only-export-components": "warn",

    // Bắt buộc dùng Hooks đúng cách
    "react-hooks/rules-of-hooks": "error",

    // Cảnh báo thiếu dependency trong useEffect
    "react-hooks/exhaustive-deps": "warn",

    // Tắt kiểm tra prop-types
    "react/prop-types": 0,

    // Tắt yêu cầu displayName cho component
    "react/display-name": 0,

    // Cảnh báo khi dùng console.log
    "no-console": 1,

    // Cảnh báo if lồng không cần thiết
    "no-lonely-if": 1,

    // Cảnh báo biến khai báo nhưng không dùng
    "no-unused-vars": 1,

    // Cảnh báo khoảng trắng dư cuối dòng
    "no-trailing-spaces": 1,

    // Cảnh báo nhiều khoảng trắng liên tiếp
    "no-multi-spaces": 1,

    // Cảnh báo nhiều dòng trống liên tiếp
    "no-multiple-empty-lines": 1,

    // Bắt buộc có khoảng trắng trước block
    // Ví dụ: if () {
    "space-before-blocks": ["error", "always"],

    // Bắt buộc có khoảng trắng trong object
    // Ví dụ: { name: "Anh" }
    "object-curly-spacing": [1, "always"],

    // Cảnh báo indent 2 spaces
    indent: ["warn", 2],

    // Cảnh báo dấu ;
    // "never" nghĩa là không dùng ;
    semi: [1, "always"],

    // Bắt buộc dùng dấu "
    // Ví dụ: "Hello"
    quotes: ["error", "double"],

    // Cảnh báo khoảng trắng trong array
    // Ví dụ: [ 1, 2 ]
    "array-bracket-spacing": 1,

    // Tắt kiểm tra xuống dòng khác hệ điều hành
    "linebreak-style": 0,

    // Cảnh báo xuống dòng gây lỗi cú pháp
    "no-unexpected-multiline": "warn",

    // Cảnh báo khoảng trắng quanh keyword
    // Ví dụ: if () {}
    "keyword-spacing": 1,

    // Cảnh báo dấu phẩy cuối
    // "comma-dangle": 1,
    "comma-dangle": ["error", "always-multiline"],
    // Cảnh báo khoảng trắng sau dấu phẩy
    "comma-spacing": 1,

    // Cảnh báo khoảng trắng trong arrow function
    // Ví dụ: () => {}
    "arrow-spacing": 1,
  },
};
