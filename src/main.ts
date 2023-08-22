let listItems = []

const form = document.querySelector(".form") as HTMLFormElement
const formInput = form?.querySelector(".form__input") as HTMLInputElement
const btnSave = document.querySelector("#btn__save") as HTMLButtonElement
const ulToDoList = document.querySelector(".toDoList") as HTMLUListElement
const liToDoList = document.createElement("li") as HTMLLIElement

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

    liToDoList.addEventListener("click", () => {
      if (!liToDoList.classList.contains("done") && !liToDoList.classList.contains("deleted")) {
        liToDoList.classList.add("done");
      } else {
        liToDoList.classList.remove("done");
      }
    })

    const removeTask = document.createElement("img") as HTMLImageElement
      removeTask.setAttribute("src", "/src/icon/corbeil-16x16.png")
    
    liToDoList.appendChild(removeTask)
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
      const tasks = JSON.parse(fromStorage);
      tasks.forEach(task => {
      const liToDoList = document.createElement("li") as HTMLLIElement
      liToDoList.setAttribute("class", "li__toDoList")
      liToDoList.innerHTML = task
      ulToDoList.appendChild(liToDoList)
    
      liToDoList.addEventListener("click", () => {
        if (!liToDoList.classList.contains("done") && !liToDoList.classList.contains("deleted")) {
          liToDoList.classList.add("done");
        } else {
          liToDoList.classList.remove("done");
        }
      })
  
      const removeTask = document.createElement("img") as HTMLImageElement
        removeTask.setAttribute("src", "/src/icon/corbeil-16x16.png")
      
      liToDoList.appendChild(removeTask)
     
    })
    
  }
  
}

init()