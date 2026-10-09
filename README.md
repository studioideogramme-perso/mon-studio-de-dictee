# Mon studio de Dictée

Une petite application web statique pour créer une dictée de révision à partir d’une liste de mots et d’un temps de conjugaison.

L’icône PWA haute résolution est le fichier `icon.png`, placé à la racine du projet.

## Utilisation

Ouvrez `index.html` dans un navigateur. Ajoutez des mots au clavier ou au micro, choisissez un temps et l’une des trois tranches d’âge, puis cliquez sur **Créer ma dictée**. Le texte est adapté aux 6–8 ans, aux 9–11 ans ou aux plus de 11 ans. Les mots sont intégrés au récit selon le thème choisi (pirates, forêt ou aventure), et le bouton de rafraîchissement propose une autre variante.

L’application fonctionne sans compte. Les mots saisis restent dans la page pendant son utilisation. La saisie vocale dépend du navigateur et peut nécessiter une connexion HTTPS.

## Publication et installation sur smartphone

Dans les réglages du dépôt GitHub, ouvrez **Pages**, sélectionnez **Deploy from a branch**, puis la branche principale et le dossier `/ (root)`. GitHub Pages publie le site en HTTPS, nécessaire à l’installation de la PWA et au service worker.

Après publication, ouvrez l’adresse GitHub Pages sur le téléphone :

- **Android / Chrome** : ouvrez le menu du navigateur, puis choisissez **Installer l’application** ou **Ajouter à l’écran d’accueil**.
- **iPhone / Safari** : touchez **Partager**, puis **Sur l’écran d’accueil**.

Lors de la première visite, laissez la page se charger complètement avec une connexion. Le service worker met ensuite les fichiers de l’application en cache pour permettre son ouverture hors connexion. La reconnaissance vocale peut toutefois dépendre du navigateur et de sa connexion.
