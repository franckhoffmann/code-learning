import { styles } from "../../styles/appStyles";

export function InlineCode({ children }) {
  return <code style={styles.inlineCode}>{children}</code>;
}
