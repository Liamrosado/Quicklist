
const input = document.getElementById("item")
const list = document.getElementById("cadastrados")
const lixeira = document.getElementById("remover")
const form = document.querySelector("form")



input.addEventListener("input", () => {
     console.log(input.value)
})


form.onsubmit = (event) => {
    event.preventDefault()
    
    
    inputItem() 
}


function inputItem(){
  const item = document.createElement("div")
    item.textContent = input.value
    item.classList.add("items", "button") 
    
    list.append(item)
    console.log(list)
}


