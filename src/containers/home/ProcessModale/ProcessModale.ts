import { processModaleUi } from "@views/homeUi/processModaleUi/processModaleUi";
import { ResultModale } from "../ResultModale/ResultModale";
import { LoggerMessage, createWorker } from "tesseract.js";
import { langConfig } from "@langs";
import { ProcessState, iso6391toIso6392 } from "@langs";
import { WorkerOptions } from "tesseract.js";
const { selectOptions } = langConfig.processModale

export class ProcessModale {
  processModale: HTMLElement
  closeModaleButton: HTMLButtonElement;
  submitPictureButton: HTMLButtonElement;
  textPictureElement: HTMLElement;
  langInput: HTMLSelectElement;
  langInputErrorElement: HTMLElement;
  progressElement: HTMLElement;
  progressValueElement: HTMLElement;
  animationElement: HTMLElement;
  statusElement: HTMLElement;
  currentStatus = null;
  fileSrc: string
  status = ""
  file: File

  constructor(file: File) {
    document.dispatchEvent(new Event("removePaste"))
    this.file = file
    this.fileSrc = URL.createObjectURL(this.file);
    this.displayProcessModale();

    this.processModale = document.getElementById("modale")!
    this.closeModaleButton = document.getElementById("close-modale") as HTMLButtonElement
    this.submitPictureButton = document.getElementById("launch-process") as HTMLButtonElement
    this.textPictureElement = document.getElementById("text-picture")!
    this.langInput = document.getElementById("lang") as HTMLSelectElement
    this.langInputErrorElement = document.getElementById("lang-error")!
    this.progressElement = document.getElementById("progress")!
    this.progressValueElement = document.getElementById("progress-value")!
    this.animationElement = document.getElementById("animation")!
    this.statusElement = document.getElementById("status")!

    this.closeModaleButton.addEventListener("click", this.closeProcessModale.bind(this));
    this.submitPictureButton.addEventListener("click", this.handleSubmitPicture.bind(this));
    this.displayLangFromStorage();
  }

  displayProcessModale() {
    const main = document.querySelector("main")!
    main.insertAdjacentHTML("beforeend", processModaleUi(this.fileSrc));
  }

  closeProcessModale(event?: MouseEvent) {
    this.processModale.remove();

    if (event) {
      document.dispatchEvent(new Event("addPaste"))
    }
  }

  saveLangToStorage() {
    localStorage.setItem("prefLang", this.langInput.value);
  }

  displayLangFromStorage() {
    const prefLang = localStorage.getItem("prefLang") || this.getNavigatorLanguageToIso6392();
    if (prefLang == null) return

    if (this.isLangCodeValid(prefLang)) {
      this.langInput.value = selectOptions[prefLang];
    } else {
      localStorage.removeItem("prefLang")
    }
  }

  getNavigatorLanguageToIso6392() {
    const navigatorLanguageToIso6391 = this.getNavigatorLanguageToIso6391()

    return iso6391toIso6392[navigatorLanguageToIso6391] || null
  }

  getNavigatorLanguageToIso6391() {
    return navigator.language.split("-")[0]
  }

  isLangCodeValid(code: string) {
    return langConfig.processModale.selectOptions[code] !== undefined
  }

  handleImageProcessing({ progress, status }: LoggerMessage) {
    if (this.status !== status) {
      this.status = status;
      this.statusElement.innerText = langConfig.processModale.processState[status as keyof ProcessState];
    }
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

  handleSelectError(isValid: boolean) {
    this.langInputErrorElement.innerText = isValid
      ? ""
      : langConfig.processModale.selectError
  }

  async handleSubmitPicture() {
    const chosenLang = this.langInput.value;
    const isLangValid = this.isLangCodeValid(chosenLang)
    this.handleSelectError(isLangValid)
    if (isLangValid === false) return

    this.saveLangToStorage()
    this.displayProcessingProgress();

    const options: Partial<WorkerOptions> = { logger: this.handleImageProcessing.bind(this) };
    const worker = await createWorker(chosenLang, 1, options);
    const { data } = await worker.recognize(this.file);
    await worker.terminate();

    this.closeProcessModale();
    new ResultModale(data);
  }
}