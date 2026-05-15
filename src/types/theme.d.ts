import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // Fix lỗi khi sử dụng trong Component: theme.trello...
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
      boardContentHeight: string;
      columnHeaderHeight: string;
      columnFooterHeight: string;
    };
  }

  // Fix lỗi khi khai báo trong hàm extendTheme
  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }

  // Cần thiết cho tính năng Dark/Light Mode (CssVarsProvider)
  interface CssVarsThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }
}
