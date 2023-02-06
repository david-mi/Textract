import { Paste } from "./paste";


export class DragAndDrop extends Paste {
  constructor() {
    super();
    this.labelFile.addEventListener("dragenter", this.handleDragEnter.bind(this));
    this.labelFile.addEventListener("dragover", this.handleDragOver.bind(this));
    this.labelFile.addEventListener("dragleave", this.handleDragLeave.bind(this));
    this.labelFile.addEventListener("drop", this.handleDrop.bind(this));
  }

  handleDragEnter(event) {
    event.preventDefault();
    this.handleLabelMouseEnter();
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDragLeave(event) {
    event.preventDefault();
    this.handleLabelMouseLeave();
  }

  handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length === 0) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }
}