import styles from "./helpUi.module.scss"
import { helpIcon } from "@views/svg/helpIcon"

export function helpUi() {
  return `
  <div class=${styles.help}>
    <button id="help-button">
      ${helpIcon()}
    </button>
    <div id="help" class="${styles.content} ${styles.hide}">
      <h2>Ajoutez votre fichier</h2>
      <ul>
        <li>Collez directement votre fichier sur la page (Chrome seulement)</li>
        <li><b>Ou</b> faites un glisser / déposer</li>
        <li><b>Ou</b> cliquez sur le bouton d'upload et choisissez votre fichier</li>
      </ul>
     <h2>Choisissez une langue</h2>
     <ul>
       <li>Choisissez la langue la plus adaptée au texte de votre image</li>
       <li>Validez</li>
     </ul>
     <h2>Copier le texte extrait</h2>
      <ul>
        <li>Cliquez sur le bouton pour ajouter le texte au presse papier</li>
      </ul>
    </div>
  </div>
  `
}