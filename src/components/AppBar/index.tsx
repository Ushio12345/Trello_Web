import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ModeSelect from "../ModeSelect";

const AppBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main	",
      }}
    >
      <ModeSelect />
    </Box>
  );
};

export default AppBar;
