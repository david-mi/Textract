import { modaleUi } from "../../../views/homeUi/modaleUi/modaleUi";

export class Modale {
  constructor(file) {
    this.file = file;
    this.fileSrc = URL.createObjectURL(file);
    this.displayModale();
    this.modale = document.getElementById("modale");
    this.closeModaleButton = document.getElementById("closeModale");
    this.closeModaleButton.addEventListener("click", this.closeModale.bind(this));
  }

  displayModale() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", modaleUi(this.fileSrc));
  }

  closeModale() {
    this.modale.remove();
  }
}