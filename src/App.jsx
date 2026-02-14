export default function App() {
  return (
    <div style={styles.page}>
      <main style={styles.container}>
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
            </footer>
          </article>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.h2}>Shipped Experiments</h2>
            <p style={styles.sectionSubhead}>
              Each item is a small, finished artifact. The goal is reps and proof of shipping.
            </p>
          </div>

          <div style={styles.projectsGrid}>
            {PROJECTS.map((p) => (
              <article key={p.title} style={styles.projectCard}>
                <div style={styles.projectTop}>
                  <div>
                    <h3 style={styles.h3}>{p.title}</h3>
                    <p style={styles.projectDesc}>{p.description}</p>
                  </div>
                  <span style={styles.projectTag}>{p.tag}</span>
                </div>

                <ul style={styles.projectList}>
                  {p.proves.map((line) => (
                    <li key={line} style={styles.projectListItem}>
                      {line}
                    </li>
                  ))}
                </ul>

                <div style={styles.projectLinks}>
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.link}
                    >
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
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

const PROJECTS = [
  {
    title: "Profile card + GitHub Pages deploy",
    tag: "V1",
    description: "A minimal React page deployed via GitHub Actions to GitHub Pages.",
    proves: [
      "React component structure",
      "Inline styling + layout primitives",
      "Deploy pipeline (Actions → Pages)",
    ],
    links: [
      {
        label: "Repo",
        href: "https://github.com/franckhoffmann/code-learning",
      },
      // Optional: replace this with a specific commit URL later
      {
        label: "Live",
        href: "https://franckhoffmann.github.io/code-learning/",
      },
    ],
  },
  {
    title: "Next: Experiment card system",
    tag: "Planned",
    description: "Turn this site into a small evidence log with repeatable cards and links.",
    proves: ["Data-driven rendering (arrays → UI)", "Basic content hierarchy"],
    links: [
      {
        label: "Issue (create one)",
        href: "https://github.com/franckhoffmann/code-learning/issues",
      },
    ],
  },
]

const t = {
  bg: "#0b0f17",
  text: "#e8edf7",
  muted: "#a9b3c7",
  cardBg: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.10)",
  borderSoft: "rgba(255,255,255,0.08)",
  shadow: "0 10px 30px rgba(0,0,0,0.35)",
  rLg: 16,
  rMd: 12,
  max: 980,
}

const styles = {
  page: {
    minHeight: "100vh",
    background: t.bg,
    color: t.text,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  container: {
    maxWidth: t.max,
    margin: "0 auto",
    padding: "64px 20px",
  },
  header: {
    marginBottom: 28,
  },
  h1: {
    margin: 0,
    fontSize: 28,
    letterSpacing: "-0.02em",
  },
  subhead: {
    margin: "10px 0 0 0",
    color: t.muted,
    lineHeight: 1.4,
    maxWidth: 560,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    background: t.cardBg,
    border: `1px solid ${t.borderSoft}`,
    borderRadius: t.rLg,
    padding: 18,
    boxShadow: t.shadow,
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
    color: t.muted,
    fontSize: 14,
  },
  iconButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: t.rMd,
    border: `1px solid ${t.border}`,
    background: "rgba(255,255,255,0.03)",
    color: t.text,
    textDecoration: "none",
  },
  footer: {
    marginTop: 16,
    paddingTop: 14,
    borderTop: `1px solid ${t.borderSoft}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 999,
    border: `1px solid ${t.border}`,
    background: "rgba(255,255,255,0.03)",
    color: "#c9d3e8",
    whiteSpace: "nowrap",
  },
  footerText: {
    fontSize: 12,
    color: t.muted,
  },

  section: {
    marginTop: 28,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  h2: {
    margin: 0,
    fontSize: 16,
    letterSpacing: "-0.01em",
  },
  sectionSubhead: {
    margin: "8px 0 0 0",
    color: t.muted,
    fontSize: 14,
    lineHeight: 1.5,
    maxWidth: 720,
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 16,
    marginTop: 16,
  },
  projectCard: {
    background: t.cardBg,
    border: `1px solid ${t.borderSoft}`,
    borderRadius: t.rLg,
    padding: 18,
    boxShadow: t.shadow,
  },
  projectTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  h3: {
    margin: 0,
    fontSize: 15,
    letterSpacing: "-0.01em",
  },
  projectDesc: {
    margin: "8px 0 0 0",
    color: t.muted,
    fontSize: 14,
    lineHeight: 1.5,
  },
  projectTag: {
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 999,
    border: `1px solid ${t.border}`,
    background: "rgba(255,255,255,0.03)",
    color: "#c9d3e8",
    whiteSpace: "nowrap",
    marginTop: 2,
  },
  projectList: {
    margin: "14px 0 0 0",
    padding: "0 0 0 18px",
    color: t.text,
  },
  projectListItem: {
    margin: "6px 0",
    color: t.muted,
    fontSize: 13,
    lineHeight: 1.5,
  },
  projectLinks: {
    marginTop: 14,
    paddingTop: 12,
    borderTop: `1px solid ${t.borderSoft}`,
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  link: {
    display: "inline-flex",
    gap: 6,
    alignItems: "center",
    fontSize: 13,
    color: t.text,
    textDecoration: "none",
    border: `1px solid ${t.border}`,
    background: "rgba(255,255,255,0.03)",
    padding: "6px 10px",
    borderRadius: 999,
  },
}
