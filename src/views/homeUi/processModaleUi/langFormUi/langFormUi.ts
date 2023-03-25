import { langConfig } from "@langs";
import styles from "./langForm.module.scss";

export function langFormUi() {
  return `
    <form class=${styles.langForm}>
      <label for="lang">${langConfig.processModale.choseLang}:</label>
      <select id="lang">
        <option value="eng">${langConfig.processModale.selectOptions.eng}</option>
        <option value="fra">${langConfig.processModale.selectOptions.fra}</option> 
      </select>
    </form>
  `;
}