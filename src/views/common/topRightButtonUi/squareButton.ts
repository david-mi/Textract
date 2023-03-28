import styles from "./squareButton.module.scss"

export function topRightButtonUi(svgIcon: () => string, id: string) {
  return `
    <button id=${id} class=${styles.button}>
      ${svgIcon()}
    </button>
  `
}