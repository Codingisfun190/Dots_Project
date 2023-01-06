/*
 * DOTS: Level One
 *
 */
let score = 0

let ball = document.body.querySelector('.js-ball')

let scoreDisplay = document.body.querySelector('.js-score')

let levelWinner = document.body.querySelector('.level-winner')

// for (let i = 0; i < 1; i++) {
ball.addEventListener('click', () => {
  if (score < 100) {
    score += 10
  }
  scoreDisplay.innerText = score
  if (score >= 100) {
    levelWinner.style.opacity = 1
  }
})
// }
