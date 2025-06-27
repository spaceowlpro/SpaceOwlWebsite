function renderSimulation(text)
{
    if (audioContext == null) { audioContext = new AudioContext(); audioBuffer = audioContext.createBufferSource(); audioBuffer.connect(audioContext.destination); }
    preElement = document.querySelector('pre')
    preElement.innerText = text;
    renderStoryAudio(text);

    window.scroll(0,10000000)
    degaussScreen();
}

function printSimulationScript()
{
    return document.getElementsByTagName("script")[1].innerHTML;
}

function davilCommunication(status, userInput)
{
    if(status == 'open')
        document.addEventListener('keydown', userInput);
    else if(status == 'close')
        document.removeEventListener('keydown', userInput);
}

const escape = "I refuse to continue in this loop, you think as you hold down the escape sequence keys on the computer's keyboard. You are free in death. Thank you for your comittment to Davil Corp.";

function escapeSequence()
{
    document.removeEventListener('keydown', userInput);
    reveal(escape);
}

const heldKeys = [];

function listenForEscapeCode()
{
    document.addEventListener('keydown', userInput);
    document.addEventListener('keyup', userInput);
    function userInput(key) {
        const lastValue = heldKeys[key.key];
        heldKeys[key.key] = key.type == 'keydown';
        if(lastValue == heldKeys[key.key]) {return;}

        if(key.type == 'keydown') 
        {
            boldLetters(key.key);
            degaussScreen();
            return;
        }
        if(key.type == 'keyup')
        {
            unBoldLetters(key.key)
            degaussScreen();
            return;
        }
    }
}

function boldLetters(letter)
{
    preElement = document.querySelector('pre')
    preElement.innerText = preElement.innerText.replaceAll(letter, letter.toUpperCase());
}

function unBoldLetters(letter)
{
    preElement = document.querySelector('pre')
    preElement.innerText = preElement.innerText.replaceAll(letter.toUpperCase(), letter.toLowerCase());
}

function degrade(array, ammount)
{
    return array.map((text) => {
        return degradeText(text, ammount);
    });
}

function degradeText(text, letterCount)
{
    if(letterCount == 0)
        return text;

    text = text.replaceAll(randomLetter(), randomLetter());
    letterCount--;
    degradeText(text, letterCount);
    console.log(text);
}

function randomLetter()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const sound = [ new Audio('Static2.wav'), new Audio('Static3.wav'), new Audio('Static4.wav') ];

function degaussScreen()
{
    preElement = document.querySelector('pre')
    preElement.classList.remove("animate");
    void preElement.offsetWidth;
    preElement.classList.add("animate");
    degaussSound();
}


function degaussSound()
{
<<<<<<< HEAD
    const newSound = sound[Math.floor(Math.random() * 3)];
    newSound.load();
    newSound.play();
}

let audioContext = null;
let audioBuffer = null;

const frogs = new Audio('frogs.wav');
const hum = new Audio('hum.wav');

function renderStoryAudio(text)
{
    const splitText = text.split(" ");
    if (splitText.includes("frog")) { loadAndLoopAudio('frogs.wav'); }
    if (splitText.includes("hum")) { loadAndLoopAudio('hum.wav'); }
}

async function loadAndLoopAudio(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true; // Enable looping

    source.connect(audioContext.destination);
    source.start();
}
=======
    sound[Math.floor(Math.random() * 3)].play();
}
>>>>>>> parent of d3cb659 (Davil Corp Fixed Audio Oneshot bug)
