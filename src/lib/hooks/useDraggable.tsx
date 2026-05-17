import { useDraggable } from "@dnd-kit/react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Button } from "@mui/material";
function Draggable() {
  const { ref } = useDraggable({
    id: "draggable",
  });

  return (
    <Button ref={ref}>
      <DragIndicatorIcon />
    </Button>
  );
}
export default Draggable;
