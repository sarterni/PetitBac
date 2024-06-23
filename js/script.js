var timerInterval;

document.getElementById('start').addEventListener('click', function () {
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