import styles from "./background.module.scss"

export function background() {
  return `
  <div id="help-background" class="${styles.background} ${styles.hide}">
  </div>
  `
}