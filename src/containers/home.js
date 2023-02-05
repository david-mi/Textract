
export class Home {
  constructor() {
    this.fileInput = document.querySelector("input[type='file']");
    this.fileInput.addEventListener("change", this.handleFileInput.bind(this));
    this.infosElement = document.getElementById("infos");
    document.addEventListener("paste", this.handlePasteFromClipboard.bind(this));
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
    console.log(files);
    if (files.length === 0) return;

    this.fileInput.files = files;
    this.fileInput.dispatchEvent(new Event("change"));
  }

  reset() {
    this.fileInput.value = "";
    this.infosElement.textContent = "";
    this.removeInfos();
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