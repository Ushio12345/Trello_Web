import "@mui/material/styles";

declare module "@mui/material/styles" {
  // ===== CUSTOM TYPOGRAPHY =====
  interface TypographyVariants {
    pageTitle: React.CSSProperties;
    subText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    pageTitle?: React.CSSProperties;
    subText?: React.CSSProperties;
  }

  // ===== CUSTOM PALETTE =====
  interface Palette {
    custom: {
      sidebar: string;
      sidebarHover: string;

      card: string;
      border: string;

      active: string;
      inactive: string;

      online: string;
      offline: string;

      pending: string;
      approved: string;
      rejected: string;

      occupied: string;
      available: string;
      maintenance: string;
      cleaning: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      sidebar?: string;
      sidebarHover?: string;

      card?: string;
      border?: string;

      active?: string;
      inactive?: string;

      online?: string;
      offline?: string;

      pending?: string;
      approved?: string;
      rejected?: string;

      occupied?: string;
      available?: string;
      maintenance?: string;
      cleaning?: string;
    };
  }
}

// ===== ENABLE TYPOGRAPHY VARIANT =====
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
    subText: true;
  }
}
declare module "@mui/material/styles" {
  // Fix lỗi khi sử dụng trong Component (theme.trello)
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
    };
  }

  // Fix lỗi khi cấu hình trong extendTheme (CssVarsThemeOptions)
  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }

  // Bổ sung cho riêng phần Experimental Extend Theme của MUI
  interface CssVarsThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }
}
