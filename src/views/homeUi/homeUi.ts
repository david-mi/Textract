import { addFileUi, helpUi, mainTitleUi, descriptionUi } from "./";
import styles from "./homeUi.module.scss";

export function homeUi() {
  return `
    <main class="${styles.main} description">
      ${helpUi()}
      <div class=${styles.wrapper}>
      ${mainTitleUi()}
      ${descriptionUi()}
      ${addFileUi()}
      </div>
    </main>
  `;
}