import styles from "./copiedTextAlertUi.module.scss";

export function copiedTextAlertUi() {
  return `
    <div id="copied-text-alert" class=${styles.copiedTextAlert}>
      <p>Ajouté au presse papier</p>
    </div>
  `;
}