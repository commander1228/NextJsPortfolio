

import Script from "next/script";
import MenuBar from "../components/MenuBar";
import SnakeGame from "../components/SnakeGame";

export default function Snake() {
  return (
    <main className="container mx-auto p-4">
      <MenuBar />
      <h1>Snake Game</h1>
      <SnakeGame />
    </main>
  );
}

