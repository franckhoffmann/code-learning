export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        {/* LEFT */}
        <aside style={styles.left}>
          <header style={styles.header}>
            <h1 style={styles.h1}>Code Learning</h1>
            <p style={styles.subhead}>
              Small shipped experiments, building toward a portfolio.
            </p>
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
              </footer>
            </article>
          </section>
        </aside>

        {/* RIGHT */}
        <main style={styles.right}>
          <article style={styles.notesCard}>
            <h2 style={styles.notesTitle}>Code Learning — Day 1</h2>

            <Section title="Objective">
              <p style={styles.p}>
                Set up a modern frontend workflow from scratch and deploy a live React
                app using GitHub.
              </p>
            </Section>

            <Section title="What I Built">
              <ul style={styles.ul}>
                <li>A React + Vite project</li>
                <li>A simple profile card homepage</li>
                <li>Automatic deployment to GitHub Pages using GitHub Actions</li>
                <li>
                  A live production URL:{" "}
                  <a
                    style={styles.link}
                    href="https://franckhoffmann.github.io/code-learning/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://franckhoffmann.github.io/code-learning/
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="Core Concepts I Learned">
              <h3 style={styles.h3}>1. Local Development Loop</h3>
              <p style={styles.p}>The modern frontend loop:</p>
              <p style={styles.pStrong}>
                Edit → Save → Dev Server → Browser → Commit → Push → Deploy
              </p>
              <p style={styles.p}>Key command:</p>
              <CodeBlock>npm run dev</CodeBlock>
              <p style={styles.p}>
                This starts Vite’s development server (default:{" "}
                <a style={styles.link} href="http://localhost:5173/" target="_blank" rel="noreferrer">
                  http://localhost:5173/
                </a>
                ).
              </p>
              <p style={styles.p}>Important:</p>
              <ul style={styles.ul}>
                <li>If port 5173 is in use, Vite auto-increments (5174, 5175, etc.).</li>
                <li>Stop the server with Control + C.</li>
              </ul>
              <p style={styles.p}>To check if a port is in use:</p>
              <CodeBlock>lsof -nP -iTCP:5173 -sTCP:LISTEN</CodeBlock>
              <p style={styles.p}>To kill a process:</p>
              <CodeBlock>kill &lt;PID&gt;</CodeBlock>

              <Divider />

              <h3 style={styles.h3}>2. Project Structure (React + Vite)</h3>
              <p style={styles.p}>Key files:</p>
              <ul style={styles.ul}>
                <li>
                  <InlineCode>src/App.jsx</InlineCode> → Main React component
                </li>
                <li>
                  <InlineCode>vite.config.js</InlineCode> → Build configuration
                </li>
                <li>
                  <InlineCode>package.json</InlineCode> → Project scripts + dependencies
                </li>
                <li>
                  <InlineCode>.gitignore</InlineCode> → Prevents committing node_modules
                </li>
                <li>
                  <InlineCode>.github/workflows/deploy.yml</InlineCode> → CI/CD pipeline
                </li>
              </ul>
              <p style={styles.p}>Vite outputs production files to:</p>
              <CodeBlock>dist/</CodeBlock>
              <p style={styles.p}>
                We do not commit <InlineCode>dist/</InlineCode>. GitHub Actions builds it automatically.
              </p>

              <Divider />

              <h3 style={styles.h3}>3. Git Basics</h3>
              <p style={styles.p}>Initialize repository:</p>
              <CodeBlock>git init</CodeBlock>
              <p style={styles.p}>Check changes:</p>
              <CodeBlock>git status</CodeBlock>
              <p style={styles.p}>Commit changes:</p>
              <CodeBlock>{`git add .
git commit -m "Meaningful message"`}</CodeBlock>
              <p style={styles.p}>Push to GitHub (used GitHub Desktop for auth).</p>
              <p style={styles.p}>Important insight:</p>
              <p style={styles.p}>
                GitHub no longer allows password authentication for Git over HTTPS. It requires:
              </p>
              <ul style={styles.ul}>
                <li>Personal Access Token</li>
                <li>SSH</li>
                <li>GitHub Desktop authentication</li>
              </ul>

              <Divider />

              <h3 style={styles.h3}>4. CI/CD with GitHub Actions</h3>
              <p style={styles.p}>Created:</p>
              <CodeBlock>.github/workflows/deploy.yml</CodeBlock>
              <p style={styles.p}>This:</p>
              <ul style={styles.ul}>
                <li>Installs dependencies</li>
                <li>Builds the app</li>
                <li>Deploys to GitHub Pages</li>
              </ul>
              <p style={styles.p}>Key concept:</p>
              <ul style={styles.ul}>
                <li>
                  <InlineCode>main</InlineCode> branch = source code
                </li>
                <li>GitHub Actions builds</li>
                <li>
                  Pages serves the built <InlineCode>dist/</InlineCode>
                </li>
              </ul>
              <p style={styles.p}>
                Enabled Pages under: <InlineCode>Settings → Pages → Source → GitHub Actions</InlineCode>
              </p>

              <Divider />

              <h3 style={styles.h3}>5. Vite Base Path (Subfolder Deployment)</h3>
              <p style={styles.p}>Because GitHub Pages serves at:</p>
              <CodeBlock>/code-learning/</CodeBlock>
              <p style={styles.p}>We configured:</p>
              <CodeBlock>{`base: '/code-learning/'`}</CodeBlock>
              <p style={styles.p}>Then improved it to:</p>
              <CodeBlock>{`base: command === 'build' ? '/code-learning/' : '/'`}</CodeBlock>
              <p style={styles.p}>This ensures:</p>
              <ul style={styles.ul}>
                <li>Local dev runs at root (/)</li>
                <li>Production runs under /code-learning/</li>
              </ul>
              <p style={styles.p}>This introduced environment-aware configuration.</p>

              <Divider />

              <h3 style={styles.h3}>6. React Fundamentals Practiced</h3>
              <ul style={styles.ul}>
                <li>Functional components</li>
                <li>JSX</li>
                <li>Inline styles</li>
                <li>SVG as React component</li>
                <li>Data-driven rendering via arrays</li>
                <li>Component-based thinking (even if not yet extracted)</li>
              </ul>

              <Divider />

              <h3 style={styles.h3}>What This Actually Means</h3>
              <p style={styles.p}>I now understand:</p>
              <ul style={styles.ul}>
                <li>How a React app runs locally</li>
                <li>How Node + npm + Vite fit together</li>
                <li>How Git tracks changes</li>
                <li>How GitHub hosts code</li>
                <li>How CI/CD builds and deploys automatically</li>
                <li>The difference between source and production builds</li>
              </ul>
              <p style={styles.p}>
                This is not theoretical knowledge. It is a working system I built and shipped.
              </p>

              <Divider />

              <h3 style={styles.h3}>Key Commands Used Today</h3>
              <CodeBlock>{`node -v
npm -v
npm run dev
npm run build
git status
git add .
git commit -m "message"
lsof -nP -iTCP:5173 -sTCP:LISTEN
kill <PID>`}</CodeBlock>

              <Divider />

              <h3 style={styles.h3}>Strategic Takeaway</h3>
              <p style={styles.p}>This project is no longer about a portfolio. It is about:</p>
              <ul style={styles.ul}>
                <li>Shipping repeatedly</li>
                <li>Understanding modern tooling</li>
                <li>Building credibility as a design leader who codes</li>
              </ul>
              <p style={styles.p}>
                The infrastructure now works. Future work becomes iteration, not setup.
              </p>
            </Section>
          </article>
        </main>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section style={styles.section}>
      <h3 style={styles.sectionTitle}>{title}</h3>
      {children}
    </section>
  )
}

function Divider() {
  return <hr style={styles.hr} />
}

function InlineCode({ children }) {
  return <code style={styles.inlineCode}>{children}</code>
}

function CodeBlock({ children }) {
  return (
    <pre style={styles.pre}>
      <code style={styles.code}>{children}</code>
    </pre>
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

  shell: {
    display: "grid",
    gridTemplateColumns: "460px 1fr",
    gap: 24,
    alignItems: "start",
    padding: "32px 24px",
  },

  left: {
    position: "sticky",
    top: 24,
    alignSelf: "start",
    maxHeight: "calc(100vh - 48px)",
    overflow: "auto",
    paddingRight: 4,
  },

  right: {
    minWidth: 0,
  },

  header: {
    marginBottom: 18,
  },

  h1: {
    margin: 0,
    fontSize: 28,
    letterSpacing: "-0.02em",
  },

  subhead: {
    margin: "10px 0 0 0",
    color: "#a9b3c7",
    lineHeight: 1.4,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
  },

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

  name: {
    margin: 0,
    fontSize: 18,
    letterSpacing: "-0.01em",
  },

  meta: {
    margin: "6px 0 0 0",
    color: "#a9b3c7",
    fontSize: 14,
  },

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

  footerText: {
    fontSize: 12,
    color: "#a9b3c7",
  },

  notesCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 22,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    maxWidth: 920,
  },

  notesTitle: {
    margin: 0,
    fontSize: 22,
    letterSpacing: "-0.02em",
  },

  section: {
    marginTop: 18,
  },

  sectionTitle: {
    margin: "0 0 10px 0",
    fontSize: 14,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#c9d3e8",
  },

  h3: {
    margin: "14px 0 8px 0",
    fontSize: 16,
    letterSpacing: "-0.01em",
  },

  p: {
    margin: "8px 0",
    color: "#cdd6ea",
    lineHeight: 1.6,
    fontSize: 14,
  },

  pStrong: {
    margin: "8px 0",
    color: "#e8edf7",
    lineHeight: 1.6,
    fontSize: 14,
    fontWeight: 600,
  },

  ul: {
    margin: "8px 0 8px 18px",
    padding: 0,
    color: "#cdd6ea",
    lineHeight: 1.6,
    fontSize: 14,
  },

  link: {
    color: "#c9d3e8",
    textDecoration: "underline",
    textUnderlineOffset: 3,
  },

  hr: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    margin: "14px 0",
  },

  inlineCode: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 13,
    padding: "2px 6px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    color: "#e8edf7",
    whiteSpace: "nowrap",
  },

  pre: {
    margin: "10px 0",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.28)",
    overflowX: "auto",
  },

  code: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 13,
    color: "#e8edf7",
  },
}
