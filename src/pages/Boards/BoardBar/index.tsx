import Box from "@mui/material/Box";
import React from "react";

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        px: 2,

        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ color: "text.primary", fontWeight: "bold" }}>
        Board Bar Content
      </Box>
    </Box>
  );
};

export default BoardBar;
