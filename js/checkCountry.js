// checkCountry.js
const countryList = ['Afghanistan', 'Albanie', 'Algérie', 'Andorre', 'Angola', 'Antigua-et-Barbuda', 'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Biélorussie', 'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodge', 'Cameroun', 'Canada', 'République centrafricaine', 'Tchad', 'Chili', 'Chine', 'Colombie', 'Comores', 'Congo', 'Costa Rica', 'Croatie', 'Cuba', 'Chypre', 'République tchèque', 'Danemark', 'Djibouti', 'Dominique', 'République dominicaine', 'Équateur', 'Égypte', 'Salvador', 'Guinée équatoriale', 'Érythrée', 'Estonie', 'Eswatini', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Allemagne', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 'Guinée-Bissau', 'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Islande', 'Inde', 'Indonésie', 'Iran', 'Irak', 'Irlande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kiribati', 'Corée du Nord', 'Corée du Sud', 'Koweït', 'Kirghizistan', 'Laos', 'Lettonie', 'Liban', 'Lesotho', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 'Madagascar', 'Malawi', 'Malaisie', 'Maldives', 'Mali', 'Malte', 'Îles Marshall', 'Mauritanie', 'Maurice', 'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Maroc', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 'Pays-Bas', 'Nouvelle-Zélande', 'Nicaragua', 'Niger', 'Nigeria', 'Norvège', 'Oman', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 'Russie', 'Rwanda', 'Saint-Kitts-et-Nevis', 'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 'Samoa', 'Saint-Marin', 'Sao Tomé-et-Principe', 'Arabie Saoudite', 'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Salomon', 'Somalie', 'Afrique du Sud', 'Soudan du Sud', 'Espagne', 'Sri Lanka', 'Soudan', 'Suriname', 'Suède', 'Suisse', 'Syrie', 'Tadjikistan', 'Tanzanie', 'Thaïlande', 'Timor-Leste', 'Togo', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turquie', 'Turkménistan', 'Tuvalu', 'Ouganda', 'Ukraine', 'Émirats arabes unis', 'Royaume-Uni', 'États-Unis', 'Uruguay', 'Ouzbékistan', 'Vanuatu', 'Vatican', 'Venezuela', 'Vietnam', 'Yémen', 'Zambie', 'Zimbabwe'];


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