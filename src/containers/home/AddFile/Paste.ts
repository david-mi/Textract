import { AddFile } from "./AddFile";

export class Paste extends AddFile {
  handlePasteClipBoardBind = this.handlePasteFromClipboard.bind(this)

  constructor() {
    super();
    document.addEventListener("addPaste", this.handleAddPaste.bind(this))
    document.addEventListener("removePaste", this.handleRemovePaste.bind(this))
    document.dispatchEvent(new Event("addPaste"))
  }

  handleAddPaste() {
    document.addEventListener("paste", this.handlePasteClipBoardBind);
  }

  handleRemovePaste() {
    document.removeEventListener("paste", this.handlePasteClipBoardBind);
  }

  handlePasteFromClipboard({ clipboardData }: ClipboardEvent) {
    const files = clipboardData && clipboardData.files;
    if (files === null) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }
}