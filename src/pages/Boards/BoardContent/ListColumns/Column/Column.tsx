import React from "react";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import AddCardIcon from "@mui/icons-material/AddCard";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListCards from "./ListCards/ListCards";

const Column = () => {
  const id = React.useId();
  const buttonId = `${id}-button-workspaces`;
  const menuId = `${id}-menu-workspaces`;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        minWidth: 300,
        maxWidth: 300,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(4px)",
        ml: 2,
        borderRadius: 1,
        borderWidth: 2,
        height: "fit-content",
      }}
    >
      {/* header */}
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Col</Typography>
        <Box>
          <Tooltip title="More Options">
            <ExpandMoreIcon
              sx={{ color: "text.primary", cursor: "pointer" }}
              id={buttonId}
              aria-controls={open ? menuId : undefined}
              aria-haspopup="true"
              aria-expanded={open}
              onClick={(event: React.MouseEvent<SVGSVGElement>) =>
                handleClick(event)
              }
            />
          </Tooltip>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": buttonId,
              },
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Past</ListItemText>
            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive Column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove Column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* LIST CARD */}
      <ListCards />
      {/* footer */}
      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title={"Drag to move"}>
          <DragHandleIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Column;
