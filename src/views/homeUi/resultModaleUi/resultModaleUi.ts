import styles from "./resultModaleUi.module.scss";
import { textResultUi } from "./textResultUi/textResultUi";
import { topRightButtonUi } from "@views/common/topRightButtonUi/squareButton";
import { closeIcon } from "@views/svg";

export function resultModaleUi(textParagraphs: Tesseract.Paragraph[]) {
  return `
  <div class=${styles.modale} id="result-modale">
    ${topRightButtonUi(closeIcon, "close-result-modale")}
    ${textResultUi(textParagraphs)}
  </div>
  `;
}