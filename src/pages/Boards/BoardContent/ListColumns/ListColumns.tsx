import React from "react";

import { Box, Button } from "@mui/material";
import Column from "./Column/Column";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
const ListColumns = () => {
  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": { my: 5 },
      }}
    >
      <Column />
      <Column />
      <Box
        sx={{
          minWidth: 300,
          maxWidth: 300,
          alignContent: "flex-start",
          alignItems: "flex-start",
          mx: 2,

          height: (theme) => theme.trello.columnHeaderHeight,
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.05)",
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "flex-start",
            ml: 1.5,
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumns;
