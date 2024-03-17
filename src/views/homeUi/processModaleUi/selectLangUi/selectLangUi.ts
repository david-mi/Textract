import { langConfig } from "@langs";
import styles from "./selectLangUi.module.scss";
const { selectOptions } = langConfig.processModale
import type { TrainedLangs } from "./trainedLangs";

export function selectLang() {
  return `
    <div class=${styles.selectLang}>
      <input id="lang" autofocus/>
      <ul class=${styles.langsList}>
        ${showOptions(selectOptions)}
      </ul>
    </div>
  `;
}

function showOptions(selectOptions: TrainedLangs): string {
  return Object
    .entries(selectOptions)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .reduce((html, [code, lang]) => {
      return html += (
        `<li 
        data-value=${code}
        tabIndex="0"
        >
        ${lang}
        </li>`
      )
    }, "")
}
