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
      </main>
    </div>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
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
    maxWidth: 920,
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
    color: "#a9b3c7",
    lineHeight: 1.4,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
}
