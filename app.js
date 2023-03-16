// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Obichukwu',
    job: 'Full-Stack developer',
    img: 'old.jpg',
    text: "He is our top engineering team, helping develop softwares for both client and and server-side.",
  },
  {
    id: 2,
    name: 'Frank Arimoro',
    job: 'Front-End web developer',
    img: 'frank.jpg',
    text: 'Our main man when it comes to developing dynamic web pages and responsive design.',
  },
  {
    id: 3,
    name: 'Caleb Kolawole',
    job: 'Full-Stack Developer',
    img: 'obi.jpg',
    text: 'He is among the lead in our System and Software Engineering team.',
  },
  {
    id: 4,
    name: 'Solomon Kolawole',
    job: 'The boss',
    img: 'loy.jpg',
    text: 'He is the main man, helping in the development team and also generating problem solving ideas increasing productivity.',
  },
  {
    id: 5,
    name: 'Idris Justice',
    job: 'Backend developer',
    img: 'justice.jpg',
    text: 'He is the head of our back-end team, developing fast and dynamic serverside application',
  },
  {
    id: 5,
    name: 'Loyalty E',
    job: 'Full-Stack developer',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Helps in anywhere possible.',
  },
  {
    id: 5,
    name: 'Golden',
    job: 'Front-end developer/graphic designer',
    img: 'young.jpg',
    text: 'Helps in Creating dynamic UI/UX designs and also help in our front-end team',
  },
];

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const suprise = document.querySelector('.random-btn')

let mainItem = 3

window.addEventListener('DOMContentLoaded', function(){
  showPerson()
})

function showPerson(){
  const item = reviews[mainItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function(){
  mainItem++
  if(mainItem > reviews.length - 1){
    mainItem = 0
  }
  showPerson(mainItem)
})

prevBtn.addEventListener('click', function(){
  mainItem--
  if(mainItem < 0){
    mainItem = reviews.length - 1
  }
  showPerson(mainItem)
})