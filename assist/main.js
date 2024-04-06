const select = document.querySelectorAll('.number')
const container = document.querySelector('main .container')

select.forEach(number => {
  number.addEventListener("click", (event) => {
    // remove class checked from all btns
    select.forEach(number => number.classList.remove('checked'))
    // add class checked to btn
    event.target.classList.add('checked')
  })
})

container.addEventListener('click', () => {
  let numbers = document.querySelector('.numbers')
  let check = document.querySelector('.checked')
  // check if ther is no checked btn
  if (check === null) {
    numbers.classList.add('error')
    return null
  }
  numbers.classList.remove('error')
  let cube = document.querySelector('.cube')
  cube.classList.add("animation")
  let number = Math.floor(Math.random() * 6) + 1;
  setTimeout(() => {
    cube.className = 'cube';
    cube.classList.add(`face-${number}`)
    updateScore(number, check.innerHTML)
  }, 1500)
})

function updateScore(dice, user) {
  let score = document.getElementById('scoreNumber')
  let newScore = parseInt(score.innerHTML)
  if (dice == user) {
    newScore += dice
  } else {
    newScore -= 2
  }
  score.innerHTML = newScore
}

function reset() {
  let score = document.getElementById('scoreNumber')
  score.innerHTML = "0"
}

function showRule() {
  let rules = document.querySelector('.rules')
  rules.classList.toggle('show')
  rules.scrollIntoView()
}