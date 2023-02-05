
export class Home {
  constructor() {
    this.fileInput = document.querySelector("input[type='file']");
    this.fileInput.addEventListener("change", this.handleFileInput.bind(this));
    this.resetButton = document.getElementById("reset");
    this.resetButton.addEventListener("click", this.reset.bind(this));
    this.infosElement = document.getElementById("infos");
  }

  checkFileValidity(file) {
    const mimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const addedFileMimeType = file.type;
    const isMimeTypeAccepted = mimeTypes.includes(addedFileMimeType);

    if (isMimeTypeAccepted === false) {
      throw new Error("Type non pris en charge");
    }
  }

  reset() {
    this.fileInput.value = "";
    this.removeInfos();
  }

  displayInfos(infos) {
    if (infos instanceof Error) {
      this.infosElement.textContent = infos.message;
    }

    this.infosElement.textContent = infos.name;
  }

  removeInfos() {
    this.infosElement.textContent = "";
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