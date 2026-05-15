import Box from "@mui/material/Box";
import Card from "./Card/Card";

const ListCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px 5px 5px",
        m: "0 5px",
        overflowX: "hidden",
        overflowY: "auto",

        maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} - 
      ${theme.trello.columnHeaderHeight} - 
      ${theme.trello.columnFooterHeight}
    )`,

        "&::-webkit-scrollbar": { width: "5px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#576574" : "#ced0da",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#8395a7" : "#bfc2cf",
        },
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default ListCards;
