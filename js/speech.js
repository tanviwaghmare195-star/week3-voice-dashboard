const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const status = document.getElementById("status");

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {

        status.innerHTML = "🎤 Listening...";
        recognition.start();

    });

    recognition.onresult = function (event) {

        const transcript = event.results[0][0].transcript;

        searchInput.value = transcript;
        status.innerHTML = "You said: " + transcript;

        searchShows();

    };

    recognition.onerror = function () {

        status.innerHTML = "Voice recognition error.";

    };

    recognition.onend = function () {

        recognition.stop();

    };

} else {

    voiceBtn.style.display = "none";

}