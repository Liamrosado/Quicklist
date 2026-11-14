
const input = document.getElementById("item")
const list = document.getElementById("cadastrados")
const lixeira = document.getElementById("remover")
const form = document.querySelector("form")
const remove = document.getElementById("enviar")




input.addEventListener("input", () => {
     console.log(input.value)
})

form.onsubmit = (event) => {
  event.preventDefault()
  inputItem()

  if(remove.value == "corrigir"){
      input.value = ""
  }
  
  

  
}




function inputItem(item, label, check, del ){
  item = document.createElement("div")
  label = document.createElement("label")
  check = document.createElement("input")
  del = document.createElement("input")

  label.textContent = input.value
  
  check.setAttribute("type", "checkbox")
  del.setAttribute("type", "image")
  del.src = "imgs/Frame.svg"


  item.append(check, label, del)
  item.classList.add("items", "button")


  
  list.append(item)
  
  if (input.value == "" ){
    list.removeChild(item)
    window.alert("Por favor tente novamente")
  }
}


