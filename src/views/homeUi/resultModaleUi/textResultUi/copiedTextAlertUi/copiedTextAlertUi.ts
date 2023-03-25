import styles from "./copiedTextAlertUi.module.scss";
import { langConfig } from "@langs";

export function copiedTextAlertUi() {
  return `
    <div id="copied-text-alert" class=${styles.copiedTextAlert}>
      <p>${langConfig.resultModale.clipboardAlert}</p>
    </div>
  `;
}