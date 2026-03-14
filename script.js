document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})
const toggle = document.getElementById("menuToggle")
const nav = document.getElementById("navLinks")

toggle.addEventListener("click", () => {

nav.classList.toggle("active")

})
function revealSections(){

const reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight
const elementTop = reveals[i].getBoundingClientRect().top
const visible = 100

if(elementTop < windowHeight - visible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", revealSections)


const form = document.getElementById("contactForm")
const message = document.getElementById("formMessage")

form.addEventListener("submit", function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const text = document.getElementById("message").value

if(name && email && text){

message.style.color="lightgreen"
message.innerText="Thank you! Your message has been submitted."

form.reset()

}else{

message.style.color="red"
message.innerText="Please fill all fields."

}

})
const articles = [

{
title:"Cybersecurity Workforce Demand",
text:"Demand for digital risk professionals is rising globally as organizations strengthen cyber resilience."
},

{
title:"AI Risk Management",
text:"Companies are adopting new governance models to manage risks associated with AI systems."
},

{
title:"Critical Infrastructure Security",
text:"Governments are prioritizing digital resilience for energy, finance and healthcare sectors."
}

]

const container = document.getElementById("newsContainer")

articles.forEach(article => {

const card = document.createElement("div")

card.classList.add("news-card")

card.innerHTML = `
<h3>${article.title}</h3>
<p>${article.text}</p>
`

container.appendChild(card)

})
