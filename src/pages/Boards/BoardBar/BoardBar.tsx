import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockOutlinedIcon from "@mui/icons-material/VpnLockOutlined";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Button, Tooltip } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Board } from "@/constants/types/BoardType";
import { capitalizeFirstLetter } from "@/utils/formatText";

const MENU_STYLE = {
  px: "5px",
  color: "primary.main",
  bgcolor: "background.default",
  border: "none",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

type BoardBarProps = { board: Board };
const BoardBar = ({ board }: BoardBarProps) => {
  const { title, type } = board;
  console.log(board);

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 2,
        overflowX: "auto",
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip
          icon={<DashboardIcon />}
          label={title}
          sx={MENU_STYLE}
          clickable
        />
        <Chip
          icon={<VpnLockOutlinedIcon />}
          label={capitalizeFirstLetter(type)}
          sx={MENU_STYLE}
          clickable
        />
        <Chip
          icon={<AddToDriveOutlinedIcon />}
          label="Add To Google Drive "
          sx={MENU_STYLE}
          clickable
        />
        <Chip
          icon={<FlashOnOutlinedIcon />}
          label="Automation"
          sx={MENU_STYLE}
          clickable
        />
        <Chip
          icon={<FilterListOutlinedIcon />}
          label="Filters"
          sx={MENU_STYLE}
          clickable
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button variant="outlined" size="small" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup
          max={4}
          renderSurplus={(surplus) => <span>+{surplus.toString()[0]}</span>}
          total={10}
          sx={{
            "& .MuiAvatar-root": {
              height: 34,
              width: 34,
              fontSize: 14,
              color: "white",
              "&:first-of-type": { backgroundColor: "grey.400" },
              cursor: "pointer",
            },
          }}
        >
          <Tooltip title={"AnhQue"}>
            <Avatar alt="AnhQue" src="/static/images/avatar/1.jpg" sx={{}} />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
