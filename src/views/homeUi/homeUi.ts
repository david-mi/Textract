import { addFileUi, helpUi, mainTitleUi, descriptionUi } from "./";
import styles from "./homeUi.module.scss";
import { bgDeco } from "@views/svg";

export function homeUi() {
  return `
    <main class="${styles.main} description">
      ${bgDeco(styles.svg)}
      ${mainTitleUi()}
      ${descriptionUi()}
      ${addFileUi()}
      ${helpUi()}
    </main>
  `;
}