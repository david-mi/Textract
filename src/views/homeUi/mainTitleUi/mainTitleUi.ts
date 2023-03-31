import styles from "./mainTitleUi.module.scss"

export function mainTitleUi() {
  return `
  <h1 class="${styles.title} main-title">
    <span class="${styles.upper} ${styles.bold}">t</span>
    <span class=${styles.bold}>ex</span>
    <span class="${styles.upper} ${styles.bold}">t</span>
    <span>rac</span>
    <span class=${styles.upper}>t</span>
  </h1>
  `
} 