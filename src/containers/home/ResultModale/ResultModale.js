import { resultModaleUi } from "../../../views/homeUi/resultModaleUi/resultModaleUi";

export class ResultModale {
  constructor({ paragraphs, text }) {
    this.paragraphs = paragraphs;
    this.textResult = text;
    this.displayResultModale();
    this.resultModale = document.getElementById("result-modale");
    this.closeResultModaleButton = document.getElementById("close-result-modale");
    this.closeResultModaleButton.addEventListener("click", this.handleCloseResultModale.bind(this));
    this.copyButton = document.getElementById("copy-button");
    this.copyButton.addEventListener("click", this.handleCopy.bind(this));
    this.copiedElement = document.getElementById("copied-text-alert");
    this.resultText = document.getElementById("result-text");
    this.copiedElementTimeout = null;
  }

  async handleCopy() {
    this.displayCopiedElement();
    await navigator.clipboard.writeText(this.textResult);
  }

  displayCopiedElement() {
    if (this.copiedElementTimeout) {
      clearTimeout(this.copiedElementTimeout);
      this.copiedElementTimeout = null;
    }

    this.copiedElement.style.display = "grid";
    this.copiedElementTimeout = setTimeout(this.hideCopiedElement.bind(this), 1800);
  }

  hideCopiedElement() {
    this.copiedElement.style.display = "none";
  }

  handleCloseResultModale() {
    this.resultModale.remove();
  }

  displayResultModale() {
    const main = document.querySelector("main");
    main.insertAdjacentHTML("beforeend", resultModaleUi(this.paragraphs));
  }
}
