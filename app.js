const carousel = document.getElementsByClassName('carousel-item')

const nextBtn=document.getElementById("carousel-button-next")
const prevBtn=document.getElementById("carousel-button-prev")
let slidePosition=0
let totalSlides=carousel.length

const removeSlide=()=>{

  for(let slide of carousel){
    console.log(slide)
    slide.classList.remove('carousel-item-visible')
    slide.classList.add('carousel-item-hidden')
  }
}

const nextSlide=()=>{
removeSlide()
 if(slidePosition===totalSlides-1){
  slidePosition=0
 }else{ 
 slidePosition++
}
carousel[slidePosition].classList.add('carousel-item-visible')

}

const prevSlide=()=>{
  removeSlide()
  console.log(slidePosition)
  if(slidePosition===0){
    slidePosition=totalSlides-1
  }else{ slidePosition--}
 
  
  console.log(slidePosition)
  carousel[slidePosition].classList.add('carousel-item-visible')
 }

nextBtn.addEventListener('click',nextSlide)
prevBtn.addEventListener('click',prevSlide)

