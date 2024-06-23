document.getElementById('start').addEventListener('click', function () {
    var duration = 5 * 60; // 5 minutes en secondes
    var display = document.getElementById('timer');
    startTimer(duration, display);
});

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // calculer le nombre de secondes passées depuis le début
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // convertir ce temps en minutes et secondes
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // afficher le résultat
        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // ajouter une seconde pour que le compteur commence à la durée totale
            start = Date.now() + 1000;
        }
    };
    // mettre à jour le chronomètre chaque seconde
    timer();
    var timerInterval = setInterval(timer, 1000);

    // Arrêter le chronomètre après 5 minutes
    setTimeout(function () {
        clearInterval(timerInterval);
        display.textContent = "00:00";
    }, duration * 1000);
    
}

// Exemple de mise à jour de la barre de progression
// Supposons que vous avez une fonction de mise à jour du timer qui est appelée chaque seconde

function updateProgressBar(timeLeft, totalTime) {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (timeLeft / totalTime) * 100;
    progressBar.style.width = percentage + '%';
    timer();
}

// Vous devrez appeler cette fonction dans votre logique de timer,
// en passant le temps restant et le temps total comme argumentscc

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timerInterval);
    display.textContent = "00:00";
});