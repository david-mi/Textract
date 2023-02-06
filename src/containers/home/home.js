export class Home {
  constructor() {
    this.form = document.getElementById("form");
    this.form.addEventListener("mouseenter", this.handleFormMouseEnter.bind(this));
    this.form.addEventListener("mouseleave", this.handleFormMouseLeave.bind(this));
    this.form.addEventListener("dragenter", this.handleDragEnter.bind(this));
    this.form.addEventListener("dragover", this.handleDragOver.bind(this));
    this.form.addEventListener("dragleave", this.handleDragLeave.bind(this));
    this.form.addEventListener("drop", this.handleDrop.bind(this));
    this.fileInput = document.querySelector("input[type='file']");
    this.fileInput.addEventListener("change", this.handleFileInput.bind(this));
    this.infosElement = document.getElementById("infos");
    document.addEventListener("paste", this.handlePasteFromClipboard.bind(this));
  }

  handleDragEnter(event) {
    event.preventDefault();
    this.handleFormMouseEnter();
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDragLeave(event) {
    event.preventDefault();
    this.handleFormMouseLeave();
  }

  handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length === 0) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }

  handleFormMouseEnter() {
    document.body.classList.add("hover-form");
  }

  handleFormMouseLeave() {
    document.body.classList.remove("hover-form");
  }

  checkFileValidity(file) {
    const mimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const addedFileMimeType = file.type;
    const isMimeTypeAccepted = mimeTypes.includes(addedFileMimeType);

    if (isMimeTypeAccepted === false) {
      throw new Error("Type du fichier non pris en charge");
    }
  }

  handlePasteFromClipboard({ clipboardData }) {
    const files = clipboardData.files;
    if (files.length === 0) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }

  reset() {
    this.fileInput.value = "";
    this.infosElement.textContent = "";
  }

  displayInfos(infos) {
    if (infos instanceof Error) {
      this.infosElement.textContent = infos.message;
    }

    this.infosElement.textContent = infos.name;
  }

  handleFileInput({ target }) {
    const addedFile = target.files[0];
    try {
      this.checkFileValidity(addedFile);
      this.displayInfos(addedFile);
    } catch (error) {
      this.reset();
      this.displayInfos(error);
      console.error(error);
    }
  }
}