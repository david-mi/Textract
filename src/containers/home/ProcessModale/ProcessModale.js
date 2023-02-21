import { processModaleUi } from "../../../views/homeUi/processModaleUi/processModaleUi";
import Tesseract from "tesseract.js";
import { ResultModale } from "../ResultModale/ResultModale";

export class ProcessModale {
  constructor(file) {
    this.file = file;
    this.fileSrc = URL.createObjectURL(file);
    this.displayProcessModale();
    this.processModale = document.getElementById("modale");
    this.closeModaleButton = document.getElementById("closeModale");
    this.closeModaleButton.addEventListener("click", this.closeProcessModale.bind(this));
    this.submitPictureButton = document.getElementById("submit-picture");
    this.submitPictureButton.addEventListener("click", this.handleSubmitPicture.bind(this));
    this.textPictureElement = document.getElementById("text-picture");
    this.langSelect = document.getElementById("lang");
    this.langSelect.addEventListener("change", this.saveLangToStorage.bind(this));
    this.displayLangFromStorage();
    this.processLoader = document.getElementById("process-loader");
    this.progressElement = document.getElementById("progress");
  }

  displayProcessModale() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", processModaleUi(this.fileSrc));
  }

  closeProcessModale() {
    this.processModale.remove();
  }

  saveLangToStorage() {
    localStorage.setItem("prefLang", this.langSelect.value);
  }

  displayLangFromStorage() {
    const prefLang = localStorage.getItem("prefLang");
    if (prefLang) {
      this.langSelect.value = prefLang;
    }
  }

  handleImageProcessing({ progress, status }) {
    if (status === "recognizing text") {
      const progression = (progress * 100).toFixed(2) + " %";
      this.progressElement.innerText = progression;
    }
  }

  displayProcessingProgress() {
    this.processLoader.style.display = "block";
  }

  async handleSubmitPicture() {
    const chosenLang = this.langSelect.value;

    this.displayProcessingProgress();

    const options = { logger: this.handleImageProcessing.bind(this) };
    const { data } = await Tesseract.recognize(this.file, chosenLang, options);

    this.closeProcessModale();

    new ResultModale(data.text);
  }
}