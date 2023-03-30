import { langConfig } from "@langs";
import styles from "./langForm.module.scss";
const { selectOptions } = langConfig.processModale

export function langFormUi() {
  return `
    <form class=${styles.langForm}>
      <label for="lang">${langConfig.processModale.choseLang}:</label>
      <select id="lang">
        ${showOptions(selectOptions)}
      </select>
    </form>
  `;
}

function showOptions(selectOptions: { [props: string]: string }) {
  let optionsHtml = ""

  for (const code in selectOptions) {
    console.log(code, selectOptions[code])
    optionsHtml += `<option value=${code}>${selectOptions[code]}</option>`
  }

  return optionsHtml
}