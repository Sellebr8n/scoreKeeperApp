const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const race2Display = document.querySelector('#itsOver');
const preserveBox = document.querySelector('#preserve');
const maxScore = document.querySelector('#maxScore')

const p1Btn = document.querySelector('#p1');
const p2Btn = document.querySelector('#p2');
const resetBtn = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

let winningScore = maxScore.value

maxScore.addEventListener('change', () => {
    winningScore = parseInt(maxScore.selectedIndex + 1)
    race2Display.innerText = winningScore

    // p1Score = 0
    // p2Score = 0
    // p1Display.innerText = 0
    // p2Display.innerText = 0
    
})

p1Btn.addEventListener('click', () => {
    if(!isGameOver) { 
        p1Score++;
        jump(p1Display)
        if (p1Score === parseInt(winningScore)){
            isGameOver = true
            gameOver(p1Display, p2Display)
        }
        p1Display.innerText = p1Score;
    } 

})

p2Btn.addEventListener('click', () => {
    if(!isGameOver) { 
        p2Score++;
        jump(p2Display)
        if (p2Score === parseInt(winningScore)){
            isGameOver = true
            gameOver(p2Display, p1Display)
        }
        p2Display.innerText = p2Score;
    } 
})

resetBtn.addEventListener('click', reset)

function reset() {

    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.innerText = 0
    p2Display.innerText = 0
    p1Btn.disabled = false
    p2Btn.disabled = false
    p1Display.classList.remove("winner", "loser")
    p2Display.classList.remove("winner","loser")
    p1Btn.classList.remove("disabled")
    p2Btn.classList.remove("disabled")
    winningScore = maxScore.value

    if(!preserveBox.checked){
        race2Display.innerText = 3
        maxScore.value = 3
        winningScore = 3
    }

}

function jump(el) {
    el.style.transform = "translateY(-10px)";
    el.classList.toggle("winner")
    el.style.transition = "all 0.2s ease-out"
    setTimeout(()=>{
        el.style.transform = "translateY(0px)"
        
        if(!isGameOver) {
            el.classList.toggle("winner")
        }
        
        el.style.transition = "all 0.1s ease-out"
    }, 300, el)
}

function gameOver(winner, loser) {
    winner.classList.add("winner");
    loser.classList.add("loser");
    p1Btn.disabled = true;
    p1Btn.classList.add("disabled")
    p2Btn.classList.add("disabled")
    p2Btn.disabled = true;
}