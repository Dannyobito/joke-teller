const button = document.getElementById('button');
const audioElement = document.getElementById('audio')
const apiKey = "abb06cd6e72745a79e085c30df3aa0a2"
// VoiceRSS Javascript SDK
const toggleButton = () => {
    button.disabled = !button.disabled;
}

const tellMe = (joke) => {
    VoiceRSS.speech({
        key: `${apiKey}`,
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

//Get Jokes from joke API
const getJokes = async () => {
    let joke = ''
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any'
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        data.setup ? 
            joke = `${data.setup} ... ${data.delivery}` 
            : joke = data.joke;
        tellMe(joke);
        toggleButton();
    } catch (error) {
        console.log('whoops',error);
    }
}
button.onclick = getJokes;
audioElement.onended = toggleButton;





























// const getSpeech = async () => {
//     try {
//         const response = await fetch(apiUrl);
//         result = response.url;
//         console.log(result);

//     } catch (error) {
//         console.error(error);
//     }
// }
// const tellJoke = () => {
//     audio.setAttribute('src', result )
//     audio.onloadedmetadata = () => {
//     audio.play();
// }
// }


// button.onclick = tellJoke;
// getSpeech()



