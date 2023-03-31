import { langConfig } from "@langs";
import styles from "./langForm.module.scss";
const { selectOptions } = langConfig.processModale
import type { TrainedLangs } from "./trainedLangs";

export function langFormUi() {
  return `
    <form class=${styles.langForm}>
      <select id="lang" required>
        <option hidden value="">${langConfig.processModale.choseLang}</option>
        ${showOptions(selectOptions)}
      </select>
      <small id="lang-error" class=${styles.error}></small>
    </form>
  `;
}

function showOptions(selectOptions: TrainedLangs): string {
  return Object
    .entries(selectOptions)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .reduce((html, [code, lang]) => {
      return html += `<option value=${code}>${lang}</option>`
    }, "")
}
