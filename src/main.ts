let listItems = []

const form = document.querySelector(".form") as HTMLFormElement
const formInput = form?.querySelector(".form__input") as HTMLInputElement
const btnSave = document.querySelector("#btn__save") as HTMLButtonElement
const ulToDoList = document.querySelector(".toDoList") as HTMLUListElement

function addTask() {
  if (formInput) {
    const taskAdded = formInput.value
    const localList: string[] = JSON.parse(localStorage.getItem("todo") || "[]") || []

    localList.push(taskAdded)
    localStorage.setItem("todo", JSON.stringify(localList))

    const liToDoList = document.createElement("li")
      liToDoList.setAttribute("class", "li__toDoList")
      liToDoList.innerText = taskAdded

    ulToDoList?.appendChild(liToDoList)
    formInput.value = ""
  }
}

form.addEventListener("submit", e => {
  // on empeche le rechargement de la page 
  e.preventDefault()
})

btnSave?.addEventListener("click", () => {
  addTask()
})


function init(){
  const fromStorage = localStorage.getItem("todo")
  if(fromStorage){
    for(let i = 0; i < fromStorage.length; i++ ){
      const liToDoList = document.createElement("li") as HTMLLIElement
      liToDoList.setAttribute("class", "li__toDoList")
      liToDoList.innerHTML = fromStorage
      ulToDoList.appendChild(liToDoList)
    }
  }
  
}