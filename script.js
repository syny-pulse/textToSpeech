function speakText() {
    var text = document.getElementById("textToSpeak").value;
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    window.speechSynthesis.speak(speech);
};

function resizeTextArea() {
    var textarea = document. getElementById("textToSpeak");
    textarea.style.height = "auto";
    textarea.style.height = teaxtarea.scrollHeight + "px";
}