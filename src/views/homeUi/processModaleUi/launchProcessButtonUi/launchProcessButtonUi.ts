import { langConfig } from "@langs";
import styles from "./launchProcessButtonUi.module.scss";

export function launchProcessButtonUi() {
  return `
    <button id="launch-process" class=${styles.submit}>
      <span>${langConfig.processModale.sendButton}</span>
    </button>
  `;
}