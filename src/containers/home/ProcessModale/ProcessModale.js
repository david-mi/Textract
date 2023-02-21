import { processModaleUi } from "../../../views/homeUi/processModaleUi/processModaleUi";
import { ResultModale } from "../ResultModale/ResultModale";
import { createWorker } from "tesseract.js";

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
    this.progressElement = document.getElementById("progress");
    this.progressValueElement = document.getElementById("progress-value");
    this.animationElement = document.getElementById("animation");
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
    console.log(status);
    if (status === "recognizing text") {
      const progression = (progress * 100).toFixed(2) + " %";
      this.progressValueElement.innerText = progression;
      const angleProgress = progress * 3.6 * 100;
      this.animationElement.style.background = `conic-gradient(
        black ${angleProgress}deg,
        white ${angleProgress}deg
      )`;
    }
  }

  displayProcessingProgress() {
    this.progressElement.style.display = "flex";
  }

  async handleSubmitPicture() {
    const chosenLang = this.langSelect.value;

    this.displayProcessingProgress();

    const options = { logger: this.handleImageProcessing.bind(this) };
    const worker = await createWorker(options);
    await worker.loadLanguage(chosenLang);
    await worker.initialize(chosenLang);
    const { data } = await worker.recognize(this.file);
    await worker.terminate();

    this.closeProcessModale();

    new ResultModale(data.text);
  }
}