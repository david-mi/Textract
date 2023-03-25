import styles from "./addFileUi.module.scss";
import { uploadIcon, uploadIconGradient } from "@views/svg/index";
import { errorUi } from "./errorUi/errorUi";

export function addFileUi() {
  return `
  <form class=${styles.addFileForm}>
    <input type="file" accept="jpg, jpeg, png, webp" id="file">
    <label for="file">
      ${uploadIcon()}
      ${uploadIconGradient()}
    </label>
    ${errorUi()}
  </form>
  `;
}

