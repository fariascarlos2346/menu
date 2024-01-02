const navBar = document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')

const myArray = ['Rodolfo','Lusia','Carlos']

allLi.forEach( (li, index) =>{
   li.addEventListener('click', e => {
      navBar.querySelector(".active-list").classList.remove("active-list")
      li.classList.add("active-list")

      const indicator = document.querySelector(".indicator")
      indicator.style.transform = `translateX(calc(${index * 90}px))`
   }) 

})