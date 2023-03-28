import styles from "./copyButtonUi.module.scss";
import { copyIcon } from "@views/svg";
import { topRightButtonUi } from "@views/common/topRightButtonUi/squareButton";

export function copyButtonUi() {
  return `
  <div class=${styles.copyButtonContainer} id="copy-button-container">
    ${topRightButtonUi(copyIcon, "copy-button")}
  </div>
  `;
}