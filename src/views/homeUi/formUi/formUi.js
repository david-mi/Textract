import styles from "./formUi.module.scss";
import { uploadIcon, uploadIconGradient } from "../../../svg";

export function formUi() {
  return `
  <form class=${styles.form} id="form">
    <input type="file" accept="jpg, jpeg, png, webp" id="file">
    <label for="file">
      ${uploadIcon(styles.icon)}
      ${uploadIconGradient(styles.icon)}
    </label>
    <small class=${styles.error} id="error_file"></small>
  </form>
  `;
}

