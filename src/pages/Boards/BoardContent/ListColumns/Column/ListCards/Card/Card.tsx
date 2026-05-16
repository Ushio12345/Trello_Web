import Button from "@mui/material/Button";
import { Card as MUICard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import { Typography } from "@mui/material";
import { Card as CardType } from "@/constants/types/BoardType";
type CardProps = {
  card: CardType;
};
const Card = ({ card }: CardProps) => {
  const { title, cover, attachments, comments, description, memberIds } = card;

  const shouldShowActionButton = () => {
    return !!attachments.length || !!comments.length || !!memberIds.length;
  };
  return (
    <MUICard
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      {cover && (
        <CardMedia component="img" alt={title} height="150" image={cover} />
      )}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ m: 0 }}>
          {title}
        </Typography>
      </CardContent>
      {shouldShowActionButton() && (
        <CardActions
          sx={{
            p: "0 4px 8px 4px",
          }}
        >
          {!!memberIds?.length && (
            <Button size="small" startIcon={<GroupIcon />}>
              {memberIds.length}
            </Button>
          )}
          {!!comments?.length && (
            <Button size="small" startIcon={<CommentIcon />}>
              {comments.length}
            </Button>
          )}
          {!!attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </MUICard>
  );
};

export default Card;
