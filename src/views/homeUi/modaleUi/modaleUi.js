import styles from "./modaleUi.module.scss";
import { closeIcon } from "../../../svg/closeIcon";

export const modaleUi = (imageSrc) => {
  return `
  <div class=${styles.modale} id="modale">
    <section class=${styles["image-container"]}>
      <image src=${imageSrc} alt="image wich was added">
    </section>
    <section class=${styles.text}>
      texte de la photo
    </section>
    <form>
      <label for="lang">Chose a lang :</label>
      <select id="lang">
        <option value="dog">Dog</option> 
      </select>
      </form>
      <button id="closeModale" class=${styles.close}>
      ${closeIcon(styles.close)}
      </button>
      <button class=${styles.submit}>Send</button>
  </div>
  `;
};