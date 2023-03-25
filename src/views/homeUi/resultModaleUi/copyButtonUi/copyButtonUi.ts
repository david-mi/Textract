import styles from "./copyButtonUi.module.scss";
import { copyIcon } from "@views/svg";

export function copyButtonUi() {
  return `
  <div class=${styles.copyButtonContainer}>
    <button id="copy-button" class=${styles["copy-button"]}>
      ${copyIcon(styles.copy)}
    </button>
  </div>
  `;
}