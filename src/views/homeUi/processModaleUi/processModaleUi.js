import styles from "./processModaleUi.module.scss";
import { closeButtonUi } from "../../common/closeButton/closeButtonUi";

export const processModaleUi = (imageSrc) => {
  return `
  <div class=${styles.modale} id="modale">
    <div class=${styles.loader} id="process-loader">
      <span>Chargement</span>
      <span class=${styles.progress} id="progress"></span>
    </div>
    <form>
      <label for="lang">Chose a lang :</label>
      <select id="lang">
        <option value="eng">Anglais</option>
        <option value="fra">Français</option> 
      </select>
    </form>
    <section class=${styles["image-container"]}>
      <image src=${imageSrc} alt="image wich was added">
    </section>
      ${closeButtonUi("closeModale")}
      <button id="submit-picture" class=${styles.submit}>Send</button>
  </div>
  `;
};