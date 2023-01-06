/*
 * DOTS: Level Two
 *
 */

let score = 0

let balls = document.body.querySelectorAll('.js-ball')

let scoreDisplay = document.body.querySelector('.js-score')

let levelWinner = document.body.querySelector('.level-winner')

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener('click', () => {
    if (score < 100) {
      score += 10
      console.log(score)
    }
    scoreDisplay.innerText = score
    if (score >= 100) {
      levelWinner.style.opacity = 1
    }
  })
}
