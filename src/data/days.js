export const days = [
  {
    id: "day-1",
    label: "Day 1",
    title: "Code Learning — Day 1",
    sections: [
      {
        heading: "Objective",
        blocks: [
          {
            type: "p",
            text: "Set up a modern frontend workflow from scratch and deploy a live React app using GitHub.",
          },
        ],
      },

      {
        heading: "What I Built",
        blocks: [
          {
            type: "ul",
            items: [
              "A React + Vite project",
              "A simple profile card homepage",
              "Automatic deployment to GitHub Pages using GitHub Actions",
              {
                text: "A live production URL:",
                href: "https://franckhoffmann.github.io/code-learning/",
              },
            ],
          },
        ],
      },

      {
        heading: "Core Concepts I Learned",
        blocks: [
          { type: "h3", text: "1. Local Development Loop" },
          { type: "p", text: "The modern frontend loop:" },
          { type: "strong", text: "Edit → Save → Dev Server → Browser → Commit → Push → Deploy" },
          { type: "p", text: "Key command:" },
          { type: "code", code: "npm run dev" },
          {
            type: "p",
            text: "This starts Vite’s development server (default: http://localhost:5173/).",
          },
          { type: "p", text: "Important:" },
          {
            type: "ul",
            items: [
              "If port 5173 is in use, Vite auto-increments (5174, 5175, etc.).",
              "Stop the server with Control + C.",
            ],
          },
          { type: "p", text: "To check if a port is in use:" },
          { type: "code", code: "lsof -nP -iTCP:5173 -sTCP:LISTEN" },
          { type: "p", text: "To kill a process:" },
          { type: "code", code: "kill <PID>" },

          { type: "divider" },

          { type: "h3", text: "2. Project Structure (React + Vite)" },
          { type: "p", text: "Key files:" },
          {
            type: "ul",
            items: [
              "src/App.jsx → Main React component",
              "vite.config.js → Build configuration",
              "package.json → Project scripts + dependencies",
              ".gitignore → Prevents committing node_modules",
              ".github/workflows/deploy.yml → CI/CD pipeline",
            ],
          },
          { type: "p", text: "Vite outputs production files to:" },
          { type: "code", code: "dist/" },
          { type: "p", text: "We do not commit dist/. GitHub Actions builds it automatically." },

          { type: "divider" },

          { type: "h3", text: "3. Git Basics" },
          { type: "p", text: "Initialize repository:" },
          { type: "code", code: "git init" },
          { type: "p", text: "Check changes:" },
          { type: "code", code: "git status" },
          { type: "p", text: "Commit changes:" },
          { type: "code", code: 'git add .\ngit commit -m "Meaningful message"' },
          { type: "p", text: "Push to GitHub (used GitHub Desktop for auth)." },
          { type: "p", text: "Important insight:" },
          {
            type: "p",
            text: "GitHub no longer allows password authentication for Git over HTTPS. It requires:",
          },
          { type: "ul", items: ["Personal Access Token", "SSH", "GitHub Desktop authentication"] },

          { type: "divider" },

          { type: "h3", text: "4. CI/CD with GitHub Actions" },
          { type: "p", text: "Created:" },
          { type: "code", code: ".github/workflows/deploy.yml" },
          { type: "p", text: "This:" },
          { type: "ul", items: ["Installs dependencies", "Builds the app", "Deploys to GitHub Pages"] },
          { type: "p", text: "Key concept:" },
          {
            type: "ul",
            items: ["main branch = source code", "GitHub Actions builds", "Pages serves the built dist/"],
          },
          {
            type: "p",
            text: "Enabled Pages under: Settings → Pages → Source → GitHub Actions",
          },

          { type: "divider" },

          { type: "h3", text: "5. Vite Base Path (Subfolder Deployment)" },
          { type: "p", text: "Because GitHub Pages serves at:" },
          { type: "code", code: "/code-learning/" },
          { type: "p", text: "We configured:" },
          { type: "code", code: "base: '/code-learning/'" },
          { type: "p", text: "Then improved it to:" },
          { type: "code", code: "base: command === 'build' ? '/code-learning/' : '/'" },
          { type: "p", text: "This ensures:" },
          { type: "ul", items: ["Local dev runs at root (/)", "Production runs under /code-learning/"] },
          { type: "p", text: "This introduced environment-aware configuration." },

          { type: "divider" },

          { type: "h3", text: "6. React Fundamentals Practiced" },
          {
            type: "ul",
            items: [
              "Functional components",
              "JSX",
              "Inline styles",
              "SVG as React component",
              "Data-driven rendering via arrays",
              "Component-based thinking (even if not yet extracted)",
            ],
          },

          { type: "divider" },

          { type: "h3", text: "What This Actually Means" },
          { type: "p", text: "I now understand:" },
          {
            type: "ul",
            items: [
              "How a React app runs locally",
              "How Node + npm + Vite fit together",
              "How Git tracks changes",
              "How GitHub hosts code",
              "How CI/CD builds and deploys automatically",
              "The difference between source and production builds",
            ],
          },
          {
            type: "p",
            text: "This is not theoretical knowledge. It is a working system I built and shipped.",
          },

          { type: "divider" },

          { type: "h3", text: "Key Commands Used Today" },
          {
            type: "code",
            code:
              "node -v\nnpm -v\nnpm run dev\nnpm run build\ngit status\ngit add .\ngit commit -m \"message\"\nlsof -nP -iTCP:5173 -sTCP:LISTEN\nkill <PID>",
          },

          { type: "divider" },

          { type: "h3", text: "Strategic Takeaway" },
          { type: "p", text: "This project is no longer about a portfolio. It is about:" },
          { type: "ul", items: ["Shipping repeatedly", "Understanding modern tooling"] },
          { type: "p", text: "The infrastructure now works. Future work becomes iteration, not setup." },
        ],
      },
    ],
  },

{
  id: "day-2",
  label: "Day 2",
  title: "Code Learning — Day 2",
  sections: [
    {
      heading: "Objective",
      blocks: [
        {
          type: "p",
          text: "Turn the project into a multi-day log with navigation and real component structure, while preserving the original look and keeping the codebase maintainable.",
        },
      ],
    },

    {
      heading: "What I Built",
      blocks: [
        {
          type: "ul",
          items: [
            "A Days navigation UI (Day 1 / Day 2) that switches content",
            "A data-driven content model for multi-day logs",
            "A RightPanel renderer that converts structured data into UI",
            "A responsive layout that stacks panels under a breakpoint",
          ],
        },
      ],
    },

    {
      heading: "Core Concepts I Learned",
      blocks: [
        { type: "h3", text: "1. Component Architecture (Composition vs Regions vs Primitives)" },
        {
          type: "p",
          text: "I separated responsibilities so the app scales cleanly:",
        },
        {
          type: "ul",
          items: [
            "App.jsx → composition root (owns state, wires components together)",
            "LeftPanel / RightPanel → page regions (layout chunks)",
            "components/ui/* → small primitives (Divider, Section, CodeBlock, InlineCode)",
            "data/* → content (days) separated from rendering",
          ],
        },

        { type: "divider" },

        { type: "h3", text: "2. Data-Driven UI (Render from Schema, Not Hardcoded JSX)" },
        {
          type: "p",
          text: "Instead of hardcoding Day 1 directly in a component, I created a days data structure and mapped it into UI.",
        },
        {
          type: "p",
          text: "This enables adding Day 3+ by editing data, not rewriting layout/components.",
        },
        {
          type: "p",
          text: "Key pattern:",
        },
        { type: "code", code: "days.map(...) → buttons (nav)\nselectedDay.sections.map(...) → rendered content" },

        { type: "divider" },

        { type: "h3", text: "3. State + Derived Data (Selecting a Day)" },
        {
          type: "p",
          text: "I introduced app-level state for the selected day, and derived the active day object from it.",
        },
        {
          type: "p",
          text: "Key ideas:",
        },
        {
          type: "ul",
          items: [
            "useState holds selectedDayId (source of truth)",
            "selectedDay is derived from days[] (not duplicated state)",
            "props are the interface between App and components",
          ],
        },

        { type: "divider" },

        { type: "h3", text: "4. Named Exports vs Default Exports (Real Debugging)" },
        {
          type: "p",
          text: "I hit a runtime error when importing UI components because the file exports did not match the import style.",
        },
        {
          type: "p",
          text: "Rule:",
        },
        {
          type: "ul",
          items: [
            "Named export: export function Divider() {} → import { Divider } from './Divider'",
            "Default export: export default function Divider() {} → import Divider from './Divider'",
          ],
        },

        { type: "divider" },

        { type: "h3", text: "5. Responsive Layout (Why CSS Owns Breakpoints)" },
        {
          type: "p",
          text: "Inline styles cannot express media queries. To make the layout responsive, I moved layout rules to CSS using className and media queries.",
        },
        {
          type: "p",
          text: "Key moves:",
        },
        {
          type: "ul",
          items: [
            "Introduced .shell and .leftPanel classes in App.css",
            "Used a breakpoint to switch from 2 columns → 1 column under 980px",
            "Disabled sticky behavior on smaller screens for usability",
            "Removed layout-specific inline styles to avoid overriding CSS (inline styles win)",
          ],
        },

        { type: "divider" },

        { type: "h3", text: "6. Debugging Discipline (Signal vs Noise)" },
        {
          type: "p",
          text: "I learned to separate real app errors from browser extension noise.",
        },
        {
          type: "ul",
          items: [
            "Errors in /src/... are usually mine (React/Vite code)",
            "Errors like popup.js are often extensions (validated via private window)",
            "Browser console is the fastest truth source when the page is blank",
          ],
        },
      ],
    },

    {
      heading: "Key Files Changed Today",
      blocks: [
        {
          type: "ul",
          items: [
            "src/data/days.js (multi-day content model)",
            "src/App.jsx (state + composition root)",
            "src/components/DaysNav.jsx (navigation component)",
            "src/components/RightPanel.jsx (data renderer)",
            "src/components/LeftPanel.jsx (layout region)",
            "src/App.css (responsive layout via media queries)",
            "src/styles/appStyles.js (component styling; removed layout overrides)",
          ],
        },
      ],
    },

    {
      heading: "Strategic Takeaway",
      blocks: [
        {
          type: "p",
          text: "This project is now structured like a real app: content is data, UI is rendered, state drives navigation, and layout is responsive. Adding new days becomes incremental work, not a rewrite.",
        },
      ],
    },
  ],
}

];
