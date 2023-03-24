import { AddFile } from "./AddFile";

export class Paste extends AddFile {
  constructor() {
    super();
    document.addEventListener("paste", this.handlePasteFromClipboard.bind(this));
  }

  handlePasteFromClipboard({ clipboardData }: ClipboardEvent) {
    const files = clipboardData && clipboardData.files;
    if (files === null) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }
}