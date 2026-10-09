const initialWords = [];
const tenseLabels = {
  present: 'Présent', imparfait: 'Imparfait', 'passe-compose': 'Passé composé',
  futur: 'Futur simple', 'passe-simple': 'Passé simple'
};
const storyScenes = {
  pirate: {
    matches: ['bateau', 'navire', 'pirate', 'capitaine', 'ramer', 'trésor', 'équipage', 'matelot', 'voile', 'île', 'coffre', 'moussaillon'],
    simpleVariants: [
      {
        present: ['Le pirate rame sur le bateau.'],
        imparfait: ['Le pirate ramait sur le bateau.'],
        'passe-compose': ['Le pirate a ramé sur le bateau.'],
        futur: ['Le pirate ramera sur le bateau.'],
        'passe-simple': ['Le pirate rama sur le bateau.']
      },
      {
        present: ['Le capitaine voit une île.'],
        imparfait: ['Le capitaine voyait une île.'],
        'passe-compose': ['Le capitaine a vu une île.'],
        futur: ['Le capitaine verra une île.'],
        'passe-simple': ['Le capitaine vit une île.']
      }
    ],
    advancedVariants: [
      {
        present: ['À l’aube, le capitaine hisse la voile et confie la carte au plus jeune moussaillon.', 'Le bateau fend la brume tandis que l’équipage rame vers une île oubliée.', 'Au pied d’une falaise, un coffre révèle enfin le trésor tant recherché.'],
        imparfait: ['À l’aube, le capitaine hissait la voile et confiait la carte au plus jeune moussaillon.', 'Le bateau fendait la brume tandis que l’équipage ramait vers une île oubliée.', 'Au pied d’une falaise, un coffre révélait enfin le trésor tant recherché.'],
        'passe-compose': ['À l’aube, le capitaine a hissé la voile et confié la carte au plus jeune moussaillon.', 'Le bateau a fendu la brume tandis que l’équipage a ramé vers une île oubliée.', 'Au pied d’une falaise, un coffre a révélé le trésor tant recherché.'],
        futur: ['À l’aube, le capitaine hissera la voile et confiera la carte au plus jeune moussaillon.', 'Le bateau fendra la brume tandis que l’équipage ramera vers une île oubliée.', 'Au pied d’une falaise, un coffre révélera enfin le trésor tant recherché.'],
        'passe-simple': ['À l’aube, le capitaine hissa la voile et confia la carte au plus jeune moussaillon.', 'Le bateau fendit la brume tandis que l’équipage rama vers une île oubliée.', 'Au pied d’une falaise, un coffre révéla enfin le trésor tant recherché.']
      }
    ],
    variants: [
      {
        present: ['Le capitaine fait ramer le bateau vers l’île.', 'Là, les pirates trouvent un trésor.'],
        imparfait: ['Le capitaine faisait ramer le bateau vers l’île.', 'Là, les pirates trouvaient un trésor.'],
        'passe-compose': ['Le capitaine a fait ramer le bateau vers l’île.', 'Là, les pirates ont trouvé un trésor.'],
        futur: ['Le capitaine fera ramer le bateau vers l’île.', 'Là, les pirates trouveront un trésor.'],
        'passe-simple': ['Le capitaine fit ramer le bateau vers l’île.', 'Là, les pirates trouvèrent un trésor.']
      },
      {
        present: ['Le bateau glisse près de l’île.', 'Le capitaine fait ramer ses marins jusqu’au sable.'],
        imparfait: ['Le bateau glissait près de l’île.', 'Le capitaine faisait ramer ses marins jusqu’au sable.'],
        'passe-compose': ['Le bateau a glissé près de l’île.', 'Le capitaine a fait ramer ses marins jusqu’au sable.'],
        futur: ['Le bateau glissera près de l’île.', 'Le capitaine fera ramer ses marins jusqu’au sable.'],
        'passe-simple': ['Le bateau glissa près de l’île.', 'Le capitaine fit ramer ses marins jusqu’au sable.']
      },
      {
        present: ['Les pirates montent dans le bateau.', 'Le capitaine fait ramer vers le trésor.'],
        imparfait: ['Les pirates montaient dans le bateau.', 'Le capitaine faisait ramer vers le trésor.'],
        'passe-compose': ['Les pirates sont montés dans le bateau.', 'Le capitaine a fait ramer vers le trésor.'],
        futur: ['Les pirates monteront dans le bateau.', 'Le capitaine fera ramer vers le trésor.'],
        'passe-simple': ['Les pirates montèrent dans le bateau.', 'Le capitaine fit ramer vers le trésor.']
      }
    ],
    thread: {
      present: items => `Sur la plage, le capitaine découvre ${items} avant de reprendre la chasse au trésor.`, imparfait: items => `Sur la plage, le capitaine découvrait ${items} avant de reprendre la chasse au trésor.`,
      'passe-compose': items => `Sur la plage, le capitaine a découvert ${items} avant de reprendre la chasse au trésor.`, futur: items => `Sur la plage, le capitaine découvrira ${items} avant de reprendre la chasse au trésor.`, 'passe-simple': items => `Sur la plage, le capitaine découvrit ${items} avant de reprendre la chasse au trésor.`
    }
  },
  forest: {
    matches: ['forêt', 'bois', 'arbre', 'sapin', 'sentier', 'fougère', 'renard', 'chemin', 'promenade', 'balade', 'au-dessus', 'à travers', 'maintenant'],
    simpleVariants: [
      {
        present: ['Lila marche dans les bois. Elle voit un renard.'],
        imparfait: ['Lila marchait dans les bois. Elle voyait un renard.'],
        'passe-compose': ['Lila a marché dans les bois. Elle a vu un renard.'],
        futur: ['Lila marchera dans les bois. Elle verra un renard.'],
        'passe-simple': ['Lila marcha dans les bois. Elle vit un renard.']
      },
      {
        present: ['Un oiseau chante au-dessus du chemin.'],
        imparfait: ['Un oiseau chantait au-dessus du chemin.'],
        'passe-compose': ['Un oiseau a chanté au-dessus du chemin.'],
        futur: ['Un oiseau chantera au-dessus du chemin.'],
        'passe-simple': ['Un oiseau chanta au-dessus du chemin.']
      }
    ],
    advancedVariants: [
      {
        present: ['Au petit matin, Lila s’engage sur un sentier couvert de fougères.', 'Un renard apparaît entre les sapins et l’entraîne jusqu’à une clairière.', 'Au-dessus des arbres, la lumière dessine le chemin qui mène au lac.'],
        imparfait: ['Au petit matin, Lila s’engageait sur un sentier couvert de fougères.', 'Un renard apparaissait entre les sapins et l’entraînait jusqu’à une clairière.', 'Au-dessus des arbres, la lumière dessinait le chemin qui menait au lac.'],
        'passe-compose': ['Au petit matin, Lila s’est engagée sur un sentier couvert de fougères.', 'Un renard est apparu entre les sapins et l’a entraînée jusqu’à une clairière.', 'Au-dessus des arbres, la lumière a dessiné le chemin qui menait au lac.'],
        futur: ['Au petit matin, Lila s’engagera sur un sentier couvert de fougères.', 'Un renard apparaîtra entre les sapins et l’entraînera jusqu’à une clairière.', 'Au-dessus des arbres, la lumière dessinera le chemin qui mène au lac.'],
        'passe-simple': ['Au petit matin, Lila s’engagea sur un sentier couvert de fougères.', 'Un renard apparut entre les sapins et l’entraîna jusqu’à une clairière.', 'Au-dessus des arbres, la lumière dessina le chemin qui menait au lac.']
      }
    ],
    variants: [
      {
        present: ['Au-dessus des arbres, le soleil brille.', 'À travers les bois, les enfants suivent un petit chat. Maintenant, ils arrivent près d’un lac.'],
        imparfait: ['Au-dessus des arbres, le soleil brillait.', 'À travers les bois, les enfants suivaient un petit chat. Maintenant, ils arrivaient près d’un lac.'],
        'passe-compose': ['Au-dessus des arbres, le soleil a brillé.', 'À travers les bois, les enfants ont suivi un petit chat. Maintenant, ils sont arrivés près d’un lac.'],
        futur: ['Au-dessus des arbres, le soleil brillera.', 'À travers les bois, les enfants suivront un petit chat. Maintenant, ils arriveront près d’un lac.'],
        'passe-simple': ['Au-dessus des arbres, le soleil brilla.', 'À travers les bois, les enfants suivirent un petit chat. Maintenant, ils arrivèrent près d’un lac.']
      },
      {
        present: ['Au-dessus des branches, un oiseau chante.', 'À travers les bois, Lila suit le bruit. Maintenant, elle voit un renard.'],
        imparfait: ['Au-dessus des branches, un oiseau chantait.', 'À travers les bois, Lila suivait le bruit. Maintenant, elle voyait un renard.'],
        'passe-compose': ['Au-dessus des branches, un oiseau a chanté.', 'À travers les bois, Lila a suivi le bruit. Maintenant, elle a vu un renard.'],
        futur: ['Au-dessus des branches, un oiseau chantera.', 'À travers les bois, Lila suivra le bruit. Maintenant, elle verra un renard.'],
        'passe-simple': ['Au-dessus des branches, un oiseau chanta.', 'À travers les bois, Lila suivit le bruit. Maintenant, elle vit un renard.']
      }
    ],
    thread: {
      present: items => `À travers les branches, Lila aperçoit ${items} et comprend que le sentier cache encore une surprise.`, imparfait: items => `À travers les branches, Lila apercevait ${items} et comprenait que le sentier cachait encore une surprise.`,
      'passe-compose': items => `À travers les branches, Lila a aperçu ${items} et a compris que le sentier cachait encore une surprise.`, futur: items => `À travers les branches, Lila apercevra ${items} et comprendra que le sentier cache encore une surprise.`, 'passe-simple': items => `À travers les branches, Lila aperçut ${items} et comprit que le sentier cachait encore une surprise.`
    }
  },
  adventure: {
    matches: [],
    simpleVariants: [
      {
        present: ['Noé trouve une petite clé.'],
        imparfait: ['Noé trouvait une petite clé.'],
        'passe-compose': ['Noé a trouvé une petite clé.'],
        futur: ['Noé trouvera une petite clé.'],
        'passe-simple': ['Noé trouva une petite clé.']
      },
      {
        present: ['Mila voit une lumière.'],
        imparfait: ['Mila voyait une lumière.'],
        'passe-compose': ['Mila a vu une lumière.'],
        futur: ['Mila verra une lumière.'],
        'passe-simple': ['Mila vit une lumière.']
      }
    ],
    advancedVariants: [
      {
        present: ['À la tombée du jour, Noé découvre une clé près du vieux moulin.', 'Elle ouvre une porte cachée derrière les lierres.', 'De l’autre côté, une lanterne éclaire un passage que personne n’a vu depuis longtemps.'],
        imparfait: ['À la tombée du jour, Noé découvrait une clé près du vieux moulin.', 'Elle ouvrait une porte cachée derrière les lierres.', 'De l’autre côté, une lanterne éclairait un passage que personne n’avait vu depuis longtemps.'],
        'passe-compose': ['À la tombée du jour, Noé a découvert une clé près du vieux moulin.', 'Elle a ouvert une porte cachée derrière les lierres.', 'De l’autre côté, une lanterne a éclairé un passage que personne n’avait vu depuis longtemps.'],
        futur: ['À la tombée du jour, Noé découvrira une clé près du vieux moulin.', 'Elle ouvrira une porte cachée derrière les lierres.', 'De l’autre côté, une lanterne éclairera un passage que personne n’aura vu depuis longtemps.'],
        'passe-simple': ['À la tombée du jour, Noé découvrit une clé près du vieux moulin.', 'Elle ouvrit une porte cachée derrière les lierres.', 'De l’autre côté, une lanterne éclaira un passage que personne n’avait vu depuis longtemps.']
      }
    ],
    variants: [
      {
        present: ['Après l’école, Noé trouve une petite clé près du vieux mur.', 'Elle ouvre une porte cachée.'],
        imparfait: ['Après l’école, Noé trouvait une petite clé près du vieux mur.', 'Elle ouvrait une porte cachée.'],
        'passe-compose': ['Après l’école, Noé a trouvé une petite clé près du vieux mur.', 'Elle a ouvert une porte cachée.'],
        futur: ['Après l’école, Noé trouvera une petite clé près du vieux mur.', 'Elle ouvrira une porte cachée.'],
        'passe-simple': ['Après l’école, Noé trouva une petite clé près du vieux mur.', 'Elle ouvrit une porte cachée.']
      },
      {
        present: ['Mila suit une lumière dans le jardin.', 'Au bout du chemin, elle trouve un petit bateau.'],
        imparfait: ['Mila suivait une lumière dans le jardin.', 'Au bout du chemin, elle trouvait un petit bateau.'],
        'passe-compose': ['Mila a suivi une lumière dans le jardin.', 'Au bout du chemin, elle a trouvé un petit bateau.'],
        futur: ['Mila suivra une lumière dans le jardin.', 'Au bout du chemin, elle trouvera un petit bateau.'],
        'passe-simple': ['Mila suivit une lumière dans le jardin.', 'Au bout du chemin, elle trouva un petit bateau.']
      }
    ],
    thread: {
      present: items => `Sur son chemin, Noé rencontre ${items} et comprend que chacun peut l’aider à trouver la porte secrète.`, imparfait: items => `Sur son chemin, Noé rencontrait ${items} et comprenait que chacun pouvait l’aider à trouver la porte secrète.`,
      'passe-compose': items => `Sur son chemin, Noé a rencontré ${items} et a compris que chacun pouvait l’aider à trouver la porte secrète.`, futur: items => `Sur son chemin, Noé rencontrera ${items} et comprendra que chacun pourra l’aider à trouver la porte secrète.`, 'passe-simple': items => `Sur son chemin, Noé rencontra ${items} et comprit que chacun pouvait l’aider à trouver la porte secrète.`
    }
  }
};
function normalizeForMatch(value) {
  return value.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, ' ').replace(/-/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeForCoverage(value) {
  return value.toLocaleLowerCase('fr').normalize('NFC').replace(/[’']/g, ' ').replace(/-/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
}

function chooseScene(wordList) {
  const normalized = wordList.map(normalizeForMatch);
  const forestCueCount = normalized.filter(word => ['au dessus', 'a travers', 'maintenant'].includes(word)).length;
  if (forestCueCount >= 2 || normalized.some(word => storyScenes.forest.matches.map(normalizeForMatch).includes(word))) return storyScenes.forest;
  if (normalized.some(word => storyScenes.pirate.matches.map(normalizeForMatch).includes(word))) return storyScenes.pirate;
  return storyScenes.adventure;
}

const ageProfiles = {
  '6-8': { label: '6 à 8 ans', variants: 'simpleVariants' },
  '9-11': { label: '9 à 11 ans', variants: 'variants' },
  '12-plus': { label: '+ de 11 ans', variants: 'advancedVariants' }
};

function joinFrench(items) {
  if (items.length < 2) return items[0] || '';
  return `${items.slice(0, -1).join(', ')} et ${items[items.length - 1]}`;
}

function createStory(wordList, tense, ageGroup) {
  const scene = chooseScene(wordList);
  const variants = scene[ageProfiles[ageGroup].variants];
  const variantIndex = generation++ % variants.length;
  const sentences = [...variants[variantIndex][tense]];
  const allStoryWords = normalizeForCoverage(sentences.join(' '));
  let extras = wordList.filter(word => !(` ${allStoryWords} `).includes(` ${normalizeForCoverage(word)} `));
  if (extras.length > 1) {
    const shift = variantIndex % extras.length;
    extras = [...extras.slice(shift), ...extras.slice(0, shift)];
  }
  if (extras.length) sentences.splice(1, 0, scene.thread[tense](joinFrench(extras)));
  return sentences;
}
const wordForm = document.querySelector('#word-form');
const wordInput = document.querySelector('#word-input');
const wordList = document.querySelector('#word-list');
const tenseSelect = document.querySelector('#tense-select');
const emptyState = document.querySelector('#empty-state');
const dictationContent = document.querySelector('#dictation-content');
const dictationText = document.querySelector('#dictation-text');
const voiceButton = document.querySelector('#voice-button');
const voiceStatus = document.querySelector('#voice-status');
let words = [...initialWords];
let generation = 0;
let recognition = null;

function renderWords() {
  wordList.replaceChildren();
  wordList.classList.toggle('is-empty', words.length === 0);
  words.forEach((word, index) => {
    const chip = document.createElement('span');
    chip.className = 'word-chip';
    const label = document.createElement('span');
    label.textContent = word;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove-word';
    remove.textContent = '×';
    remove.setAttribute('aria-label', `Supprimer ${word}`);
    remove.addEventListener('click', () => { words.splice(index, 1); renderWords(); });
    chip.append(label, remove);
    wordList.append(chip);
  });
  document.querySelector('#word-count').textContent = `${words.length} ${words.length === 1 ? 'MOT' : 'MOTS'}`;
}

function addWord(value, source = 'keyboard') {
  const word = value.trim().replace(/\s+/g, ' ').replace(/[.,!?;:]+$/u, '');
  if (!word) return false;
  if (words.some(existing => existing.localeCompare(word, 'fr', { sensitivity: 'accent' }) === 0)) {
    if (source === 'voice') voiceStatus.textContent = `« ${word} » est déjà dans la liste.`;
    else {
      wordInput.setCustomValidity('Ce mot est déjà dans la liste.');
      wordInput.reportValidity();
      wordInput.addEventListener('input', () => wordInput.setCustomValidity(''), { once: true });
    }
    return false;
  }
  words.push(word);
  renderWords();
  if (source === 'voice') voiceStatus.textContent = `« ${word} » ajouté à la liste.`;
  else {
    wordInput.value = '';
    wordInput.focus();
  }
  return true;
}

function addWordGroup(value) {
  const candidates = value.split(',')
    .map(word => word.trim().replace(/\s+/g, ' ').replace(/[.!?;:]+$/u, ''))
    .filter(Boolean);
  const seen = new Set(words.map(word => word.toLocaleLowerCase('fr').normalize('NFC')));
  const added = [];
  const duplicates = [];
  candidates.forEach(word => {
    const key = word.toLocaleLowerCase('fr').normalize('NFC');
    if (seen.has(key)) duplicates.push(word);
    else { seen.add(key); added.push(word); }
  });
  if (added.length) {
    words.push(...added);
    renderWords();
  }
  wordInput.value = '';
  wordInput.focus();
  document.querySelector('#word-hint').textContent = duplicates.length
    ? `Déjà dans la liste : ${[...new Set(duplicates)].join(', ')}.`
    : 'Saisissez les mots à apprendre.';
}

wordForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!wordInput.value.trim()) { wordInput.focus(); return; }
  addWordGroup(wordInput.value);
});

voiceButton.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
    voiceStatus.textContent = 'Arrêt de l’écoute…';
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceStatus.textContent = 'La saisie vocale n’est pas disponible dans ce navigateur. Vous pouvez ajouter le mot au clavier.';
    return;
  }
  if (!window.isSecureContext && location.hostname !== 'localhost') {
    voiceStatus.textContent = 'La saisie vocale nécessite une connexion sécurisée HTTPS.';
    return;
  }

  const currentRecognition = new SpeechRecognition();
  recognition = currentRecognition;
  currentRecognition.lang = 'fr-FR';
  currentRecognition.continuous = false;
  currentRecognition.interimResults = false;
  currentRecognition.maxAlternatives = 1;
  voiceButton.classList.add('is-listening');
  voiceButton.setAttribute('aria-label', 'Arrêter l’écoute du micro');
  voiceButton.title = 'Arrêter l’écoute du micro';
  voiceStatus.textContent = 'Je vous écoute… Prononcez un mot.';

  currentRecognition.onresult = event => {
    const transcript = event.results?.[0]?.[0]?.transcript || '';
    if (transcript.trim()) addWord(transcript, 'voice');
    else voiceStatus.textContent = 'Je n’ai pas reconnu de mot. Réessayez.';
  };
  currentRecognition.onerror = event => {
    const messages = {
      'not-allowed': 'L’accès au micro est refusé. Autorisez le micro dans les réglages du navigateur.',
      'service-not-allowed': 'Le service de reconnaissance vocale n’est pas autorisé.',
      'no-speech': 'Aucun mot entendu. Appuyez sur le micro et réessayez.',
      network: 'La reconnaissance vocale a besoin d’une connexion réseau.',
      'language-not-supported': 'La reconnaissance vocale en français n’est pas disponible.'
    };
    voiceStatus.textContent = messages[event.error] || 'La reconnaissance vocale a échoué. Réessayez ou saisissez le mot au clavier.';
  };
  currentRecognition.onend = () => {
    if (recognition !== currentRecognition) return;
    recognition = null;
    voiceButton.classList.remove('is-listening');
    voiceButton.setAttribute('aria-label', 'Ajouter un mot à la voix');
    voiceButton.title = 'Ajouter un mot à la voix';
  };
  try { currentRecognition.start(); }
  catch {
    recognition = null;
    voiceButton.classList.remove('is-listening');
    voiceButton.setAttribute('aria-label', 'Ajouter un mot à la voix');
    voiceButton.title = 'Ajouter un mot à la voix';
    voiceStatus.textContent = 'Impossible de démarrer le micro. Vérifiez son autorisation, puis réessayez.';
  }
});

function makeDictation() {
  if (!words.length) {
    wordInput.setCustomValidity('Ajoutez au moins un mot pour créer une dictée.');
    wordInput.reportValidity();
    wordInput.addEventListener('input', () => wordInput.setCustomValidity(''), { once: true });
    wordInput.focus();
    return;
  }
  const tense = tenseSelect.value;
  const ageGroup = document.querySelector('#age-select').value;
  const sentences = createStory(words, tense, ageGroup);
  dictationText.replaceChildren();
  sentences.forEach((sentence, index) => {
    const paragraph = document.createElement('span');
    paragraph.className = 'dictation-sentence';
    paragraph.textContent = sentence;
    dictationText.append(paragraph, document.createTextNode(index < sentences.length - 1 ? ' ' : ''));
  });
  document.querySelector('#dictation-tense').textContent = tenseLabels[tense];
  document.querySelector('#dictation-age').textContent = ageProfiles[ageGroup].label;
  document.querySelector('#dictation-sentence-count').textContent = `${sentences.length} phrase${sentences.length > 1 ? 's' : ''}`;
  emptyState.hidden = true;
  dictationContent.hidden = false;
}

document.querySelector('#generate-button').addEventListener('click', makeDictation);
document.querySelector('#regenerate-button').addEventListener('click', makeDictation);

renderWords();

const themeToggle = document.querySelector('#theme-toggle');
const themeLabel = document.querySelector('#theme-label');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem('dictation-theme');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const lightMode = theme === 'light';
  themeLabel.textContent = lightMode ? 'Mode sombre' : 'Mode clair';
  themeToggle.setAttribute('aria-label', `Passer au mode ${lightMode ? 'sombre' : 'clair'}`);
  themeToggle.title = `Passer au mode ${lightMode ? 'sombre' : 'clair'}`;
  themeMeta.content = lightMode ? '#f4f3f8' : '#111217';
}

setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('dictation-theme', nextTheme);
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(error => {
      console.error('Impossible de démarrer le mode hors connexion :', error);
    });
  });
}


