import { langConfig } from "@langs";
import styles from "./selectLangUi.module.scss";
const { selectOptions, langInputPlaceholder } = langConfig.processModale
import type { TrainedLangs } from "./trainedLangs";

export function selectLang() {
  return `
    <div id="selectLangContainer" class=${styles.selectLang}>
      <input 
        id="lang"
        autofocus
        autocomplete="off"
        placeholder="${langInputPlaceholder}"
      />
      <ul id="langsList" class=${styles.langsList}>
        ${showOptions(selectOptions)}
      </ul>
    </div>
  `;
}

function showOptions(selectOptions: TrainedLangs): string {
  return Object
    .entries(selectOptions)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .reduce((html, [_, lang]) => {
      return html += (
        `<li 
        tabIndex="0"
        data-visible
        >
          ${lang}
        </li>`
      )
    }, "")
}
