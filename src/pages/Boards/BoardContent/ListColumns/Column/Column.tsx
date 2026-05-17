import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { CSS } from "@dnd-kit/utilities";
import { arrayMove } from "@dnd-kit/helpers";
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListCards from "./ListCards/ListCards";
import { Column as ColumnType } from "@/constants/types/BoardType";
import { mapOrder } from "@/utils/sort";

type ColumnProps = {
  colData: ColumnType;
  index: number;
  isOverlayPreview?: boolean;
};

const Column = ({ colData, index, isOverlayPreview = false }: ColumnProps) => {
  const { cardOrderIds, cards, title, _id } = colData;

  const [localCards, setLocalCards] = useState<any[]>([]);

  useEffect(() => {
    setLocalCards(mapOrder(cards, cardOrderIds, "_id"));
  }, [cards, cardOrderIds]);

  const { ref, transform, transition, attributes, listeners, isDragging }: any =
    useSortable({ id: _id, index, type: "column", data: { data: colData } });

  const style = {
    transform: isOverlayPreview ? undefined : CSS.Translate.toString(transform),
    transition,
    opacity: isDragging && !isOverlayPreview ? 0.4 : 1,
    boxShadow: isOverlayPreview ? "0px 10px 20px rgba(0,0,0,0.3)" : "none",
    zIndex: isDragging ? 100 : "auto",
    touchAction: "none",
  };

  const id = React.useId();
  const buttonId = `${id}-button-workspaces`;
  const menuId = `${id}-menu-workspaces`;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: any) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      ref={ref}
      style={style}
      sx={{
        minWidth: 300,
        maxWidth: 300,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(4px)",
        ml: 2,
        borderRadius: 1,
        height: "fit-content",
      }}
    >
      {/* header */}
      <Box
        onPointerDown={(e) => e.stopPropagation()}
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Box>
          <Tooltip title="More Options">
            <ExpandMoreIcon
              sx={{ color: "text.primary", cursor: "pointer" }}
              id={buttonId}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove Column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* LIST CARD */}
      <Box onPointerDown={(e) => e.stopPropagation()}>
        <ListCards cards={localCards} />
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Button
          startIcon={<AddCardIcon />}
          onPointerDown={(e) => e.stopPropagation()}
        >
          Add new card
        </Button>
        <Tooltip title={"Drag to move"}>
          {/* Nắm vào đây sẽ truyền thẳng lên Box tổng kích hoạt Provider Cha để kéo Column ngang */}
          <Box
            {...(isOverlayPreview ? {} : attributes)}
            {...(isOverlayPreview ? {} : listeners)}
            sx={{
              display: "inline-flex",
              cursor: isOverlayPreview ? "grabbing" : "grab",
              p: 0.5,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderRadius: 0.5,
              },
            }}
          >
            <DragHandleIcon />
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Column;
