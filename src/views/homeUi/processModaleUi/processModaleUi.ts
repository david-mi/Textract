import styles from "./processModaleUi.module.scss";
import { closeButtonUi } from "@views/common/closeButtonUi/closeButtonUi";
import { progressUi } from "./progressUi/progressUi";
import { langFormUi } from "./langFormUi/langFormUi";
import { imageUi } from "./imageUi/imageUi";
import { launchProcessButtonUi } from "./launchProcessButtonUi/launchProcessButtonUi";

export const processModaleUi = (imageSrc: string) => {
  return `
    <div class=${styles.modale} id="modale">
      ${closeButtonUi("close-modale")}
      ${progressUi()}
      ${langFormUi()}
      ${imageUi(imageSrc)}
      ${launchProcessButtonUi()}
    </div>
  `;
};