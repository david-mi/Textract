import styles from "./closeButtonUi.module.scss";
import { closeIcon } from "../../../svg/closeIcon";

/**
 * @param {string} buttonId unique id to attribute on the button
 */

export function closeButtonUi(buttonId) {
  return `
  <button id=${buttonId} class=${styles.close}>
    ${closeIcon(styles.close)}
  </button>
  `;
}