import styles from "./processModaleUi.module.scss";
import { progressUi } from "./progressUi/progressUi";
import { langFormUi } from "./langFormUi/langFormUi";
import { imageUi } from "./imageUi/imageUi";
import { launchProcessButtonUi } from "./launchProcessButtonUi/launchProcessButtonUi";
import { topRightButtonUi } from "@views/common/topRightButtonUi/squareButton";
import { closeIcon } from "@views/svg";

export const processModaleUi = (imageSrc: string) => {
  return `
    <div class=${styles.modale} id="modale">
      ${topRightButtonUi(closeIcon, "close-modale")}
      ${progressUi()}
      ${langFormUi()}
      ${imageUi(imageSrc)}
      ${launchProcessButtonUi()}
      <small id="lang-error" class=${styles.error}></small>
    </div>
  `;
};