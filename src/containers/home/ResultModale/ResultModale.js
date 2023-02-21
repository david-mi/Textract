import { resultModaleUi } from "../../../views/homeUi/resultModaleUi/resultModaleUi";

export class ResultModale {
  constructor(textResult) {
    this.textResult = textResult;
    this.displayResultModale();
    this.resultModale = document.getElementById("result-modale");
    this.closeResultModaleButton = document.getElementById("close-result-modale");
    this.closeResultModaleButton.addEventListener("click", this.handleCloseResultModale.bind(this));
  }

  handleCloseResultModale() {
    this.resultModale.remove();
  }

  displayResultModale() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", resultModaleUi(this.textResult));
  }
}
