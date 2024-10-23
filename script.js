document.addEventListener("DOMContentLoaded", function() {
    let chapters = document.querySelectorAll('.text');
    let currentChapter = 0;

    function showNextChapter() {
        if (currentChapter > 0) {
            chapters[currentChapter - 1].style.opacity = 0;
            setTimeout(() => {
                chapters[currentChapter - 1].style.display = 'none';
            }, 1000);
        }

        if (currentChapter < chapters.length) {
            chapters[currentChapter].style.display = 'block';
            setTimeout(() => {
                chapters[currentChapter].style.opacity = 1;
            }, 100);
            currentChapter++;
            setTimeout(showNextChapter, 5000);  // Mostrar cada capítulo después de 5 segundos
        }
    }

    showNextChapter();
});
