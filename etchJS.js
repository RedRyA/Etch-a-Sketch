
// GLOBAL VARIABLES THAT I SHOULD PROBABLY CAPITALIZE
var container = document.querySelector(".container")
var rainbow = document.querySelector("#rainbow")
var clearScreen = document.querySelector(".clearScreen")
var shader=document.querySelector(".shader")
var slider = document.querySelector(".slider")
var squaresSelect= document.querySelectorAll(".squareSelects")
var colorChoices = document.querySelectorAll(".color-choice")
var glow=document.querySelectorAll(".glow")

var color="black"

// Creates a grid based slider input//
 function createGrid(size){
let totalSize=size*size

for (let i = 1; i<=totalSize; i++){
  const square=document.createElement('div')
container.style.gridTemplateColumns=`repeat(${size},1fr)`
container.style.gridTemplateRows=`repeat(${size},1fr)`


container.appendChild(square)

var glow=square.className=("glow")

square.addEventListener("mouseover",mouseOver)


}
 }
// Default size
 createGrid(16)

function pixelSizer(){
let gridPixels = container.querySelectorAll("div")
gridPixels.forEach (gridPixel => gridPixel.remove());
createGrid(slider.value)

}

// allows the coloring of the divs in the main container
function mouseOver() {
  switch (color){

  case 'rainbow':  
    this.style.backgroundColor=`hsla( ${Math.random()*360},100%, 70%)`;
  
  default:
  this.style.backgroundColor=color
  }
}
// changes color based on button clicked 
function changeColor(choice){

   color=choice 
   mouseOver()

}


// Clears main container
function clearAll(){
  var clearIt=document.querySelectorAll(".glow")
for(i in clearIt){
  console.log(clearIt[i])
  
  clearIt[i].style.backgroundColor="white"
}
}


 
slider.addEventListener("mouseup",pixelSizer)
















