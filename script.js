console.log("MüzikLab başladı");
const notes = [
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4"
];

const names = {
  C4: "C",
  D4: "D",
  E4: "E",
  F4: "F",
  G4: "G",
  A4: "A",
  B4: "B"
};

let currentNote = "";
let score = 0;

const synth = new Tone.Synth().toDestination();

document.getElementById("playBtn").onclick = async () => {

    await Tone.start();

    currentNote = notes[Math.floor(Math.random()*notes.length)];

    synth.triggerAttackRelease(currentNote,"1n");

    document.getElementById("result").innerHTML="Dinle ve tahmin et";
}

document.querySelectorAll("#noteButtons button").forEach(btn=>{

    btn.onclick=()=>{

        if(currentNote==="") return;

        if(btn.dataset.note===names[currentNote]){

            score++;

            document.getElementById("result").innerHTML="✅ Doğru";

        }else{

            document.getElementById("result").innerHTML="❌ Doğru cevap : "+currentNote;

        }

        document.getElementById("score").innerHTML=score;

    }

});
