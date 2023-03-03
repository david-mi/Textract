import styles from "./resultModaleUi.module.scss";
import { closeButtonUi } from "../../common/closeButton/closeButtonUi";

export function resultModaleUi(textParagraphs) {
  const textToShow = textParagraphs.reduce((paragraphsAcc, { lines }) => {
    return paragraphsAcc + lines.reduce((linesAcc, line) => {
      return linesAcc + `<p>${line.text}</p>`;
    }, "") + "<br />";
  }, "");

  return `
  <div class=${styles.modale} id="result-modale">
    <div class=${styles.text}>
    ${textToShow}
    </div>
    ${closeButtonUi("close-result-modale")}
  </div>
  `;
}