import { Paste } from "./Paste";


export class DragAndDrop extends Paste {
  constructor() {
    super();
    this.labelFile.addEventListener("dragenter", this.handleDragEnter.bind(this));
    this.labelFile.addEventListener("dragover", this.handleDragOver.bind(this));
    this.labelFile.addEventListener("dragleave", this.handleDragLeave.bind(this));
    this.labelFile.addEventListener("drop", this.handleDrop.bind(this));
  }

  handleDragEnter(event: DragEvent) {
    event.preventDefault();
    this.handleLabelMouseEnter();
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
    this.handleLabelMouseLeave();
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const { dataTransfer } = event

    if (dataTransfer === null) return
    const files = dataTransfer.files;
    if (files.length === 0) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }
}