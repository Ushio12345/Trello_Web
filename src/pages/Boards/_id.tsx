import Box from "@mui/material/Box";

import AppBar from "@/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "@/apis/mock-data";
function Board() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
        padding: 0,
        margin: 0,
      }}
    >
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Box>
  );
}

export default Board;
