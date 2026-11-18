
const input = document.getElementById("novo")
const list = document.querySelector("#cadastrados")
const form = document.querySelector("form")
const remove = document.getElementById("enviar")
const delinput = list.querySelectorAll("#remover")
const cadastrado = list.querySelectorAll("#item")
const showAlert = document.getElementById("removido")
const Delete = showAlert.querySelector("#Delete")
const checkbox = list.querySelectorAll("input[type=checkbox]")
const label = list.querySelectorAll("label")

checkbox[0].checked = !checkbox[0].checked
checkbox[1].checked = !checkbox[1].checked
checkbox[2].checked = !checkbox[2].checked
checkbox[3].checked = !checkbox[3].checked

console.log(label,checkbox)


input.addEventListener("input", () => {
  console.log(input.value)
})

form.onsubmit = (event) => {
  event.preventDefault()
  inputItem()
  Removeitem()
  
  if(remove.value == "corrigir"){
    input.value = ""
  }
  
  
  Delete.onclick = () =>{
    showAlert.classList.add("desativado")
  }
  
}

function Checked(){
  
  checkbox[0].addEventListener("click" , (e) =>{
    if(e.target.checked == true){
      label[0].classList.add("checked")
    }else {
      label[0].classList.remove("checked")
    }
  })
  checkbox[1].addEventListener("click" , (e) =>{
    if(e.target.checked == true){
      label[1].classList.add("checked")
    }else {
      label[1].classList.remove("checked")
    }
  })
  checkbox[2].addEventListener("click" , (e) =>{
    if(e.target.checked == true){
      label[2].classList.add("checked")
    }else {
      label[2].classList.remove("checked")
    }
  })
  checkbox[3].addEventListener("click" , (e) =>{
    if(e.target.checked == true){
      label[3].classList.add("checked")
    }else {
      label[3].classList.remove("checked")
    }
  })
  
  
}


function Removeitem(){
  delinput[0].onclick = () =>{
    list.removeChild(cadastrado[0])
    
    if(delinput[0]){
      showAlert.classList.remove("desativado")
    }
  }
  
  
  delinput[1].onclick = () =>{
    list.removeChild(cadastrado[1])
    
    if(delinput[1]){
      showAlert.classList.remove("desativado")
    }
  }
  
  delinput[2].onclick = () =>{
    list.removeChild(cadastrado[2])
    
    if(delinput[2]){
      showAlert.classList.remove("desativado")
    }
  }
  
  delinput[3].onclick = () =>{
    list.removeChild(cadastrado[3])

    if(delinput[3]){
      showAlert.classList.remove("desativado")
    }
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
  check.checked = false

  item.append(check, label, del)
  item.classList.add("items", "button")


  
  list.append(item)
  
  if (input.value == "" ){
    list.removeChild(item)
    // window.alert("Por favor tente novamente")
  }

  del.onclick = () =>{
    list.removeChild(item)

    if (del){
      showAlert.classList.remove("desativado")
    }
  }

  check.onclick = (e) =>{
    if(e.target.checked == true){
      label.classList.add("checked")
    }else{
      label.classList.remove("checked")
    }
  }

}


Checked()