import { langConfig } from "@langs";
import styles from "./langForm.module.scss";
const { selectOptions } = langConfig.processModale

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

function showOptions(selectOptions: { [props: string]: string }) {
  let optionsHtml = ""

  for (const code in selectOptions) {
    optionsHtml += `<option value=${code}>${selectOptions[code]}</option>`
  }

  return optionsHtml
}