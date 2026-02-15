import { styles } from "../styles/appStyles";
import { Section } from "./ui/Section";
import { Divider } from "./ui/Divider";
import { InlineCode } from "./ui/InlineCode";
import { CodeBlock } from "./ui/CodeBlock";

function Block({ block }) {
  switch (block.type) {
    case "p":
      return <p style={styles.p}>{block.text}</p>;
    case "strong":
      return <p style={styles.pStrong}>{block.text}</p>;
    case "h3":
      return <h3 style={styles.h3}>{block.text}</h3>;
    case "ul":
  return (
    <ul style={styles.ul}>
      {block.items.map((item) => {
        // item can be a string OR an object like { text, href }
        const key = typeof item === "string" ? item : `${item.text}-${item.href}`;

        return (
          <li key={key}>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                {item.text}{" "}
                <a style={styles.link} href={item.href} target="_blank" rel="noreferrer">
                  {item.href}
                </a>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

    case "code":
      return <CodeBlock>{block.code}</CodeBlock>;
    case "divider":
      return <Divider />;
    case "inlineCode":
      return <InlineCode>{block.text}</InlineCode>;
    default:
      return null;
  }
}

export function RightPanel({ day }) {
  return (
    <main style={styles.right}>
      <article style={styles.notesCard}>
        <h2 style={styles.notesTitle}>{day.title}</h2>

        {day.sections.map((section) => (
          <Section key={section.heading} title={section.heading}>
            {section.blocks.map((block, idx) => (
              <Block key={idx} block={block} />
            ))}
          </Section>
        ))}
      </article>
    </main>
  );
}
