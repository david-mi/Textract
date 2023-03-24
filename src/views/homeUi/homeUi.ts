import { addFileUi } from "./index";
import styles from "./homeUi.module.scss";
import { bgDeco } from "../svg/index";

export function homeUi() {
  return `
    <main class=${styles.main}>
      ${bgDeco(styles.svg)}
      <h1 class="${styles.title} main-title">Image Text Extractor</h1>
      ${addFileUi()}
    </main>
  `;
}