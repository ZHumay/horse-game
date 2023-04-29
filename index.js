const horse1=document.querySelector(".horse-1")
const horse2=document.querySelector(".horse-2")
const horse3=document.querySelector(".horse-3")
const startbtn=document.querySelector(".start")
const resetbtn=document.querySelector(".reset")

let moveHorse1IntervalId;
let moveHorse2IntervalId;
let moveHorse3IntervalId;

startbtn.addEventListener("click",startRace)

let horse1Position = 0;
let horse2Position = 0;
let horse3Position=0

function isRaceRunning() {
  return moveHorse1IntervalId || moveHorse2IntervalId || moveHorse3IntervalId;
}

function moveHorse1() {
  if (isRaceRunning){
    let randomDistance = Math.floor(Math.random() * 10) + 5;
    horse1Position += randomDistance;
    horse1.style.transform = `translateX(${horse1Position + "px"})`;
    if (horse1Position >= 900) {
      alert("Horse 1 has won the race!");
      horse1Position = 0;
      horse2Position = 0;
      horse3Position=0;
      horse1.style.transform = `translateX(${horse1Position + "px"})`;
      horse2.style.transform = `translateX(${horse2Position + "px"})`;
      horse3.style.transform = `translateX(${horse3Position + "px"})`;
      isRaceRunning=false;
    }
  }

}

function moveHorse2() {
  if (isRaceRunning){
    let randomDistance = Math.floor(Math.random() * 10) + 5;
    horse2Position += randomDistance;
    horse2.style.transform = `translateX(${horse2Position + "px"})`;
    if (horse2Position >= 900) {
      alert("Horse 2 has won the race!");
      horse1Position = 0;
      horse2Position = 0;
      horse3Position=0;
      horse1.style.transform = `translateX(${horse1Position + "px"})`;
      horse2.style.transform = `translateX(${horse2Position + "px"})`;
      horse3.style.transform = `translateX(${horse3Position + "px"})`;
      isRaceRunning=false;
    }
  }

}

function moveHorse3() {
  if (isRaceRunning){
    let randomDistance = Math.floor(Math.random() * 10) + 5;
    horse3Position += randomDistance;
    horse3.style.transform = `translateX(${horse3Position + "px"})`;
    if (horse3Position >= 900) {
      alert("Horse 3 has won the race!");
      horse1Position = 0;
      horse2Position = 0;
      horse3Position=0;
      horse1.style.transform = `translateX(${horse1Position + "px"})`;
      horse2.style.transform = `translateX(${horse2Position + "px"})`;
      horse3.style.transform = `translateX(${horse3Position + "px"})`;
      isRaceRunning=false;
    }
  }
}

function startRace(e) {
  isRaceRunning = true ;
  moveHorse1IntervalId = setInterval(moveHorse1, 100);
  moveHorse2IntervalId = setInterval(moveHorse2, 100);
  moveHorse3IntervalId = setInterval(moveHorse3,100);
}


resetbtn.addEventListener("click",reset)
function reset(e){
    isRaceRunning = false;
    horse1Position = 0;
    horse2Position = 0;
    horse3Position=0;
    horse1.style.transform = `translateX(${horse1Position})`;
    horse2.style.transform = `translateX(${horse2Position})`;
    horse3.style.transform = `translateX(${horse3Position})`;
}

  
