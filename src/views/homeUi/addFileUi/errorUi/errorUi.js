import styles from "./errorUi.module.scss";

export function errorUi() {
  return `
    <small class=${styles.error} id="error_file"></small>
  `;
}