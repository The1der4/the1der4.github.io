const textElement = document.getElementById('namescprt');

// Array of text lines
const textLines = [
    'World don\'t stop just because I\'m in a bad mood.',
    'You don\'t know what love is until you holding onto something that you can\'t lose.',
    'Perfect person don\'t exist, so don\'t pretend to be one.',
    'Anyone can take your life, but not what you believed in.',
    'Don\'t take opinions from people, that won\'t listen to yours.',
    'If money is where you find happiness, you are always poor.',
    'If you don\'t like the job you have, then what do you do it for.',
    'The real you is not defined by the size of your office.',
    'The real you is who you are when nobody watching.',
    'Mistake can make you grow, but that doesn\'t means you\'re friends.',
    'Who you are is up to you, don\'t leave it up to mistake.',
    'Not about what people think, it\'s how you feel inside.',
    'Think twice before yor\'re bitting on the hand.',
    'Think your own throught, don\'t let them decide you.'
];

let currentIndex = 0;

function displayText() {
    textElement.textContent = textLines[currentIndex];
    fadeInText();
    setTimeout(fadeOutText, 3000);
    setTimeout(changeText, 3500);
}

function fadeInText() {
    textElement.style.opacity = '1';
}

function fadeOutText() {
    textElement.style.opacity = '0';
}

function changeText() {
    currentIndex = (currentIndex + 1) % textLines.length;
    displayText();
}

displayText();