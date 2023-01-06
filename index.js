let addtodo= document.getElementById("addtask")
let input= document.getElementById("input")
let list= document.getElementById("todo")
let add=document.getElementById("text")
let cont=document.getElementById("contain")
let edit= document.getElementById("edit")
let del = document.getElementById("delete")
let act= document.getElementById("actions")
addtodo.addEventListener("click", ()=>{
    let para = document.createElement("p") 
    para.classList.add("todo")
    para.innerText=input.value +edit
list.appendChild(para)
para.addEventListener("click", ()=>{
    para.style.textDecoration="line-through"
})
para.addEventListener("click", toggleDone)
para.addEventListener("dblclick", editItem)
para.addEventListener("dblclick", ()=>{
    list.removeChild(para)
})
edit.addEventListener("click",()=>{
     para.attributes="contenteditable"
} )

})