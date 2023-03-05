document.getElementById('number1')
document.getElementById('number2')
document.getElementById('number3')
document.getElementById('number4')
document.getElementById('number5')
document.getElementById('number6')
document.getElementById('number7')
document.getElementById('number8')
document.getElementById('number9')

const homeEl = document.getElementById('home')
const aboutEl = document.getElementById('about')
const skillsEl = document.getElementById('skills')
const projectsEl = document.getElementById('projects')
const contactEl = document.getElementById('contact')
const footerEl = document.getElementById('footer')

let [
  counter1,
  counter2,
  counter3,
  counter4,
  counter5,
  counter6,
  counter7,
  counter8,
  counter9,
] = [0, 0, 0, 0, 0, 0, 0, 0, 0]

setInterval(() => {
  if (counter1 == 90) {
    clearInterval
  } else {
    counter1 += 1
    number1.innerHTML = `${counter1}%`
  }
}, 10)

setInterval(() => {
  if (counter2 == 75) {
    clearInterval
  } else {
    counter2 += 1
    number2.innerHTML = `${counter2}%`
  }
}, 10)

setInterval(() => {
  if (counter3 == 60) {
    clearInterval
  } else {
    counter3 += 1
    number3.innerHTML = `${counter3}%`
  }
}, 10)

setInterval(() => {
  if (counter4 == 70) {
    clearInterval
  } else {
    counter4 += 1
    number4.innerHTML = `${counter4}%`
  }
}, 10)

setInterval(() => {
  if (counter5 == 0) {
    clearInterval
  } else {
    counter5 += 1
    number5.innerHTML = `${counter5}%`
  }
}, 10)

setInterval(() => {
  if (counter6 == 80) {
    clearInterval
  } else {
    counter6 += 1
    number6.innerHTML = `${counter6}%`
  }
}, 10)

setInterval(() => {
  if (counter7 == 70) {
    clearInterval
  } else {
    counter7 += 1
    number7.innerHTML = `${counter7}%`
  }
}, 10)

setInterval(() => {
  if (counter8 == 0) {
    clearInterval
  } else {
    counter8 += 1
    number8.innerHTML = `${counter8}%`
  }
}, 10)

setInterval(() => {
  if (counter9 == 70) {
    clearInterval
  } else {
    counter9 += 1
    number9.innerHTML = `${counter9}%`
  }
}, 10)

function home() {
  homeEl.classList.remove('hide')
  aboutEl.classList.add('hide')
  skillsEl.classList.add('hide')
  projectsEl.classList.add('hide')
  contactEl.classList.add('hide')
  footerEl.classList.add('hide')
}
function about() {
  homeEl.classList.add('hide')
  aboutEl.classList.remove('hide')
  skillsEl.classList.add('hide')
  projectsEl.classList.add('hide')
  contactEl.classList.add('hide')
  footerEl.classList.add('hide')
}
function skills() {
  homeEl.classList.add('hide')
  aboutEl.classList.add('hide')
  skillsEl.classList.remove('hide')
  projectsEl.classList.add('hide')
  contactEl.classList.add('hide')
  footerEl.classList.add('hide')
}

function projects() {
  homeEl.classList.add('hide')
  aboutEl.classList.add('hide')
  skillsEl.classList.add('hide')
  projectsEl.classList.remove('hide')
  contactEl.classList.add('hide')
  footerEl.classList.add('hide')
}

function contact() {
  homeEl.classList.add('hide')
  aboutEl.classList.add('hide')
  skillsEl.classList.add('hide')
  projectsEl.classList.add('hide')
  contactEl.classList.remove('hide')
  footerEl.classList.remove('hide')
}
