import styles from "./descriptionUi.module.scss"

export function descriptionUi() {
  return `
  <div class="${styles.description} description">
    <p>
      <span>A simple</span>
      <span class=${styles.bold}>text extractor</span>
    </p>
    <p>
      <span>from</span>
      <span class=${styles.bold}>image</span>
      <span>tool</span>
    </p>
  </div>
  `
}