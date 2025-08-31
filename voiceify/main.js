let speech;

const speak = () => {

  speech = document.getElementById("text").value.trim();
  if (!speech) {
    alert("Please type something to speak.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(speech);

  utterance.lang = "en-US"; 
  utterance.rate = 1;       
  utterance.pitch = 0;     
  utterance.volume = 1;    

  window.speechSynthesis.speak(utterance);
};