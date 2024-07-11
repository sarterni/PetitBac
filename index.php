<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css?v=<?php echo filemtime('css/style.css'); ?>">
    <title>Document</title>
</head>

<body>
    <h1 class="title">Le jeu du petit bac</h1>
    <p>Anfin de simplifier la vérification lors du remplissage seuls les <span class="bold">minucules et accents</span>
        sont autorisés dans les inputs. <br><br> Cependant <span class="bold">MAJUSCULE obligatoire</span> pour la
        Première
        lettre de <br><br> <span class="bold">Pays Capitale</span></p>

    <p>La lettre choisie est : <span id="chosen-letter"></span> </p>

    <form id="myForm" onsubmit="checkWord(event)">

        <div class="input-container">
            <div class="row1">
                <div class="input-group">
                    <label for="country">Pays</label>
                    <input type="text" name="country" id="country" disabled>
                </div>
                <div class="input-group">
                    <label for="city">Capitale</label>
                    <input type="text" name="city" id="city" disabled>
                </div>
                <div class="input-group">
                    <label for="name">Prénom</label>
                    <input type="text" name="name" id="name" disabled>
                </div>
                <div class="input-group">
                    <label for="job">Métier</label>
                    <input type="text" name="job" id="job" disabled>
                </div>
                <div class="input-group">
                    <label for="drink">Boisson</label>
                    <input type="text" name="drink" id="drink" disabled>
                </div>
            </div>
            <div class="row2">
                <div class="input-group">
                    <label for="transport">Transport</label>
                    <input type="text" name="transport" id="transport" disabled>
                </div>
                <div class="input-group">
                    <label for="animal">Animal</label>
                    <input type="text" name="animal" id="animal" disabled>
                </div>
                <div class="input-group">
                    <label for="vegetable">Légume</label>
                    <input type="text" name="vegetable" id="vegetable" disabled>
                </div>
                <div class="input-group">
                    <label for="fruit">Fruit</label>
                    <input type="text" name="fruit" id="fruit" disabled>
                </div>
                <div class="input-group">
                    <label for="color">Couleur</label>
                    <input type="text" name="color" id="color" disabled>
                </div>
            </div>
            <div class="row3">
                <div class="input-group">
                    <label for="object">Objet</label>
                    <input type="text" name="object" id="object" disabled>
                </div>
                <div class="input-group">
                    <label for="brand">Marque</label>
                    <input type="text" name="brand" id="brand" disabled>
                </div>
                <div class="input-group">
                    <label for="sport">Sport</label>
                    <input type="text" name="sport" id="sport" disabled>
                </div>
                <div class="input-group">
                    <label for="hobby">Loisir</label>
                    <input type="text" name="hobby" id="hobby" disabled>
                </div>
            </div>
        </div>

        </div>

        </div>
        <div id="submit-div" class="action-btn">
            <button id="submit-btn" disabled type="submit" onclick="checkWord()">Envoyer</button>
        </div>

        <div class="result-div">


            <p id="result-country"></p>
            <p id="result-city"></p>
            <p id="result-name"></p>
            <p id="result-job"></p>
            <p id="result-drink"></p>
            <p id="result-transport"></p>
            <p id="result-animal"></p>
            <p id="result-vegetable"></p>
            <p id="result-fruit"></p>
            <p id="result-color"></p>
            <p id="result-object"></p>
            <p id="result-brand"></p>
            <p id="result-sport"></p>
            <p id="result-hobby"></p>
        </div>
    </form>

    <div class="action-btn">

        <button id="start">Commencer</button>

        <button id="pause" disabled>Pause</button>

        <button id="resume" disabled>Reprendre</button>

        <button id="reset" disabled>Réinitialiser</button>

    </div>

    <div id="timer">05:00</div>
    <div class="progress-container">
        <div class="progress-bar" id="progress-bar"></div>
    </div>

    <script src="js/script.js?v=<?php echo filemtime('js/script.js'); ?>"></script>

</body>

</html>