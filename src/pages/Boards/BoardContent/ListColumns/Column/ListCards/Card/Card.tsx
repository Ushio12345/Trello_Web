import Button from "@mui/material/Button";
import { Card as MUICard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import { Typography } from "@mui/material";
const Card = () => {
  return (
    <MUICard
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp
              "
      />
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          p: " 0 4px 8px 4px ",
          borderTop: 1,
          borderColor: "border",
          pt: 1,
          borderRadius: 0.5,
        }}
      >
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          15
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          15
        </Button>
      </CardActions>
    </MUICard>
  );
};

export default Card;
