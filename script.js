function startCelebration() {
    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}

function createConfetti() {
    const confettiSymbols = ["❤️", "💕", "💖", "💗", "✨", "🎉", "🎊"];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML =
            confettiSymbols[
                Math.floor(Math.random() * confettiSymbols.length)
            ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
function blowCandle() {

    const flame = document.getElementById("flame");
    const wishMessage = document.getElementById("wishMessage");

    // Turn off the candle flame
    flame.classList.add("off");

    // Show the birthday message
    wishMessage.classList.add("show");

    // More confetti 🎉
    createConfetti();
}
// =========================
// ROMANTIC LOVE LETTER
// TYPEWRITER EFFECT
// =========================

const loveLetter = document.querySelector(".love-letter");
const loveLetterButton = document.querySelector("#loveLetterBtn");

const paragraphs = loveLetter.querySelectorAll("p");

loveLetterButton.addEventListener("click", function () {

    // Show the love letter
    loveLetter.classList.add("show");

    // Prevent the animation from restarting
    if (loveLetter.classList.contains("typing-started")) {
        return;
    }

    loveLetter.classList.add("typing-started");

    // Hide all paragraphs initially
    paragraphs.forEach((paragraph) => {
        paragraph.style.visibility = "hidden";
    });

    // Start typing paragraphs one by one
    let paragraphIndex = 0;

    function typeParagraph() {

        if (paragraphIndex >= paragraphs.length) {
            return;
        }

        const paragraph = paragraphs[paragraphIndex];

        // Save original text
        const text = paragraph.textContent.trim();

        // Empty paragraph
        paragraph.textContent = "";
        paragraph.style.visibility = "visible";

        let characterIndex = 0;

        function typeCharacter() {

            if (characterIndex < text.length) {
                paragraph.textContent += text.charAt(characterIndex);
                characterIndex++;

                setTimeout(typeCharacter, 35);
            } else {

                // Small romantic pause before next paragraph
                paragraphIndex++;

                setTimeout(typeParagraph, 700);
            }
        }

        typeCharacter();
    }

    // Start the first paragraph
    setTimeout(typeParagraph, 500);
});
// =========================
// BIRTHDAY COUNTDOWN
// =========================

function updateCountdown() {

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        8, // September
        10,
        0,
        0,
        0
    );

    // If this year's birthday has passed,
    // countdown to next year's birthday
    if (now >= birthday) {
        birthday = new Date(
            now.getFullYear() + 1,
            8,
            10,
            0,
            0,
            0
        );
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Update immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
// Background Music
const birthdayMusic = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
    if (birthdayMusic.paused) {
        birthdayMusic.play();
        musicBtn.textContent = "⏸️ Pause Music";
    } else {
        birthdayMusic.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});