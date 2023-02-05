import { formUi } from "./index";
import styles from "./homeUi.module.scss";

export function homeUi() {
  return `
    <main>
      <h1 class=${styles.title}>Image Text Extractor</h1>
      ${formUi()}
    </main>
  `;
}