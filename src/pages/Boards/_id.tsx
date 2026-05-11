import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

function Board() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Box>
  );
}

export default Board;
