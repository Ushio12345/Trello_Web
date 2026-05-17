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
import { useSortable } from "@dnd-kit/react/sortable";
import { CSS } from "@dnd-kit/utilities";
type CardProps = {
  card: CardType;
  index: number;
  isOverlayPreview: boolean;
};
const Card = ({ card, index, isOverlayPreview }: CardProps) => {
  const { title, cover, attachments, comments, description, memberIds } = card;
  const { ref, transform, transition, attributes, listeners, isDragging }: any =
    useSortable({
      id: card._id,
      index,
      type: "card",
      data: { data: card },
    });
  const shouldShowActionButton = () => {
    return !!attachments.length || !!comments.length || !!memberIds.length;
  };
  const style = {
    transform: isOverlayPreview ? undefined : CSS.Translate.toString(transform),
    transition,
    opacity: isDragging && !isOverlayPreview ? 0.4 : 1,
    boxShadow: isOverlayPreview ? "0px 10px 20px rgba(0,0,0,0.3)" : "none",
    zIndex: isDragging ? 100 : "auto",
    touchAction: "none",
  };
  return (
    <MUICard
      ref={ref}
      style={style}
      {...(isOverlayPreview ? {} : attributes)}
      {...(isOverlayPreview ? {} : listeners)}
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
