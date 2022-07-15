const textarea = document.querySelector("textarea"),
voiceList = document.querySelector("select")
speechBtn = document.querySelector("button");
let synth = SpeechSynthesis;
function voice() {
    for(let voice of synth.getVoices()){
        console.log(voice);
    }
}
synth.addEventListener("voiceschnaged",voices)
function  textToSpeech (text) {
    let utternance = new SpeechSynthesisUtterance(text) ;
    synth.speak(utternance);
}

speechBtn.addEventListener("click",e=>{
    e.preventDefault();
    if (textarea.value !=="") {
        textToSpeech(textarea.value);
    }
})