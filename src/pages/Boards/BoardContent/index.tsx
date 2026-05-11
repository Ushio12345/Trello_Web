import Box from "@mui/material/Box";

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,

        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "flex-start",
        overflowX: "auto",
        overflowY: "hidden",
        p: 2,
      }}
    >
      <Box sx={{ color: "text.secondary" }}>
        Nội dung các List và Card sẽ nằm ở đây
      </Box>
    </Box>
  );
};

export default BoardContent;
