document.getElementById('addWord').addEventListener('click', function () {
    var subject = 'Demande Ajout Mot Petit Bac';
    var body = 'Bonjour,\n Merci de contribuer à l\'amélioration de ce jeu. \nVeuillez ajouter les mots ci-dessus dans les listes correspondantes.\n\n\ J\'aimerais ajouter les mots suivants :\n\nPays : \nCapitale : \nPrénom :  \nMétier : \nBoisson :\n\nVotre Pseudo:\n\n';
    window.location.href = 'mailto:contact@nicodigitalsstudio.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});



function refreshPage() {
    location.reload();
}

function resetForm() {
    document.getElementById("myForm").reset();
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.style.backgroundColor = '';
        input.style.color = '';
    }); {
        const resultDiv = document.querySelector('.result-div');
        resultDiv.innerHTML = '';
    }
}

function statusBtn() {
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('resume').disabled = false;
    document.getElementById('reset').disabled = false;
}



var timerInterval;

document.getElementById('start').addEventListener('click', function () {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.disabled = false;
    });
    // Assurez-vous d'appeler statusBtn() ici si nécessaire pour mettre à jour l'état des boutons
    statusBtn();
    const letter = generateRandomLetter();
    // Met à jour le contenu de #chosen-letter avec la lettre générée
    document.getElementById('chosen-letter').textContent = letter;
    var duration = 5 * 60; // 5 minutes en secondes
    var display = document.getElementById('timer');
    startTimer(duration, display);
});


document.getElementById('pause').addEventListener('click', function () {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.disabled = true;
    }
    );

    clearInterval(timerInterval);
});

document.getElementById('resume').addEventListener('click', function () {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.disabled = false;
    });

    var duration = parseInt(document.getElementById('timer').textContent.split(':')[0]) * 60 + parseInt(document.getElementById('timer').textContent.split(':')[1]);
    var display = document.getElementById('timer');
    startTimer(duration, display);

});

document.getElementById('reset').addEventListener('click', function () {
    resetForm();
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = "00:00";
    updateProgressBar(0, 1); // Reset la barre de progression
    refreshPage();
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

const countryList = ['Afghanistan', 'Albanie', 'Algérie', 'Andorre', 'Angola', 'Antigua-et-Barbuda', 'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Biélorussie', 'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodge', 'Cameroun', 'Canada', 'République centrafricaine', 'Tchad', 'Chili', 'Chine', 'Colombie', 'Comores', 'Congo', 'Costa Rica', 'Croatie', 'Cuba', 'Chypre', 'République tchèque', 'Danemark', 'Djibouti', 'Dominique', 'République dominicaine', 'Équateur', 'Égypte', 'Salvador', 'Guinée équatoriale', 'Érythrée', 'Estonie', 'Eswatini', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Allemagne', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 'Guinée-Bissau', 'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Islande', 'Inde', 'Indonésie', 'Iran', 'Irak', 'Irlande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kiribati', 'Corée du Nord', 'Corée du Sud', 'Koweït', 'Kirghizistan', 'Laos', 'Lettonie', 'Liban', 'Lesotho', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 'Madagascar', 'Malawi', 'Malaisie', 'Maldives', 'Mali', 'Malte', 'Îles Marshall', 'Mauritanie', 'Maurice', 'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Maroc', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 'Pays-Bas', 'Nouvelle-Zélande', 'Nicaragua', 'Niger', 'Nigeria', 'Norvège', 'Oman', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 'Russie', 'Rwanda', 'Saint-Kitts-et-Nevis', 'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 'Samoa', 'Saint-Marin', 'Sao Tomé-et-Principe', 'Arabie Saoudite', 'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Salomon', 'Somalie', 'Afrique du Sud', 'Soudan du Sud', 'Espagne', 'Sri Lanka', 'Soudan', 'Suriname', 'Suède', 'Suisse', 'Syrie', 'Tadjikistan', 'Tanzanie', 'Thaïlande', 'Timor-Leste', 'Togo', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turquie', 'Turkménistan', 'Tuvalu', 'Ouganda', 'Ukraine', 'Émirats arabes unis', 'Royaume-Uni', 'États-Unis', 'Uruguay', 'Ouzbékistan', 'Vanuatu', 'Vatican', 'Venezuela', 'Vietnam', 'Yémen', 'Zambie', 'Zimbabwe'];


const cityList = ['Paris', 'Londres', 'Berlin', 'Madrid', 'Rome', 'Lisbonne', 'Bruxelles', 'Amsterdam', 'Oslo', 'Stockholm', 'Copenhague', 'Varsovie', 'Budapest', 'Prague', 'Vienne', 'Athènes', 'Sofia', 'Bucarest', 'Ankara', 'Moscou', 'Kiev', 'Tallinn', 'Riga', 'Vilnius', 'Dublin', 'Bratislava', 'Ljubljana', 'Zagreb', 'Sarajevo', 'Podgorica', 'Tirana', 'Skopje', 'Belgrade', 'Pristina', 'Chisinau'];

const jobList = ['pompier', 'policier', ' développeur', ' designer', ' architecte', ' ingénieur', ' consultant', ' manager', ' analyste', ' administrateur', ' technicien', ' formateur', ' expert', ' spécialiste', ' directeur', ' chef de projet', ' responsable', ' chargé de mission', ' assistant', ' conseiller', ' auditeur', ' chef de produit', ' chef de service', ' chef de département', ' chef de division', ' chef de bureau', ' chef de groupe', ' chef de section', ' chef de cellule', ' chef de chantier'];

const drinkList = ['eau', 'café', 'thé', 'jus', 'soda', 'bière', 'vin', 'whisky', 'vodka', 'rhum', 'gin', 'tequila', 'champagne', 'cognac ', 'liqueur', 'cocktail', 'smoothie', 'lait',];

// Function to check if the word exists in the list

document.getElementById('submit-btn').addEventListener('click', checkWord);

function checkWord(event) {
    checkCountry(event);
    checkCity(event);
    checkJob(event);
    checkDrink(event);
}
function checkCountry(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get user input
    const userInput = document.getElementById('country').value;
    const pattern = /^[A-ZÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ][a-zàâäéèêëïîôöùûüç]*$/;


    if (!pattern.test(userInput)) {
        document.getElementById('country').style.backgroundColor = 'red';
        document.getElementById('result-country').innerText = `MAJUSCULE obligatoire pour la Première lettre de Pays Capitale`;
    }
    // Check if the word exists in the country list
    if (countryList.includes(userInput)) {
        document.getElementById('result-country').innerText = `The word '${userInput}' exists in the country list.`;
        document.getElementById('country').style.backgroundColor = 'green';
        document.getElementById('country').style.color = 'white';
    } else {
        document.getElementById('result-country').innerText = `The word '${userInput}' does not exist in the country list.`;

        document.getElementById('country').style.backgroundColor = 'red';
        document.getElementById('country').style.color = 'white';
    }
}




function checkCity(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get user input
    const userInput = document.getElementById('city').value;
    const pattern = /^[A-ZÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ][a-zàâäéèêëïîôöùûüç]*$/;

    if (!pattern.test(userInput)) {
        document.getElementById('city').style.backgroundColor = 'red';
        document.getElementById('result-city').innerText = `MAJUSCULE obligatoire pour la Première lettre de Ville`;
    }
    // Check if the word exists in the city list
    if (cityList.includes(userInput)) {
        document.getElementById('result-city').innerText = `The word '${userInput}' exists in the city list.`;
        document.getElementById('city').style.backgroundColor = 'green';
        document.getElementById('city').style.color = 'white';
    } else {
        document.getElementById('result-city').innerText = `The word '${userInput}' does not exist in the city list.`;
        document.getElementById('city').style.backgroundColor = 'red';
        document.getElementById('city').style.color = 'white';
    }
}

function checkJob(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get user input
    const userInput = document.getElementById('job').value;
    const pattern = /^[A-ZÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ][a-zàâäéèêëïîôöùûüç]*$/;

    if (!pattern.test(userInput)) {
        document.getElementById('job').style.backgroundColor = 'red';
        document.getElementById('result-job').innerText = `MAJUSCULE obligatoire pour la Première lettre de Métier`;
    }
    // Check if the word exists in the job list
    if (jobList.includes(userInput)) {
        document.getElementById('result-job').innerText = `The word '${userInput}' exists in the job list.`;
        document.getElementById('job').style.backgroundColor = 'green';
        document.getElementById('job').style.color = 'white';
    } else {
        document.getElementById('result-job').innerText = `The word '${userInput}' does not exist in the job list.`;
        document.getElementById('job').style.backgroundColor = 'red';
        document.getElementById('job').style.color = 'white';
    }
}


function checkDrink(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get user input
    const userInput = document.getElementById('drink').value;
    const pattern = /^[A-ZÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ][a-zàâäéèêëïîôöùûüç]*$/;

    if (!pattern.test(userInput)) {
        document.getElementById('drink').style.backgroundColor = 'red';
        document.getElementById('result-drink').innerText = `MAJUSCULE obligatoire pour la Première lettre de Boisson`;
    }
    // Check if the word exists in the drink list
    if (drinkList.includes(userInput)) {
        document.getElementById('result-drink').innerText = `The word '${userInput}' exists in the drink list.`;
        document.getElementById('drink').style.backgroundColor = 'green';
        document.getElementById('drink').style.color = 'white';
    } else {
        document.getElementById('result-drink').innerText = `The word '${userInput}' does not exist in the drink list.`;
        document.getElementById('drink').style.backgroundColor = 'red';
        document.getElementById('drink').style.color = 'white';
    }
}
