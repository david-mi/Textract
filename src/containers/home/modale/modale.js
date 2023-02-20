import { modaleUi } from "../../../views/homeUi/modaleUi/modaleUi";
import Tesseract from "tesseract.js";

export class Modale {
  constructor(file) {
    this.file = file;
    this.fileSrc = URL.createObjectURL(file);
    this.displayModale();
    this.modale = document.getElementById("modale");
    this.closeModaleButton = document.getElementById("closeModale");
    this.closeModaleButton.addEventListener("click", this.closeModale.bind(this));
    this.submitPictureButton = document.getElementById("submit-picture");
    this.submitPictureButton.addEventListener("click", this.handleSubmitPicture.bind(this));
    this.textPictureElement = document.getElementById("text-picture");
    this.langSelect = document.getElementById("lang");
  }

  displayModale() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", modaleUi(this.fileSrc));
  }

  closeModale() {
    this.modale.remove();
  }

  handleImageProcessing({ progress, status }) {
    if (status === "recognizing text") {
      const progression = (progress * 100).toFixed(2) + " %";
      this.textPictureElement.innerText = progression;
    }
  }

  async handleSubmitPicture() {
    console.log(this.file);
    console.log(this.langSelect.value);
    const chosenLang = this.langSelect.value;

    const options = { logger: this.handleImageProcessing.bind(this) };
    const { data } = await Tesseract.recognize(this.file, chosenLang, options);

    const { text } = data;
    this.showRecognizedText(text);
  }

  showRecognizedText(recognizedText) {
    this.textPictureElement.innerText = recognizedText;
  }
}