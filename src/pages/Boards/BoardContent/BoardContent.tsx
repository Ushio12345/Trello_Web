import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { Board } from "@/constants/types/BoardType";
import { DragDropProvider } from "@dnd-kit/react";
import { arrayMove, move } from "@dnd-kit/helpers";
import { DragOverlay } from "@dnd-kit/react";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";

type BoardContentProps = { board: Board };

const BoardContent = ({ board }: BoardContentProps) => {
  const [columns, setColumns] = useState<any[]>([]);
  const [items, setItems] = useState<Record<string, string[]>>({});
  const [cardsMap, setCardsMap] = useState<Record<string, any>>({});
  console.log("col", columns);
  console.log("item", items);
  console.log("card", cardsMap);

  // Quản lý trạng thái kéo
  const [activeDragItemId, setActiveDragItemId] = useState<string | null>(null);
  const [activeDragType, setActiveDragType] = useState<string | null>(null);
  const [activeDragData, setActiveDragData] = useState<any>(null);

  const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
  };

  useEffect(() => {
    if (board?.columns) {
      setColumns(board.columns);

      const initialItems: Record<string, string[]> = {};
      const initialCardsMap: Record<string, any> = {};

      // board.columns.forEach((col) => {
      //   initialItems[col._id.toString()] =
      //     col.cards?.map((card: any) => card._id.toString()) || [];
      //   col.cards?.forEach((card: any) => {
      //     initialCardsMap[card._id.toString()] = card;
      //   });
      // });

      board.columns.forEach((col) => {
        initialItems[col._id.toString()] =
          col.cardOrderIds.map((id) => id.toString()) || [];
        col.cards.forEach((c) => {
          initialCardsMap[c._id] = c;
        });
      });

      setItems(initialItems);
      setCardsMap(initialCardsMap);
    }
  }, [board]);
  // kéo
  const handleDragStart = (event: any) => {
    // console.log("start", event);
    const { operation } = event;
    if (!operation) return;

    setActiveDragItemId(operation.source.id.toString());
    setActiveDragType(
      operation.source.type === "card"
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN,
    );
    setActiveDragData(operation.source.data?.data || null);
  };
  // giữa
  const handleDragOver = (event: any) => {
    const { operation } = event;
    if (!operation) return;

    const { source, target } = operation;
    if (!target) return;

    // KÉO RÊ COLUMN
    if (activeDragType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (source.id.toString() !== target.id.toString()) {
        const oldIndex = columns.findIndex(
          (c) => c._id.toString() === source.id.toString(),
        );
        const newIndex = columns.findIndex(
          (c) => c._id.toString() === target.id.toString(),
        );
        if (oldIndex !== -1 && newIndex !== -1) {
          setColumns((prev) => arrayMove(prev, oldIndex, newIndex));
        }
      }
      return;
    }

    if (source.type === "card") {
      setItems((prevItems) => move(prevItems, event));
    }
  };

  //  thả - đang kéo chưa thả
  const handleDragEnd = (event: any) => {
    console.log("end", event);

    const { operation } = event;

    // Tạo bản backup xử lý kết thúc kéo trước khi reset state overlay
    if (operation) {
      const { source, target } = operation;
      if (activeDragType) {
        // Chốt hạ Column
        if (activeDragType === "ACTIVE_DRAG_ITEM_TYPE_COLUMN") {
          if (source.id.toString() !== target.id.toString()) {
            const oldIndex = columns.findIndex(
              (c) => c._id.toString() === source.id.toString(),
            );
            const newIndex = columns.findIndex(
              (c) => c._id.toString() === target.id.toString(),
            );
            if (oldIndex !== -1 && newIndex !== -1) {
              setColumns(arrayMove(columns, oldIndex, newIndex));
            }
          }
        }
        // Card
        if (source.type === "card") {
          setItems((prevItems) => move(prevItems, event));
          console.log("Card chốt vị trí mới xuyên cột thành công!");
        }
      }
    }

    // Reset lại toàn bộ state kéo về null
    setActiveDragData(null);
    setActiveDragItemId(null);
    setActiveDragType(null);
  };

  const orderedColumns = columns.map((col) => {
    const cardIdsInCol = items[col._id.toString()] || [];
    const completeCards = cardIdsInCol
      .map((id) => cardsMap[id])
      .filter(Boolean);

    return {
      ...col,
      cards: completeCards,
      cardOrderIds: cardIdsInCol,
      activeDragType:
        activeDragType === ACTIVE_DRAG_ITEM_TYPE.CARD
          ? "card"
          : activeDragType === ACTIVE_DRAG_ITEM_TYPE.COLUMN
            ? "column"
            : null,
    };
  });

  return (
    <DragDropProvider
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.boardContentHeight,
          backgroundColor: "background.paper",
          py: 2,
        }}
      >
        <ListColumns cols={orderedColumns} />

        <DragOverlay>
          {(source) => {
            if (!source) return null;

            if (source.type === "column") {
              const activeCol = orderedColumns.find(
                (c) => c._id.toString() === source.id.toString(),
              );
              if (!activeCol) return null;

              return (
                <Column colData={activeCol} index={0} isOverlayPreview={true} />
              );
            }

            if (source.type === "card") {
              const activeCard = cardsMap[source.id.toString()];

              if (!activeCard) return null;

              return (
                <Card card={activeCard} index={0} isOverlayPreview={true} />
              );
            }

            return null;
          }}
        </DragOverlay>
      </Box>
    </DragDropProvider>
  );
};

export default BoardContent;
