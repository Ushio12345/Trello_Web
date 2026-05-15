import { extendTheme } from "@mui/material/styles";
const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COL_HEADER_HEIGHT = "50px";
const COL_FOOTER_HEIGHT = "56px";
const theme = extendTheme({
  colorSchemeSelector: "class",
  colorSchemes: {
    light: {
      palette: {
        // ===== PRIMARY =====
        primary: {
          main: "#1E3A8A",
          light: "#3B82F6",
          dark: "#172554",
          contrastText: "#FFFFFF",
        },

        // ===== SECONDARY =====
        secondary: {
          main: "#6D7698",
          light: "#A5B4FC",
          dark: "#4C5470",
          contrastText: "#FFFFFF",
        },

        // ===== SUCCESS =====
        success: {
          main: "#10B981",
          light: "#6EE7B7",
          dark: "#047857",
          contrastText: "#FFFFFF",
        },

        // ===== WARNING =====
        warning: {
          main: "#F59E0B",
          light: "#FCD34D",
          dark: "#B45309",
        },

        // ===== ERROR =====
        error: {
          main: "#EF4444",
          light: "#FCA5A5",
          dark: "#B91C1C",
        },

        // ===== INFO =====
        info: {
          main: "#0EA5E9",
          light: "#7DD3FC",
          dark: "#0369A1",
        },

        // ===== BACKGROUND =====
        background: {
          default: "#F9FAFB",
          paper: "#FFFFFF",
        },

        // ===== TEXT =====
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          disabled: "#9CA3AF",
        },

        // ===== GREY =====
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },

        // ===== CUSTOM =====
        custom: {
          sidebar: "#172554",
          sidebarHover: "#1E3A8A",

          card: "#FFFFFF",
          border: "#E5E7EB",

          active: "#2563EB",
          inactive: "#94A3B8",

          online: "#22C55E",
          offline: "#94A3B8",

          pending: "#F59E0B",
          approved: "#22C55E",
          rejected: "#EF4444",

          occupied: "#3B82F6",
          available: "#10B981",
          maintenance: "#EF4444",
          cleaning: "#8B5CF6",
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main: "#3B82F6",
          light: "#60A5FA",
          dark: "#1D4ED8",
          contrastText: "#FFFFFF",
        },

        secondary: {
          main: "#94A3B8",
        },

        background: {
          default: "#0F172A",
          paper: "#1E293B",
        },

        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
        },
      },
    },
  },

  // ===== TYPOGRAPHY =====
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),

    pageTitle: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    subText: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#6B7280",
    },

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
    },
  },

  // ===== BORDER =====
  shape: {
    borderRadius: 14,
  },

  // ===== COMPONENTS =====
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          // Tự động lấy màu text secondary của theme hiện tại
          "& label": { color: theme.palette.text.secondary },
          "& label.Mui-focused": { color: theme.palette.primary.main },
          "& .MuiInputBase-input": { fontSize: "0.9rem" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          // fieldset là cái đường viền của OutlinedInput
          "& fieldset": {
            borderColor: theme.palette.mode === "light" ? "#E5E7EB" : "#334155",
          },
          "&:hover fieldset": {
            borderColor: `${theme.palette.primary.main} !important`,
          },
          "&.Mui-focused fieldset": {
            borderColor: `${theme.palette.primary.main} !important`,
            borderWidth: "1px !important",
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "5px",
          padding: "5px 20px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          // AppBar sẽ trắng ở Light và tối ở Dark
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow:
            theme.palette.mode === "light"
              ? "0 2px 10px rgba(0,0,0,0.05)"
              : "none",
        }),
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      body: {
        // Tùy chỉnh thanh cuộn cho toàn bộ trang web
        "*::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#4b5563" : "#d1d5db",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#6b7280" : "#9ca3af",
        },
        // Tùy chỉnh màu nền của đường dẫn thanh cuộn (track)
        "*::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          margin: 2,
        },
      },
    }),
  },
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COL_HEADER_HEIGHT,
    columnFooterHeight: COL_FOOTER_HEIGHT,
  },
});

export default theme;
