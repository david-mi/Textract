import styles from "./helpUi.module.scss"
import { helpIcon } from "@views/svg/helpIcon"
import { topRightButtonUi } from "@views/common/topRightButtonUi/squareButton"
import { content } from "./content/content"
import { background } from "./background/background"

export function helpUi() {
  return `
  <div class=${styles.help}>
    ${background()}
    ${topRightButtonUi(helpIcon, "help-button")}
    ${content()}
  </div>
  `
}