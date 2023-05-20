import styles from "./descriptionUi.module.scss"
import { langConfig } from "@langs"
const { description } = langConfig

export function descriptionUi() {
  return `
  <div class="${styles.description} description">
    <p>
      <span>${description[1]}</span>
      <span class=${styles.bold}>${description[2]}</span>
    </p>
    <p>
      <span>${description[3]}</span>
      <span class=${styles.bold}>${description[4]}</span>
      ${description[5] ? "<span>tool</span>" : ""}
    </p>
  </div>
  `
}