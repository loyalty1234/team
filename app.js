// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Obichukwu',
    job: 'Full-Stack developer',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: "He is our top engineering team, helping develop softwares for both client and and server-side.",
  },
  {
    id: 2,
    name: 'Frank Arimoro',
    job: 'Front-End web developer',
    img: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    text: 'Our main man when it comes to developing dynamic web pages and responsive design.',
  },
  {
    id: 3,
    name: 'Caleb Kolawole',
    job: 'Full-Stack Developer',
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    text: 'He is among the lead in our System and Software Engineering team.',
  },
  {
    id: 4,
    name: 'Solomon Kolawole',
    job: 'The boss',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text: 'He is the main man, helping in the development team and also generating problem solving ideas increasing productivity.',
  },
  {
    id: 5,
    name: 'Idris Justice',
    job: 'Backend developer',
    img: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=',
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
    img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
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
