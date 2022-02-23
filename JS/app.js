// Responsive of the page

window.addEventListener('load',()=>{
    if ( screen.orientation.type === 'portrait-primary' || screen.orientation.type === 'portrait-secondary'){
        console.log("a");
    }
    document.querySelector('.container').style.height = document.querySelector('.container').clientWidth * 2.114 + "px"
    document.querySelector('html').style.fontSize = document.querySelector('.container').clientWidth /100 + "px"
})
window.addEventListener('resize',()=>{
    document.querySelector('.container').style.height = document.querySelector('.container').clientWidth * 2.114 + "px"
    document.querySelector('html').style.fontSize = document.querySelector('.container').clientWidth /100 + "px"
})
window.addEventListener("orientationchange", ()=> {
    console.log("The orientation of the screen is: " + screen);
  });

// Slider events

const afterArrow = document.querySelector('.after')
const beforeArrow = document.querySelector('.before')
const slides = document.querySelectorAll('.slide')
const points = document.querySelectorAll('.point')
let count = 0
afterArrow.addEventListener('click',()=>{
    slides[count].classList.remove('active')
    points[count].classList.remove('active')
    if(count < slides.length - 1){
        count++
    }
    else{
        count = 0
    }
    points[count].classList.add('active')
    slides[count].classList.add('active')
})

beforeArrow.addEventListener('click',()=>{
    slides[count].classList.remove('active')
    points[count].classList.remove('active')
    if(count > 0){
        count--
    }
    else{
        count = slides.length - 1
    }
    slides[count].classList.add('active')
    points[count].classList.add('active')
})

points.forEach((point, i) => {
    point.addEventListener('click',()=>{
        slides[count].classList.remove('active')
        points[count].classList.remove('active')
        count = i
        slides[count].classList.add('active')
        points[count].classList.add('active')
    })
});
// burger menu events
const burgerMenu = document.querySelector('.burger-menu')
burgerMenu.addEventListener('click',()=>{
    document.querySelector('.nav-bar').classList.toggle('active')
    burgerMenu.classList.toggle('active')
})