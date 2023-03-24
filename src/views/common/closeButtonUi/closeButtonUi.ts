import styles from "./closeButtonUi.module.scss";
import { closeIcon } from "../../svg/index";

/**
 * @param {string} buttonId unique id to attribute on the button
 */

export function closeButtonUi(buttonId: string) {
  return `
  <button id=${buttonId} class=${styles.close}>
    ${closeIcon(styles.close)}
  </button>
  `;
}