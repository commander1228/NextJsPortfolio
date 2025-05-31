"use client";
import { useRef, useEffect } from "react";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  
  const TileSize = 25;
  const rows = 20;
  const columns = 20;
  const CanvasDimension =500;

  var SnakeX = TileSize * 5;
  var SnakeY = TileSize * 5;
  var VelocityX = 0;
  var VelocityY = 0;
  const GameoOverText = "Game Over";
  const StartGameText = "Start Game";

  var SnakeBody: [number,number][] = [];
  var FoodX: number;
  var FoodY: number;

  var GameActive = true;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if(canvas.getContext("2d")){
      ctxRef.current = canvas.getContext("2d");
    }
    document.addEventListener("keyup",SnakeDirection)
    GenerateFood();
    setInterval(() => {
      GameLoop();
    }, 75);
  }, []);

  const GameLoop = () => {
     const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.font = "bold 36px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    if(!GameActive){
      ctx.fillText(GameoOverText,CanvasDimension / 2 - ctx.measureText(GameoOverText).width / 2,CanvasDimension / 2 - ctx.measureText(GameoOverText).width / 2)
      return;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,columns*TileSize,rows*TileSize);

    ctx.fillStyle = "red"
    ctx.fillRect(FoodX,FoodY,TileSize,TileSize);

    if (SnakeX == FoodX && SnakeY == FoodY){
      SnakeBody.push([FoodX,FoodY]);
        GenerateFood();
    }

    for (let i = SnakeBody.length-1; i > 0; i--) {
        SnakeBody[i] = SnakeBody[i-1];
    }
    if (SnakeBody.length) {
        SnakeBody[0] = [SnakeX, SnakeY];
    }

    ctx.fillStyle = "green";
    SnakeX += VelocityX * TileSize;
    SnakeY += VelocityY * TileSize;
    ctx.fillRect(SnakeX,SnakeY,TileSize,TileSize);
   for (let i = 0; i < SnakeBody.length; i++) {
        ctx.fillRect(SnakeBody[i][0], SnakeBody[i][1], TileSize, TileSize);
    }

    GameStateCheck();
  }

   const GenerateFood = () => {
    FoodX = Math.floor(Math.random() * columns) * TileSize;
    FoodY = Math.floor(Math.random() * rows) * TileSize;
  }

   const SnakeDirection= (e:KeyboardEvent) => {
    switch (e.code) {
  case "ArrowUp":
    if (VelocityY !== 1) {
      VelocityX = 0;
      VelocityY = -1;
    }
    break;

  case "ArrowDown":
    if (VelocityY !== -1) {
      VelocityX = 0;
      VelocityY = 1;
    }
    break;

  case "ArrowLeft":
    if (VelocityX !== 1) {
      VelocityX = -1;
      VelocityY = 0;
    }
    break;

  case "ArrowRight":
    if (VelocityX !== -1) {
      VelocityX = 1;
      VelocityY = 0;
    }
    break;
}
    
  }

   const GameStateCheck = () => {
    if (SnakeX < 0 || SnakeX > CanvasDimension || SnakeY < 0 || SnakeY > CanvasDimension){
      GameActive = false;
    }

    for(let i = 0; i < SnakeBody.length; i++){
      if(SnakeX == SnakeBody[i][0] && SnakeY == SnakeBody[i][1]){
        GameActive = false;
      }
    }
    
  }



  return (
    <canvas
      ref={canvasRef}
      width={columns*TileSize}
      height={rows*TileSize}
      className="border border-black"
    />
  );
}
