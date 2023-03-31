import { addFileUi, helpUi, mainTitleUi } from "./";
import styles from "./homeUi.module.scss";
import { bgDeco } from "@views/svg";

export function homeUi() {
  return `
    <main class=${styles.main}>
      ${bgDeco(styles.svg)}
      ${mainTitleUi()}
      ${addFileUi()}
      ${helpUi()}
    </main>
  `;
}