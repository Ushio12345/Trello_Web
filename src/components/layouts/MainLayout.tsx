import { AppBar, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Boards from "../../pages/Boards/BoardBar/BoardBar";
const MainLayout = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Phần 1: Header - Cao cố định */}
      <Box sx={{ height: (theme) => theme.trello.appBarHeight }}>
        <AppBar />
      </Box>

      <Box
        sx={{
          height: (theme) => `calc(100vh - ${theme.trello.appBarHeight})`,
          overflowY: "auto",
        }}
      >
        {/* <Outlet /> */}
        <Boards />
      </Box>
    </Box>
  );
};

export default MainLayout;
