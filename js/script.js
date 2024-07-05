var timerInterval;

document.getElementById('start').addEventListener('click', function () {
    const letter = generateRandomLetter();
    // Met à jour le contenu de #chosen-letter avec la lettre générée
    document.getElementById('chosen-letter').textContent = letter;
    this.disabled = true; // Désactiver le bouton "Start"
    var duration = 5 * 60; // 5 minutes en secondes
    var display = document.getElementById('timer');
    startTimer(duration, display);
});

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = "00:00";
    updateProgressBar(0, 1); // Reset la barre de progression
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = "05:00";
    document.getElementById('start').disabled = false; // Réactiver le bouton "Start"
    updateProgressBar(1, 1); // Reset la barre de progression
});

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // Calculer le nombre de secondes passées depuis le début
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // Convertir ce temps en minutes et secondes
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Afficher le résultat
        display.textContent = minutes + ":" + seconds;

        // Mettre à jour la barre de progression
        updateProgressBar(diff, duration);

        if (diff <= 0) {
            // Ajouter une seconde pour que le compteur commence à la durée totale
            clearInterval(timerInterval);
            display.textContent = "00:00";
            updateProgressBar(0, duration); // Assurez-vous que la barre est à 0% quand le timer est terminé
        }
    }

    // Mettre à jour le chronomètre chaque seconde
    timer();
    timerInterval = setInterval(timer, 1000);
}

function updateProgressBar(timeLeft, totalTime) {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (timeLeft / totalTime) * 100;
    progressBar.style.width = percentage + '%';
}

function generateRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUV';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}



// Vérification des mots

const wordsList = ['Afghanistan', 'Albanie', 'Algérie', 'Andorre', 'Angola', 'Antigua-et-Barbuda', 'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Biélorussie', 'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodge', 'Cameroun', 'Canada', 'République centrafricaine', 'Tchad', 'Chili', 'Chine', 'Colombie', 'Comores', 'Congo', 'Costa Rica', 'Croatie', 'Cuba', 'Chypre', 'République tchèque', 'Danemark', 'Djibouti', 'Dominique', 'République dominicaine', 'Équateur', 'Égypte', 'Salvador', 'Guinée équatoriale', 'Érythrée', 'Estonie', 'Eswatini', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Allemagne', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 'Guinée-Bissau', 'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Islande', 'Inde', 'Indonésie', 'Iran', 'Irak', 'Irlande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kiribati', 'Corée du Nord', 'Corée du Sud', 'Koweït', 'Kirghizistan', 'Laos', 'Lettonie', 'Liban', 'Lesotho', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 'Madagascar', 'Malawi', 'Malaisie', 'Maldives', 'Mali', 'Malte', 'Îles Marshall', 'Mauritanie', 'Maurice', 'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Maroc', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 'Pays-Bas', 'Nouvelle-Zélande', 'Nicaragua', 'Niger', 'Nigeria', 'Norvège', 'Oman', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 'Russie', 'Rwanda', 'Saint-Kitts-et-Nevis', 'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 'Samoa', 'Saint-Marin', 'Sao Tomé-et-Principe', 'Arabie Saoudite', 'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Salomon', 'Somalie', 'Afrique du Sud', 'Soudan du Sud', 'Espagne', 'Sri Lanka', 'Soudan', 'Suriname', 'Suède', 'Suisse', 'Syrie', 'Tadjikistan', 'Tanzanie', 'Thaïlande', 'Timor-Leste', 'Togo', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turquie', 'Turkménistan', 'Tuvalu', 'Ouganda', 'Ukraine', 'Émirats arabes unis', 'Royaume-Uni', 'États-Unis', 'Uruguay', 'Ouzbékistan', 'Vanuatu', 'Vatican', 'Venezuela', 'Vietnam', 'Yémen', 'Zambie', 'Zimbabwe'];

// Function to check if the word exists in the list
function checkWord(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get user input
    const userInput = document.getElementById('country').value;

    // Check if the word exists in the list
    if (wordsList.includes(userInput)) {
        document.getElementById('result').innerText = `The word '${userInput}' exists in the list.`;
    } else {
        document.getElementById('result').innerText = `The word '${userInput}' does not exist in the list.`;
    }
}