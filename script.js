let text = document.getElementById("text")
let startBtn = document.getElementById("start-btn")
let stopBtn = document.getElementById("stop-btn")
let closeBtn = document.getElementById("close-btn")
let overlay = document.querySelector(".overlay")
let section = document.querySelector("section")
let wordCount = document.getElementById("word-count")
let time = document.getElementById("time")
let resultText = document.querySelector("p")
let wpm = document.getElementById("wpm")

let start = 0;
let end = 0;
let textLength = 0
startBtn.addEventListener("click",() => {
    getContent()
    start = Date.now()
    
})
stopBtn.addEventListener("click",stopTime)

closeBtn.addEventListener("click",() => {
    section.classList.remove("active")
    start = 0
    end = 0
} )
overlay.addEventListener("click",() =>{
    section.classList.remove("active")
    start = 0
    stop = 0
})


function stopTime(){
    end = Date.now()
    section.classList.add("active")
    if(start <= 0){
        resultText.innerText = `Please press "Begin"`
        return
    }
    textLength = text.value.split(" ").length
    wordCount.innerText = textLength
    let timeTaken = (end - start) / 1000
    let readingSpeed = textLength/(timeTaken/60)
    time.innerText = timeTaken.toFixed(2)
    wpm.innerText = readingSpeed.toFixed(2)
}
function getContent(){
    fetch("https://api.quotable.io/quotes/random?minLength=300&maxLength=500")
    .then(res => res.json()).then(result => {text.innerText = result[0].content});
}
