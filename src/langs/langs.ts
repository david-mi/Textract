import { trainedLangsListEng, trainedLangsListFr } from "@views/homeUi/processModaleUi/langFormUi/trainedLangs";

type LangDataProps = "fr" | "en"
const navigatorLanguageFirstTwoLetters = navigator.language.slice(0, 2) as LangDataProps

export interface ProcessState {
  "loading tesseract core": string,
  "initializing tesseract": string,
  "initialized tesseract": string,
  "loading language traineddata": string,
  "loading language traineddata (from cache)": string,
  "loaded language traineddata": string,
  "initializing api": string,
  "initialized api": string,
  "recognizing text": string
}

interface LangData {
  description: {
    1: string,
    2: string,
    3: string,
    4: string,
    5?: string
  },
  help: {
    add: {
      title: string,
      [index: number]: string,
    },
    choose: {
      title: string,
      [index: number]: string,
    }
    wait: {
      title: string,
      [index: number]: string,
    }
    retrieve: {
      title: string,
      [index: number]: string,
    }
  }
  processModale: {
    processState: ProcessState,
    selectError: string,
    selectOptions: {
      [props: string]: string
    },
    sendButton: string
  },
  resultModale: {
    clipboardAlert: string
  }
}

const lang: Record<LangDataProps, LangData> = {
  "fr": {
    description: {
      1: "Un simple outil pour",
      2: "extraire du texte",
      3: "à partir d'une",
      4: "image"
    },
    help: {
      add: {
        title: "Ajouter une image",
        1: "Collez votre fichier sur la page (Chrome seulement)",
        2: "ou alors faites un glisser / déposer",
        3: "ou alors cliquez sur le bouton parcourir et choisissez votre fichier"
      },
      choose: {
        title: "Choisir la langue",
        1: "Choisissez la langue utilisée dans l'image",
        2: "Confirmez"
      },
      wait: {
        title: "Patienter",
        1: "Le traitement peut prendre un peu de temps si vous utilisez l'application pour la première fois, ou si l'image contient beaucoup de texte"
      },
      retrieve: {
        title: "Récupérer le texte",
        1: "Cliquez sur le bouton de copie pour ajouter le texte au presse papier"
      }
    },
    processModale: {
      processState: {
        "loading tesseract core": "Chargement du noyau Tesseract",
        "initializing tesseract": "Initialisation de Tesseract",
        "initialized tesseract": "Tesseract initialisé",
        "loading language traineddata": "Chargement du language entraîné",
        "loading language traineddata (from cache)": "Chargement du language entraîné (via le cache)",
        "loaded language traineddata": "Langage chargé",
        "initializing api": "Initialisation de l'API",
        "initialized api": "API initialisée",
        "recognizing text": "Reconnaissance du texte..."
      },
      selectError: "Choisissez une langue valide",
      selectOptions: trainedLangsListFr,
      sendButton: "Envoyer"
    },
    resultModale: {
      clipboardAlert: "Ajouté au presse papier"
    }
  },

  "en": {
    description: {
      1: "A simple",
      2: "text extractor",
      3: "from",
      4: "image",
      5: "tool"
    },
    help: {
      add: {
        title: "Add an image",
        1: "You can paste you image on the page (Chrome only)",
        2: "or drop it",
        3: "or click on browse button and choose it"
      },
      choose: {
        title: "Choose a language",
        1: "Choose the language involved in your picture",
        2: "Confirm"
      },
      wait: {
        title: "Wait",
        1: "Length of the process will be a bit longer than expected if you're using the app for the first time or if the image contains a lot of text"
      },
      retrieve: {
        title: "Retrieve text",
        1: "Click on the copy button to add extracted text on clipboard"
      }
    },
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
      selectError: "Choose a valid lang",
      selectOptions: trainedLangsListEng,
      sendButton: "Send"
    },
    resultModale: {
      clipboardAlert: "Added to clipboard"
    }
  }
};

export const langConfig = lang[navigatorLanguageFirstTwoLetters] || lang.en;

export const iso6391toIso6392: Record<string, string> = {
  "af": "afr",
  "am": "amh",
  "ar": "ara",
  "as": "asm",
  "az": "aze",
  "be": "bel",
  "bg": "bul",
  "bn": "ben",
  "bo": "bod",
  "bs": "bos",
  "ca": "cat",
  "cs": "ces",
  "cy": "cym",
  "da": "dan",
  "de": "deu",
  "dz": "dzo",
  "el": "ell",
  "en": "eng",
  "eo": "epo",
  "es": "spa",
  "et": "est",
  "eu": "eus",
  "fa": "fas",
  "fi": "fin",
  "fr": "fra",
  "ga": "gle",
  "gd": "gla",
  "gu": "guj",
  "he": "heb",
  "hi": "hin",
  "hr": "hrv",
  "hu": "hun",
  "hy": "hye",
  "id": "ind",
  "is": "isl",
  "it": "ita",
  "ja": "jpn",
  "ka": "kat",
  "kk": "kaz",
  "km": "khm",
  "kn": "kan",
  "ko": "kor",
  "ku": "kur",
  "la": "lat",
  "lo": "lao",
  "lt": "lit",
  "lv": "lav",
  "mk": "mkd",
  "ml": "mal",
  "mr": "mar",
  "ms": "msa",
  "mt": "mlt",
  "my": "mya",
  "ne": "nep",
  "nl": "nld",
  "no": "nor",
  "or": "ori",
  "pa": "pan",
  "pl": "pol",
  "ps": "pus",
  "pt": "por",
  "ro": "ron",
  "ru": "rus",
  "sa": "san",
  "si": "sin",
  "sk": "slk",
  "sl": "slv",
  "sq": "sqi",
  "sr": "srp",
  "sv": "swe",
  "ta": "tam",
  "te": "tel",
  "tg": "tgk",
  "th": "tha",
  "ti": "tir",
  "tr": "tur",
  "uk": "ukr",
  "ur": "urd",
  "uz": "uzb",
  "vi": "vie",
  "yi": "yid"
}