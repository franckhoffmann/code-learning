export const styles = {
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

  left: {},

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

  rightColumn: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  rightTop: {
    display: "flex",
    justifyContent: "flex-start",
  },

  rightRule: {
    height: 1,
    background: "rgba(255,255,255,0.08)",
    width: "100%",
  },
  repoLink: {
  marginLeft: "auto",
  fontSize: 12,
  color: "#c9d3e8",
  textDecoration: "underline",
  textUnderlineOffset: 3,
},

};
