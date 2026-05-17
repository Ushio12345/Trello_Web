import Box from "@mui/material/Box";
import Card from "./Card/Card";
import { Card as CardType } from "@/constants/types/BoardType";
type ListCardProps = {
  cards: CardType[];
};
const ListCards = ({ cards }: ListCardProps) => {
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
      {cards.map((c, index) => (
        <Card key={c._id} card={c} index={index} />
      ))}
    </Box>
  );
};

export default ListCards;
