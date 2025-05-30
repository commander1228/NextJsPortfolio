import MenuBar from "../components/MenuBar";
import ContactKianButton from "../components/ContactKian";
import KianGitHubButton from "../components/KianGithubButton";
import KianPageButton from "../components/KianPageButton";

export default function HomePage() {
  return (
    <div className="container">
      <MenuBar />
      <h1>Welcome to the Portfolio Project</h1>
      <p>Feel free to explore our projects and get in touch!</p>

      <div className="flex gap-4 mt-6">
        <ContactKianButton />
        <KianGitHubButton />
      </div>
    </div>
  );
}
