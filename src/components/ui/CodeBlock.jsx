import { styles } from "../../styles/appStyles";

export function CodeBlock({ children }) {
  return (
    <pre style={styles.pre}>
      <code style={styles.code}>{children}</code>
    </pre>
  );
}
