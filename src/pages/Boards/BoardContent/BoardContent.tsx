import Box from "@mui/material/Box";

import ListColumns from "./ListColumns/ListColumns";
import { Board } from "@/constants/types/BoardType";
import { mapOrder } from "@/utils/sort";
type BoardContentProps = { board: Board };
const BoardContent = ({ board }: BoardContentProps) => {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: "background.paper",
        py: 2,
      }}
    >
      <ListColumns cols={orderedColumns} />
    </Box>
  );
};

export default BoardContent;
