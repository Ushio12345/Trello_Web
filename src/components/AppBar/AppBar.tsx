import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ModeSelect from "../ModeSelect/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { IconTrello } from "../Icon";
import SvgIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recents from "./Menus/Recents";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Profile from "./Menus/Profile";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
const AppBar = () => {
  return (
    <Box
      sx={{
        px: 2,
        gap: 2,
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "auto",
      }}
    >
      {/* left */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          sx: "none",
        }}
      >
        <AppsIcon color="primary" />
        <Box
          sx={{
            gap: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "primary.main",
          }}
        >
          <SvgIcon component={IconTrello} inheritViewBox />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Workspaces />
          <Recents />
          <Starred />
          <Templates />

          <Button
            variant="outlined"
            size="small"
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      {/* right */}

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          size="small"
          sx={{ minWidth: 120 }}
        />
        <ModeSelect />
        <Box>
          <Tooltip title="Notifications">
            <IconButton>
              <Badge color="error" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Help">
            <IconButton>
              <HelpOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Profile />
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
