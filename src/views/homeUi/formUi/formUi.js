import styles from "./formUi.module.scss";

export function formUi() {
  return `
  <form class=${styles.form} id="form">
    <input type="file" accept="jpg, jpeg, png, webp" id="file">
    <label for="file">
      <svg id="file" width="106" height="129" viewBox="0 0 106 129" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M87.7094 46.0895H75.7449V8.46545C75.7449 4.32681 72.3588 0.940643 68.2201 0.940643H38.1209C33.9822 0.940643 30.5961 4.32681 30.5961 8.46545V46.0895H18.6316C11.9346 46.0895 8.54839 54.2163 13.289 58.9569L47.8279 93.4958C50.7626 96.4305 55.5032 96.4305 58.4379 93.4958L92.9768 58.9569C97.7174 54.2163 94.4065 46.0895 87.7094 46.0895ZM0.496841 121.338C0.496841 125.476 3.88301 128.862 8.02165 128.862H98.3194C102.458 128.862 105.844 125.476 105.844 121.338C105.844 117.199 102.458 113.813 98.3194 113.813H8.02165C3.88301 113.813 0.496841 117.199 0.496841 121.338Z" fill="#939393" />
      </svg>
    </label>
  <small id="infos"></small>
  <button type="button" class=${styles.reset} id="reset">Reset</button>
  </form>
  `;
}

