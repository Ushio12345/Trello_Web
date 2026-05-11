import Container from "@mui/material/Container";
import { useState } from "react";
import theme from "./types/theme";
import Box from "@mui/material/Box";
import Boards from "./pages/Boards";
import MainLayout from "./components/layouts/MainLayout";
import Board from "./pages/Boards/_id";

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
