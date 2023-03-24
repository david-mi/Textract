import styles from "./progressUi.module.scss";

export function progressUi() {
  return `
    <div class=${styles.progress} id="progress">
      <p id="status" class=${styles.status}>
      <div class=${styles.animation} id="animation">
      <span class=${styles.progressValue} id="progress-value">0%</span>
      </div>
    </div>
  `;
}