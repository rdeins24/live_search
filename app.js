const allNames= document.getElementsByClassName('name')
const searchInput =document.getElementById('searchInput')

searchInput.addEventListener('keyup',(e)=>{
  let searchValue=e.target.value.toLowerCase()

for(let i=0;i<allNames.length;i++){
  let currentNames=allNames[i].textContent.toLowerCase()
  console.log(currentNames)

  if(currentNames.includes(searchValue)){
    allNames[i].style.display='block'
  }else{
    allNames[i].style.display='none'
  }
}



})
