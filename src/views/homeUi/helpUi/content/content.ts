import styles from "./content.module.scss"
import { langConfig } from "@langs"
const { add, choose, wait, retrieve } = langConfig.help

export function content() {
  return `
  <div id="help-content" class="${styles.content} ${styles.hide}">
    <h2>1. ${add.title}</h2>
    <ul>
      <li>${add["1"]}</li>
      <li>${add["2"]}</li>
      <li>${add["3"]}</li>
    </ul>
    <h2>2. ${choose.title}</h2>
    <ul>
      <li>${choose["1"]}</li>
      <li>${choose["2"]}</li>
    </ul>
    <h2>3. ${wait.title}</h2>
    <ul>
      <li>${wait["1"]}</li>
    </ul>
    <h2>4. ${retrieve.title}</h2>
    <ul>
      <li>${retrieve["1"]}</li>
    </ul>
  </div>
  `
}