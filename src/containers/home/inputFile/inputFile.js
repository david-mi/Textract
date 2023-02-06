export class InputFile {
  constructor() {
    this.fileInput = document.querySelector("input[type='file']");
    this.fileInput.addEventListener("change", this.handleFileInput.bind(this));
    this.labelFile = document.querySelector("label[for='file']");
    this.labelFile.addEventListener("mouseenter", this.handleLabelMouseEnter.bind(this));
    this.labelFile.addEventListener("mouseleave", this.handleLabelMouseLeave.bind(this));
    this.infosElement = document.getElementById("infos");
  }

  displayInfos(infos) {
    if (infos instanceof Error) {
      this.infosElement.textContent = infos.message;
    }

    this.infosElement.textContent = infos.name;
  }

  handleLabelMouseEnter() {
    document.body.classList.add("hover-form");
  }

  handleLabelMouseLeave() {
    document.body.classList.remove("hover-form");
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

  checkFileValidity(file) {
    const mimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const addedFileMimeType = file.type;
    const isMimeTypeAccepted = mimeTypes.includes(addedFileMimeType);

    if (isMimeTypeAccepted === false) {
      throw new Error("Type du fichier non pris en charge");
    }
  }

  reset() {
    this.fileInput.value = "";
    this.infosElement.textContent = "";
  }
}