import Box from "@mui/material/Box";

import ListColumns from "./ListColumns/ListColumns";

const BoardContent = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: "background.paper",
        py: 2,
      }}
    >
      <ListColumns />
    </Box>
  );
};

export default BoardContent;
