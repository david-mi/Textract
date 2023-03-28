import styles from "./content.module.scss"

export function content() {
  return `
  <div id="help-content" class="${styles.content} ${styles.hide}">
    <h2>1. Ajoutez une image</h2>
    <ul>
      <li>Collez directement votre fichier sur la page (Chrome seulement)</li>
      <li><b>Ou</b> faites un glisser / déposer</li>
      <li><b>Ou</b> cliquez sur le bouton d'ajout et choisissez votre fichier</li>
    </ul>
    <h2>2. Choisissez une langue</h2>
    <ul>
      <li>Choisissez la langue la plus adaptée au texte de votre image</li>
      <li>Validez</li>
    </ul>
    <h2>3. Patientez</h2>
    <ul>
      <li>Le traitement peut prendre un peu de temps si le fichier est lourd et / ou si vous arrivez pour la première fois sur le site</li>
    </ul>
    <h2>4. Copiez le texte extrait</h2>
    <ul>
      <li>Cliquez sur le bouton de copie pour ajouter le texte au presse papier</li>
    </ul>
  </div>
  `
}