const navigatorLanguage = navigator.language;

export const lang = {
  "fr-FR": {
    processModale: {
      processState: {
        "loading tesseract core": "Chargement du noyen Tesseract",
        "initializing tesseract": "Initialisation de Tesseract",
        "initialized tesseract": "Tesseract initialisé",
        "loading language traineddata": "Chargement du language entraîné",
        "loading language traineddata (from cache)": "Récupération dans le cache",
        "loaded language traineddata": "Langage chargé",
        "initializing api": "Initialisation de l'API",
        "initialized api": "API initialisée",
        "recognizing text": "Reconnaissance du texte..."
      },
      choseLang: "Choisir un langage",
      selectOptions: {
        "eng": "Anglais",
        "fra": "Français"
      },
      sendButton: "Envoyer"
    }
  },

  "default": {
    processModale: {
      processState: {
        "loading tesseract core": "Loading tesseract core",
        "initializing tesseract": "Initializing tesseract",
        "initialized tesseract": "Initialized tesseract",
        "loading language traineddata": "Loading language traineddata",
        "loading language traineddata (from cache)": "Loading language traineddata (from cache)",
        "loaded language traineddata": "Loaded language traineddata",
        "initializing api": "Initializing api",
        "initialized api": "Initialized api",
        "recognizing text": "Recognizing text"
      },
      choseLang: "Choose a lang",
      selectOptions: {
        "eng": "English",
        "fra": "French"
      },
      sendButton: "Send"
    }
  }
};

export const langConfig = lang[navigatorLanguage] || lang.default;