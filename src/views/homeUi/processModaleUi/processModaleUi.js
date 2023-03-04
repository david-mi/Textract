import styles from "./processModaleUi.module.scss";
import { closeButtonUi } from "../../common/closeButton/closeButtonUi";
import { langConfig } from "../../../langs";

export const processModaleUi = (imageSrc) => {
  return `
  <div class=${styles.modale} id="modale">
    ${closeButtonUi("closeModale")}
    <div class=${styles.loader} id="progress">
      <p id="status" class=${styles.status}>
      <div class=${styles.animation} id="animation">
       <span class=${styles["progress-value"]} id="progress-value">0%</span>
      </div>
    </div>
    <form>
      <label for="lang">${langConfig.processModale.choseLang}:</label>
      <select id="lang">
        <option value="eng">${langConfig.processModale.selectOptions.eng}</option>
        <option value="fra">${langConfig.processModale.selectOptions.fra}</option> 
      </select>
    </form>
    <section class=${styles["image-container"]}>
      <image src=${imageSrc} alt="image wich was added">
    </section>
    <button id="submit-picture" class=${styles.submit}>
    ${langConfig.processModale.sendButton}
    </button>
  </div>
  `;
};