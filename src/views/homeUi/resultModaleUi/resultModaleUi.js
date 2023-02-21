import styles from "./resultModaleUi.module.scss";
import { closeButtonUi } from "../../common/closeButton/closeButtonUi";

export function resultModaleUi(textResult) {
  return `
  <div class=${styles.modale} id="result-modale">
      ${textResult}
      ${closeButtonUi("close-result-modale")}
  </div>
  `;
}