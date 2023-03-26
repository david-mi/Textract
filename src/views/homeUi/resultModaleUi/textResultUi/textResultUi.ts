import { copyButtonUi } from "../copyButtonUi/copyButtonUi";
import styles from "./textResultUi.module.scss";
import { copiedTextAlertUi } from "./copiedTextAlertUi/copiedTextAlertUi";

export function textResultUi(textParagraphs: Tesseract.Paragraph[]) {
  const textToShow = textParagraphs.reduce((paragraphsAcc, { lines }) => {
    return paragraphsAcc + lines.reduce((linesAcc, line) => {
      return linesAcc + `<p>${line.text}</p>`;
    }, "") + "<br />";
  }, "");

  return `
    <div class=${styles.text} id="result-text">
      ${copyButtonUi()}
      ${copiedTextAlertUi()}
      <div class=${styles.overflowWrapper} id="overflow-wrapper">
      ${textToShow}
      </div>
    </div>
  `;
}