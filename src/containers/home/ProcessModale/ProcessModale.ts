import { processModaleUi } from "@views/homeUi/processModaleUi/processModaleUi";
import { ResultModale } from "../ResultModale/ResultModale";
import { LoggerMessage, createWorker } from "tesseract.js";
import { langConfig } from "@langs";
import { ProcessState } from "@langs";
import { WorkerOptions } from "tesseract.js";

export class ProcessModale {
  processModale: HTMLElement
  closeModaleButton: HTMLButtonElement;
  submitPictureButton: HTMLButtonElement;
  textPictureElement: HTMLElement;
  langSelect: HTMLSelectElement;
  langSelectErrorElement: HTMLElement;
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
    this.langSelect = document.getElementById("lang") as HTMLSelectElement
    this.langSelectErrorElement = document.getElementById("lang-error")!
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
    localStorage.setItem("prefLang", this.langSelect.value);
  }

  displayLangFromStorage() {
    const prefLang = localStorage.getItem("prefLang");
    if (prefLang == null) return

    if (this.isLangCodeValid(prefLang)) {
      this.langSelect.value = prefLang;
    } else {
      localStorage.removeItem("prefLang")
    }
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
    this.langSelectErrorElement.innerText = isValid
      ? ""
      : langConfig.processModale.selectError
  }

  async handleSubmitPicture() {
    const chosenLang = this.langSelect.value;
    const isLangValid = this.isLangCodeValid(chosenLang)
    this.handleSelectError(isLangValid)
    if (isLangValid === false) return

    this.saveLangToStorage()
    this.displayProcessingProgress();

    const options: Partial<WorkerOptions> = { logger: this.handleImageProcessing.bind(this) };
    const worker = await createWorker(options);
    await worker.loadLanguage(chosenLang);
    await worker.initialize(chosenLang);
    const { data } = await worker.recognize(this.file);
    await worker.terminate();

    this.closeProcessModale();
    new ResultModale(data);
  }
}