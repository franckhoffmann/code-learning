function CodeBlock({ code }) {
  return (
    <pre className="codeBlock">
      <code>{code}</code>
    </pre>
  );
}

function Block({ block }) {
  if (block.type === "text") return <p className="text">{block.text}</p>;
  if (block.type === "subheading") return <h3 className="subheading">{block.text}</h3>;
  if (block.type === "code") return <CodeBlock code={block.code} />;
  if (block.type === "list")
    return (
      <ul className="list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );

  return null;
}

export function LearningLog({ log }) {
  return (
    <section className="card rightCard">
      <h2 className="logTitle">{log.title}</h2>

      {log.sections.map((section) => (
        <div key={section.heading} className="section">
          <div className="sectionHeading">{section.heading.toUpperCase()}</div>

          {section.blocks.map((block, idx) => (
            <Block key={idx} block={block} />
          ))}
        </div>
      ))}
    </section>
  );
}
