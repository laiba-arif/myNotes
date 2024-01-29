var wrapper = document.querySelector(".wrapper");
var button = document .querySelector(".btn");
var notes = document.querySelectorAll(".input-box");

function showNote(){
    wrapper.innerHTML = localStorage.getItem("notes");
}
showNote();

function updateStorage(){
    localStorage.setItem("notes" , wrapper.innerHTML);
}

button.addEventListener("click" , ()=>{
    let inputBox= document.createElement("p");
    let img= document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    wrapper.appendChild(inputBox).appendChild(img);
   
 
})

wrapper.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
       
        updateStorage();

    }
   else if(e.target.tagName==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown" , event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
