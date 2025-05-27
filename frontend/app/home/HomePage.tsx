import MenuBar from "../components/MenuBar";
import ContactKianButton from "../components/ContactKian";
import KianGitHubButton from "../components/KianGithubButton";

export default function HomePage() {
    return (
      <main className="container" style={{ padding: '2rem 0' }}>
        <h1>Welcome to the Portfolio Project</h1>
        <p>Feel free to explore our projects and get in touch!</p>
  
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        <button type="button" className="btn">Kian Wheeler</button>
        <button type="button" className="btn">Aiden Dunaway</button>
          <ContactKianButton />
          <KianGitHubButton />
        </div>
      </main>
    );
  }
  