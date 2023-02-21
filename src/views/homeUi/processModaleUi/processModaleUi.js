import styles from "./processModaleUi.module.scss";
import { closeButtonUi } from "../../common/closeButton/closeButtonUi";

export const processModaleUi = (imageSrc) => {
  return `
  <div class=${styles.modale} id="modale">
    <section class=${styles["image-container"]}>
      <image src=${imageSrc} alt="image wich was added">
    </section>
    <section class=${styles.text} id="text-picture">
      texte de la photo
    </section>
    <form>
      <label for="lang">Chose a lang :</label>
      <select id="lang">
        <option value="eng">Anglais</option>
        <option value="fra">Français</option> 
      </select>
      </form>
      ${closeButtonUi("closeModale")}
      <button id="submit-picture" class=${styles.submit}>Send</button>
  </div>
  `;
};