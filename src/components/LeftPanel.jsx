import { styles } from "../styles/appStyles";
import { LinkedInIcon } from "./icons/LinkedInIcon";


export function LeftPanel() {
  return (
    <aside className="leftPanel" style={styles.left}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Code Learning</h1>
        <p style={styles.subhead}>Small shipped experiments, building toward a portfolio.</p>
      </header>

      <section style={styles.grid}>
        <article style={styles.card}>
          <div style={styles.cardTop}>
            <div>
              <h2 style={styles.name}>Franck Hoffmann</h2>
              <p style={styles.meta}>Director of Product Design</p>
              <p style={styles.meta}>Tekmetric</p>
            </div>

            <a
              href="https://www.linkedin.com/in/franckhoffmann/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              style={styles.iconButton}
            >
              <LinkedInIcon />
            </a>
          </div>

          <footer style={styles.footer}>
            <span style={styles.badge}>V1</span>
            <span style={styles.footerText}>Deployed via GitHub Pages</span>
              <a
    href="https://github.com/franckhoffmann/code-learning"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.repoLink}
  >
    Repo ↗
  </a>
          </footer>
        </article>
      </section>
    </aside>
  );
}
