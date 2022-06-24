var contain=document.querySelector(".container")
var rainbow=document.querySelector(".rainbow")
var clearScreen=document.querySelector(".clearScreen")

for(let j=0; j<=18;j++){
    for (let i = 0; i<=25;i++){

        const newDiv= document.createElement("div");
        newDiv.innerHTML=("0")
        newDiv.setAttribute("class","change")
        
        var currentDiv=document.getElementById("div");
        var addToContainer=document.body.insertBefore(newDiv,currentDiv);
       
    
   
        newDiv.style.color="rgb(255,255,255)"
        newDiv.style.display="inline-block"
        

       contain.append(newDiv)

       // Don't delete this!! It selects all the divs
    newDiv.addEventListener("mouseover", mouseOver);
} 
  }  
    
     clearScreen.addEventListener("click",clearAll)
   // rainbow=addEventListener('click',rainbowClick)
   
  let erase=document.querySelector(".eraser")
 erase=addEventListener("click",eraseMe)
 function eraseMe(){
console.log("It works!")

 }

    function mouseOver(){
      var colorPick=Math.floor(Math.random()*360)
        document.getElementsByClassName("change")
        this.style.backgroundColor ="hsla(" + colorPick.toString()+ ",100%, 70%, 1)";
        this.style.color="rgb(255,0,0,0)"
            
    }

    function clearAll(){
      let paintItBlack=document.querySelectorAll(".change")
      for(i in paintItBlack){
        paintItBlack[i].style.backgroundColor="white"
      }
    }
    
   function rainbowClick (){
    const colorPick=Math.floor(Math.random()*360)
   let change=document.getElementsByClassName("change")
   for (i in change){
    console.log(change)
  change.style.backgroundColor="hsla(" + colorPick.toString()+ ",100%, 70%, 1)";
// console.log(colorPick.toString())
    
 
   }}
   

    




     
    
    
    
       