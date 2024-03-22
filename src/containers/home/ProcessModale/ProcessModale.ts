import { processModaleUi } from "@views/homeUi/processModaleUi/processModaleUi";
import { ResultModale } from "../ResultModale/ResultModale";
import { LoggerMessage, createWorker } from "tesseract.js";
import { litteralToIso6391, langConfig } from "@langs";
import { ProcessState, iso6391toIso6392 } from "@langs";
import { WorkerOptions } from "tesseract.js";
const { selectOptions } = langConfig.processModale

export class ProcessModale {
  processModale: HTMLElement
  closeModaleButton: HTMLButtonElement;
  submitPictureButton: HTMLButtonElement;
  textPictureElement: HTMLElement;
  selectLangContainer: HTMLDivElement
  langInput: HTMLSelectElement;
  langsList: HTMLUListElement
  langsListLiElements: NodeListOf<HTMLLIElement>
  langInputErrorElement: HTMLElement;
  progressElement: HTMLElement;
  progressValueElement: HTMLElement;
  animationElement: HTMLElement;
  statusElement: HTMLElement;
  currentStatus = null;
  fileSrc: string
  status = ""
  file: File
  lastUserAction: "mouse" | "keyboard" | null = null
  boundMousedown: () => void = function () { }

  constructor(file: File) {
    document.dispatchEvent(new Event("removePaste"))
    this.file = file
    this.fileSrc = URL.createObjectURL(this.file);
    this.displayProcessModale();

    this.processModale = document.getElementById("modale")!
    this.closeModaleButton = document.getElementById("close-modale") as HTMLButtonElement
    this.submitPictureButton = document.getElementById("launch-process") as HTMLButtonElement
    this.textPictureElement = document.getElementById("text-picture")!
    this.selectLangContainer = document.getElementById("selectLangContainer") as HTMLDivElement
    this.langInput = document.getElementById("lang") as HTMLSelectElement
    this.langsList = document.getElementById("langsList") as HTMLUListElement
    this.langsListLiElements = this.langsList.querySelectorAll("li") as NodeListOf<HTMLLIElement>
    this.langInputErrorElement = document.getElementById("lang-error")!
    this.progressElement = document.getElementById("progress")!
    this.progressValueElement = document.getElementById("progress-value")!
    this.animationElement = document.getElementById("animation")!
    this.statusElement = document.getElementById("status")!

    this.closeModaleButton.addEventListener("click", this.closeProcessModale.bind(this));
    this.submitPictureButton.addEventListener("click", this.handleSubmitPicture.bind(this));
    this.langInput.addEventListener("focus", this.handleLangInputFocus.bind(this))
    this.langInput.addEventListener("click", (event) => event.stopPropagation())
    this.langInput.addEventListener("input", this.filterLangs.bind(this))
    this.langsList.addEventListener("click", this.hideLangsList.bind(this))
    this.boundMousedown = this.handleMouseDown.bind(this)
    document.addEventListener("mousedown", this.boundMousedown)
    this.selectLangContainer.addEventListener("keydown", this.handleKeyDown.bind(this))

    this.langsListLiElements.forEach((langListLiElement) => {
      langListLiElement.addEventListener("click", () => {
        const chosenLangLitteral = langListLiElement.innerText
        this.langInput.value = chosenLangLitteral
      })
    })

    this.displayLangFromStorage();
    setTimeout(() => this.langInput.focus())
  }

  removeGlobalEvents() {
    document.removeEventListener("mousedown", this.boundMousedown)
  }

  handleMouseDown() {
    this.lastUserAction = "mouse"
  }

  handleKeyDown({ key }: KeyboardEvent) {
    this.lastUserAction = "keyboard"

    const activeElement = document.activeElement as HTMLLIElement | null
    const isFocusingLangListLi = activeElement?.parentElement === this.langsList

    if (key === "Enter" && isFocusingLangListLi) {
      const chosenLangLitteral = activeElement.innerText
      this.langInput.value = chosenLangLitteral
      this.hideLangsList()
      setTimeout(() => this.submitPictureButton.focus())
    }
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

  saveLangToStorage(chosenLangIso6392: string) {
    localStorage.setItem("prefLangIso6391", chosenLangIso6392);
  }

  displayLangFromStorage() {
    const chosenLangIso6392 = localStorage.getItem("prefLangIso6391") || this.getNavigatorLanguageToIso6392();
    if (chosenLangIso6392 == null) return

    if (this.isLangCodeValid(chosenLangIso6392)) {
      const chosenLangLitteral = selectOptions[chosenLangIso6392]
      this.langInput.value = chosenLangLitteral;
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

  handleLangInputFocus() {
    this.displayLangsList()
    this.filterLangs()
  }

  handleLangInputBlur() {
    if (this.lastUserAction === "mouse") {
      this.hideLangsList()
    }
  }

  displayLangsList() {
    this.langsList.setAttribute("data-visible", "")
  }

  hideLangsList() {
    this.langsList.removeAttribute("data-visible")
  }

  filterLangs() {
    const langInputValue = this.langInput.value

    this.langsListLiElements.forEach((langListLiElement) => {
      const langLitteral = langListLiElement.textContent!
      const isLangFound = langLitteral.toLowerCase().includes(langInputValue.toLowerCase())

      if (isLangFound) {
        langListLiElement.setAttribute("data-visible", "")
      } else {
        langListLiElement.removeAttribute("data-visible")
      }
    })
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
    const chosenLangIso6392 = litteralToIso6391.get(this.langInput.value);
    const isLangValid = chosenLangIso6392 !== undefined && this.isLangCodeValid(chosenLangIso6392)
    this.handleSelectError(isLangValid)
    if (isLangValid === false) return

    this.saveLangToStorage(chosenLangIso6392)
    this.displayProcessingProgress();

    const options: Partial<WorkerOptions> = { logger: this.handleImageProcessing.bind(this) };
    const worker = await createWorker(chosenLangIso6392, 1, options);
    const { data } = await worker.recognize(this.file);
    await worker.terminate();

    this.closeProcessModale();
    this.removeGlobalEvents()
    new ResultModale(data);
  }
}