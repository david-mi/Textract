import styles from "./resultModaleUi.module.scss";
import { closeButtonUi } from "../../common/closeButtonUi/closeButtonUi";
import { textResultUi } from "./textResultUi/textResultUi";

export function resultModaleUi(textParagraphs: Tesseract.Paragraph[]) {
  return `
  <div class=${styles.modale} id="result-modale">
    ${closeButtonUi("close-result-modale")}
    ${textResultUi(textParagraphs)}
  </div>
  `;
}