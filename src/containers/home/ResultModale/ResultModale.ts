import { resultModaleUi } from "@views/homeUi/resultModaleUi/resultModaleUi";

export class ResultModale {
  paragraphs: Tesseract.Paragraph[]
  textResult: string
  resultModale: HTMLElement
  closeResultModaleButton: HTMLButtonElement
  copyButton: HTMLButtonElement
  copyButtonContainer: HTMLButtonElement
  copiedElement: HTMLElement
  resultText: HTMLElement
  copiedElementTimeout: null | NodeJS.Timeout = null
  overflowWrapper: HTMLElement

  constructor({ blocks, text }: Tesseract.Page) {
    this.paragraphs = this.getParagraphsFromResult(blocks, text) as Tesseract.Paragraph[];
    this.textResult = text;
    this.displayResultModale();
    this.resultModale = document.getElementById("result-modale")!;
    this.closeResultModaleButton = document.getElementById("close-result-modale") as HTMLButtonElement;
    this.closeResultModaleButton.addEventListener("click", this.handleCloseResultModale.bind(this));
    this.copyButton = document.getElementById("copy-button") as HTMLButtonElement;
    this.copyButton.addEventListener("click", this.handleCopy.bind(this));
    this.copyButtonContainer = document.getElementById("copy-button-container") as HTMLButtonElement;
    this.copiedElement = document.getElementById("copied-text-alert")!;
    this.resultText = document.getElementById("result-text")!;
    this.overflowWrapper = document.getElementById("overflow-wrapper")!
  }

  getParagraphsFromResult(blocks: Tesseract.Block[] | null, text: string) {
    if (blocks !== null) {
      return blocks.flatMap(({ paragraphs }) => {
        return paragraphs.map(({ lines }) => {
          return {
            lines: lines.map(({ text }) => ({ text }))
          }
        })
      })
    }

    return text
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => ({
        lines: paragraph
          .split(/\n/)
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line) => ({ text: line }))
      }))
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

    this.copyButtonContainer.style.backdropFilter = "none"
    this.copyButton.disabled = true
    this.resultText.style.userSelect = "none"
    this.overflowWrapper.style.filter = "blur(3px)"
    this.copiedElement.style.display = "grid";
    this.copiedElementTimeout = setTimeout(this.hideCopiedElement.bind(this), 1800);
  }

  hideCopiedElement() {
    this.copyButtonContainer.style.backdropFilter = "blur(3px)"
    this.copyButton.disabled = false
    this.resultText.style.userSelect = "auto"
    this.overflowWrapper.style.filter = "none"
    this.copiedElement.style.display = "none";
  }

  handleCloseResultModale() {
    this.resultModale.remove();
    document.dispatchEvent(new Event("addPaste"))
  }

  displayResultModale() {
    const main = document.querySelector("main")!;
    main.insertAdjacentHTML("beforeend", resultModaleUi(this.paragraphs))
  }
}
