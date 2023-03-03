import styles from "./copyButtonUi.module.scss";
import { copyIcon } from "../../../svg/copyIcon";

export function copyButtonUi() {
  return `
  <button id="copy-button" class=${styles["copy-button"]}>
    ${copyIcon(styles.copy)}
  </button>
  `;
}