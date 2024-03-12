let speech=new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector("select")


window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    // it will speak by default in 0 index

    speech.voice=voices[4]

    // this will display the list of voices available in the device
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)))
    
}

voiceSelect.addEventListener("change",() =>{
    speech.voice=voices[voiceSelect.value]
})
const play=document.querySelector("button")
 play.addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    console.log(speech.text)
    const playAudio=window.speechSynthesis.speak(speech)
  
})