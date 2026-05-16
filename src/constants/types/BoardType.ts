export interface Card {
  _id: string;
  boardId: string;
  columnId: string;
  title: string;
  description: string | null;
  cover: string | null;
  memberIds: string[];
  comments: string[];
  attachments: string[];
}

export interface Column {
  _id: string;
  boardId: string;
  title: string;
  cardOrderIds: string[]; // Mảng chứa các Id của Cards để sắp xếp thứ tự
  cards: Card[]; // Mảng chứa dữ liệu Cards chi tiết
}

// Định nghĩa cấu trúc của một Board
export interface Board {
  _id: string;
  title: string;
  description: string;
  type: "public" | "private";
  ownerIds: string[];
  memberIds: string[];
  columnOrderIds: string[]; // Mảng chứa các Id của Columns để sắp xếp thứ tự
  columns: Column[]; // Mảng chứa dữ liệu Columns chi tiết
}
