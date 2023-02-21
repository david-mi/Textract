import { AddFile } from "./AddFile";

export class Paste extends AddFile {
  constructor() {
    super();
    document.addEventListener("paste", this.handlePasteFromClipboard.bind(this));
  }

  handlePasteFromClipboard({ clipboardData }) {
    const files = clipboardData.files;
    if (files.length === 0) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }
}