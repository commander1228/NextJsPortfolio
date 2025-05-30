import MenuBar from "../components/MenuBar";
import Link from "next/link";

export default function KianMain(){
    return(
        <main className="container mx-auto p-4">
        <MenuBar />
      <h1 className="text-3xl font-bold mb-4">Welcome to my Project Portfolio!</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>This is a placeholder for your about me section.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link href="/snake"className="btn">Snake</Link>
          <Link href="/home"className="btn">Project 2</Link>
          <Link href="/home"className="btn">Project 3</Link>
          <Link href="/home"className="btn">Project 4</Link>
          <Link href="/home"className="btn">Project 5</Link>
          <Link href="/home"className="btn">Project 6</Link>
        </div>
      </section>
    </main>
  );
}