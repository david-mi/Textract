import styles from "./imageUi.module.scss";

export function imageUi(imageSrc: string) {
  return `
    <section class=${styles.imageContainer}>
      <image src=${imageSrc} alt="image wich was added">
    </section>
  `;
}