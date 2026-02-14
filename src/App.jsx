export default function App() {
  return (
    <div style={styles.page}>
      <main style={styles.container}>
        <div style={styles.layout}>
          {/* LEFT */}
          <section style={styles.left}>
            <header style={styles.header}>
              <h1 style={styles.h1}>Code Learning</h1>
              <p style={styles.subhead}>
                Small shipped experiments, building toward a portfolio.
              </p>
            </header>

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
              </footer>
            </article>
          </section>

          {/* RIGHT */}
          <aside style={styles.right}>
            <h2 style={styles.rightTitle}>Code Learning - Day 1</h2>
            <p style={styles.rightSubhead}>
              What I shipped, what I learned, and why this repo exists.
            </p>

            <div style={styles.notesCard}>
              <section style={styles.noteSection}>
                <h3 style={styles.h3}>Objective</h3>
                <p style={styles.p}>
                  Set up a modern frontend workflow from scratch and deploy a live React app using GitHub.
                </p>
              </section>

              <section style={styles.noteSection}>
                <h3 style={styles.h3}>What I Built</h3>
                <ul style={styles.ul}>
                  <li>A React + Vite project</li>
                  <li>A simple profile card homepage</li>
                  <li>Automatic deployment to GitHub Pages using GitHub Actions</li>
                  <li>
                    A live production URL:{" "}
                    <a
                      href="https://franckhoffmann.github.io/code-learning/"
                      target="_blank"
                      rel="noreferrer"
                      style={styles.link}
                    >
                      https://franckhoffmann.github.io/code-learning/
                    </a>
                  </li>
                </ul>
              </section>

              <section style={styles.noteSection}>
                <h3 style={styles.h3}>Core Concepts I Learned</h3>

                <h4 style={styles.h4}>1. Local Development Loop</h4>
                <p style={styles.p}>
                  Edit → Save → Dev Server → Browser → Commit → Push → Deploy
                </p>
                <p style={styles.p}>
                  Key command: <code style={styles.inlineCode}>npm run dev</code>
                </p>
                <p style={styles.p}>
                  Default dev URL: <code style={styles.inlineCode}>http://localhost:5173/</code>
                </p>
                <ul style={styles.ul}>
                  <li>If port 5173 is in use, Vite auto-increments (5174, 5175, etc.).</li>
                  <li>Stop the server with <code style={styles.inlineCode}>Control + C</code>.</li>
                </ul>
                <p style={styles.p}>Check port usage:</p>
                <pre style={styles.pre}>
                  <code>{`lsof -nP -iTCP:5173 -sTCP:LISTEN`}</code>
                </pre>
                <p style={styles.p}>Kill process:</p>
                <pre style={styles.pre}>
                  <code>{`kill <PID>`}</code>
                </pre>

                <h4 style={styles.h4}>2. Project Structure (React + Vite)</h4>
                <ul style={styles.ul}>
                  <li><code style={styles.inlineCode}>src/App.jsx</code> → Main React component</li>
                  <li><code style={styles.inlineCode}>vite.config.js</code> → Build configuration</li>
                  <li><code style={styles.inlineCode}>package.json</code> → Scripts + dependencies</li>
                  <li><code style={styles.inlineCode}>.gitignore</code> → Keeps node_modules out of Git</li>
                  <li><code style={styles.inlineCode}>.github/workflows/deploy.yml</code> → CI/CD pipeline</li>
                </ul>
                <p style={styles.p}>
                  Vite builds to <code style={styles.inlineCode}>dist/</code>. Do not commit dist. Actions builds it.
                </p>

                <h4 style={styles.h4}>3. Git + GitHub Auth</h4>
                <p style={styles.p}>
                  GitHub doesn’t allow password auth for HTTPS pushes. Use Personal Access Token, SSH, or GitHub Desktop.
                </p>

                <h4 style={styles.h4}>4. CI/CD with GitHub Actions</h4>
                <p style={styles.p}>
                  <code style={styles.inlineCode}>main</code> = source, Actions builds, Pages serves the built output.
                </p>
                <p style={styles.p}>
                  Enabled: <strong>Settings → Pages → Source → GitHub Actions</strong>
                </p>

                <h4 style={styles.h4}>5. Vite Base Path</h4>
                <p style={styles.p}>
                  Pages serves under <code style={styles.inlineCode}>/code-learning/</code>, so build uses:
                </p>
                <pre style={styles.pre}>
                  <code>{`base: command === 'build' ? '/code-learning/' : '/'`}</code>
                </pre>

                <h4 style={styles.h4}>Key Commands Used</h4>
                <pre style={styles.pre}>
                  <code>{`node -v
npm -v
npm run dev
npm run build
git status
git add .
git commit -m "message"
lsof -nP -iTCP:5173 -sTCP:LISTEN
kill <PID>`}</code>
                </pre>
              </section>

              <section style={{ ...styles.noteSection, borderBottom: "none", paddingBottom: 0 }}>
                <h3 style={styles.h3}>Strategic Takeaway</h3>
                <p style={styles.p}>
                  This repo is about shipping repeatedly, understanding modern tooling, and building credibility as a design leader who codes.
                  The infrastructure now works. Future work becomes iteration, not setup.
                </p>
              </section>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.5H4.5V23.5H0.5V8.5zM8 8.5H11.8V10.55H11.85C12.38 9.55 13.68 8.5 15.62 8.5C19.72 8.5 20.5 11.05 20.5 14.35V23.5H16.5V15.4C16.5 13.47 16.47 11 14 11C11.5 11 11.12 12.95 11.12 15.28V23.5H7.12V8.5H8z" />
    </svg>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0f17",
    color: "#e8edf7",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "64px 20px",
  },

  // Layout
  layout: {
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    gap: 22,
    alignItems: "start",
  },
  left: {},
  right: {},

  // Left header + card
  header: { marginBottom: 18 },
  h1: { margin: 0, fontSize: 28, letterSpacing: "-0.02em" },
  subhead: { margin: "10px 0 0 0", color: "#a9b3c7", lineHeight: 1.4, fontSize: 14 },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  cardTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  name: { margin: 0, fontSize: 18, letterSpacing: "-0.01em" },
  meta: { margin: "6px 0 0 0", color: "#a9b3c7", fontSize: 14 },
  iconButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    color: "#e8edf7",
    textDecoration: "none",
  },
  footer: {
    marginTop: 16,
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    color: "#c9d3e8",
  },
  footerText: { fontSize: 12, color: "#a9b3c7" },

  // Right notes
  rightTitle: { margin: 0, fontSize: 18, letterSpacing: "-0.01em" },
  rightSubhead: { margin: "8px 0 14px 0", color: "#a9b3c7", fontSize: 14, lineHeight: 1.5 },

  notesCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  noteSection: {
    marginBottom: 16,
    paddingBottom: 14,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  h3: { margin: "0 0 10px 0", fontSize: 14, color: "#e8edf7" },
  h4: { margin: "14px 0 8px 0", fontSize: 13, color: "#c9d3e8" },
  p: { margin: "0 0 10px 0", color: "#a9b3c7", lineHeight: 1.6, fontSize: 14 },
  ul: { margin: "0 0 10px 18px", padding: 0, color: "#a9b3c7", lineHeight: 1.6, fontSize: 14 },

  pre: {
    margin: "0 0 10px 0",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.25)",
    overflowX: "auto",
    color: "#e8edf7",
    fontSize: 13,
    lineHeight: 1.5,
  },
  inlineCode: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: "0.95em",
    padding: "2px 6px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.18)",
    color: "#e8edf7",
  },
  link: { color: "#c9d3e8", textDecoration: "underline", textUnderlineOffset: 3 },
}
