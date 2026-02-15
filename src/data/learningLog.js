export const learningLog = {
  title: "Code Learning — Day 1",
  subtitle: "Small shipped experiments, building toward a portfolio.",
  sections: [
    {
      heading: "Objective",
      blocks: [
        {
          type: "text",
          text:
            "Set up a modern frontend workflow from scratch and deploy a live React app using GitHub.",
        },
      ],
    },
    {
      heading: "What I Built",
      blocks: [
        {
          type: "list",
          items: [
            "A React + Vite project",
            "A simple profile card homepage",
            "Automatic deployment to GitHub Pages using GitHub Actions",
            "A live production URL: https://franckhoffmann.github.io/code-learning/",
          ],
        },
      ],
    },
    {
      heading: "Core Concepts I Learned",
      blocks: [
        {
          type: "subheading",
          text: "1. Local Development Loop",
        },
        {
          type: "text",
          text: "The modern frontend loop:",
        },
        {
          type: "text",
          text: "Edit → Save → Dev Server → Browser → Commit → Push → Deploy",
        },
        {
          type: "text",
          text: "Key command:",
        },
        {
          type: "code",
          code: "npm run dev",
        },
        {
          type: "text",
          text:
            "This starts Vite's development server (default: http://localhost:5173/).",
        },
        {
          type: "text",
          text: "Important:",
        },
        {
          type: "list",
          items: [
            "If port 5173 is in use, Vite auto-increments (5174, 5175, etc.).",
            "Stop the server with Control + C.",
          ],
        },
        {
          type: "text",
          text: "To check if a port is in use:",
        },
        {
          type: "code",
          code: "lsof -nP -iTCP:5173 -sTCP:LISTEN",
        },
        {
          type: "text",
          text: "To kill a process:",
        },
        {
          type: "code",
          code: "kill <PID>",
        },
        {
          type: "subheading",
          text: "2. Project Structure (React + Vite)",
        },
        {
          type: "text",
          text: "Key files:",
        },
        {
          type: "list",
          items: [
            "src/App.jsx → Main React component",
            "vite.config.js → Build configuration",
            "package.json → Project scripts + dependencies",
            ".gitignore → Prevents committing node_modules",
            ".github/workflows/deploy.yml → CI/CD pipeline",
          ],
        },
        {
          type: "text",
          text: "Vite outputs production files to:",
        },
        {
          type: "code",
          code: "dist/",
        },
        {
          type: "text",
          text:
            "We do not commit dist/. GitHub Actions builds it automatically.",
        },
        {
          type: "subheading",
          text: "3. Git Basics",
        },
        {
          type: "text",
          text: "Initialize repository:",
        },
        {
          type: "code",
          code: "git init",
        },
        {
          type: "text",
          text: "Check changes:",
        },
        {
          type: "code",
          code: "git status",
        },
        {
          type: "text",
          text: "Commit changes:",
        },
        {
          type: "code",
          code: "git add .\ngit commit -m \"message\"",
        },
        {
          type: "text",
          text: "Push to GitHub (used GitHub Desktop for auth).",
        },
        {
          type: "text",
          text: "Important insight:",
        },
        {
          type: "list",
          items: [
            "GitHub no longer allows password authentication for Git over HTTPS.",
            "Use Personal Access Token, SSH, or GitHub Desktop authentication.",
          ],
        },
        {
          type: "subheading",
          text: "4. CI/CD with GitHub Actions",
        },
        {
          type: "text",
          text: "Created:",
        },
        {
          type: "code",
          code: ".github/workflows/deploy.yml",
        },
        {
          type: "text",
          text: "This:",
        },
        {
          type: "list",
          items: [
            "Installs dependencies",
            "Builds the app",
            "Deploys to GitHub Pages",
          ],
        },
        {
          type: "text",
          text: "Key concept:",
        },
        {
          type: "list",
          items: [
            "main branch = source code",
            "GitHub Actions builds",
            "Pages serves the built dist/",
          ],
        },
      ],
    },
  ],
};