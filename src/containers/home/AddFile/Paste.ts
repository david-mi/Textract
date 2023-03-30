import { AddFile } from "./AddFile";

export class Paste extends AddFile {
  handlePasteClipBoardBind = this.handlePasteFromClipboard.bind(this)
  handleKeydownBind = this.handleKeyDown.bind(this)
  constentEditableElement = document.getElementById("editable")!
  observer: MutationObserver
  blobFromContentEditable: Blob | null = null

  constructor() {
    super();
    this.observer = new MutationObserver((records) => {
      records.forEach(async ({ target }) => {
        const imgElement = (target as HTMLElement).querySelector("img");
        if (imgElement !== null) {
          this.blobFromContentEditable = await this.getBlobFromBase64(imgElement.src);
          this.handlePasteFromClipboard();
        }
      });
    });

    document.addEventListener("addPaste", this.handleAddPaste.bind(this))
    document.addEventListener("removePaste", this.handleRemovePaste.bind(this))
    document.dispatchEvent(new Event("addPaste"))
  }

  async getBlobFromBase64(base64: string) {
    const response = await fetch(base64);
    return await response.blob();
  }

  handleKeyDown() {
    if (document.activeElement !== this.constentEditableElement) {
      this.constentEditableElement.focus();
    }

    this.constentEditableElement.innerHTML = "";
  }

  handleAddPaste() {
    document.addEventListener("paste", this.handlePasteClipBoardBind);
    document.addEventListener("keydown", this.handleKeydownBind);
    this.observer.observe(this.constentEditableElement, { childList: true })
    this.constentEditableElement.contentEditable = "true"
  }

  handleRemovePaste() {
    document.removeEventListener("paste", this.handlePasteClipBoardBind);
    document.removeEventListener("keydown", this.handleKeydownBind);
    this.constentEditableElement.contentEditable = "false"
    this.observer.disconnect()
  }

  async handlePasteFromClipboard(event?: ClipboardEvent) {
    let files = null

    if (event) {
      files = event.clipboardData && event.clipboardData.files;
      if (files === null) return;
    } else {
      const blob = this.blobFromContentEditable!
      if (blob === null) return
      const file = new File([blob], "blob", { type: blob.type })
      const dataTransfer = new DataTransfer()
      dataTransfer.items.add(file)
      files = dataTransfer.files
      this.constentEditableElement.contentEditable = "false"
      this.constentEditableElement.innerHTML = "";
    }

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }
}