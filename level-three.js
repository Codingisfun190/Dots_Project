/*
 * DOTS: Level Three
 *
 */

let score = 0

let ball = document.body.querySelectorAll('.js-ball')

// let smallBall = document.body.querySelectorAll('.js-ball')

// let bigBall = document.body.querySelectorAll('.js-ball')[1]

// let mediumBall = document.body.querySelectorAll('.js-ball')[2]

let scoreDisplay = document.body.querySelector('.js-score')

let levelWinner = document.body.querySelector('.level-winner')

// const elements = document.body.querySelectorAll('.js-ball')

for (let i = 0; i < ball.length; i++) {
  ball[i].addEventListener('click', () => {
    // console.log(ball[i].getAttribute('data-increment'))
    if (score < 100) {
      score += parseInt(ball[i].getAttribute('data-increment'))
    }
    scoreDisplay.innerText = score
    if (score >= 100) {
      levelWinner.style.opacity = 1
    }
  })
}
