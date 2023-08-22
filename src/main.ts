let listItems = []
let taskIndex = 0
const form = document.querySelector(".form") as HTMLFormElement
const formInput = form?.querySelector(".form__input") as HTMLInputElement
const btnSave = document.querySelector("#btn__save") as HTMLButtonElement
const ulToDoList = document.querySelector(".toDoList") as HTMLUListElement


function addTask() {
  if (formInput) {
    const taskAdded = formInput.value
    //const localList: string[] = JSON.parse(localStorage.getItem("todo") || "[]") || []

    //localList.push(taskAdded)
    //localStorage.setItem("todo", JSON.stringify(localList))
    localStorage.setItem(`${taskIndex+=1}`, JSON.stringify(taskAdded))
    
    const liToDoList = document.createElement("li")
      liToDoList.setAttribute("class", "li__toDoList")
    const itemToDoList = document.createElement("p") 
      itemToDoList.innerText = taskAdded

    ulToDoList?.appendChild(liToDoList)
    liToDoList.appendChild(itemToDoList)
    formInput.value = ""

    liToDoList.addEventListener("click", () => {
      if (!liToDoList.classList.contains("done") && !liToDoList.classList.contains("deleted")) {
        liToDoList.classList.add("done");
      } else {
        liToDoList.classList.remove("done");
      }
    })

    const removeButton = document.createElement("button") as HTMLButtonElement
    removeButton.setAttribute("class", "btn")

    removeButton.addEventListener("click", () => {
      liToDoList.remove()

      const arrayFromStorage = Array.from(ulToDoList.children)
      
      const indexTaskToRemove = arrayFromStorage.indexOf(liToDoList)

      console.log(indexTaskToRemove);
      
      if(indexTaskToRemove !== -1 ){
        const localStorageKey = `${indexTaskToRemove + 1}`
        localStorage.removeItem(localStorageKey)
      }
    })
  liToDoList.appendChild(removeButton)
  }  
}

form.addEventListener("submit", e => {
  // on empeche le rechargement de la page 
  e.preventDefault()
})

btnSave?.addEventListener("click", () => {
  addTask()
})




let elementSup = null

function init(){
  const fromStorage = localStorage.getItem(taskAdded)
  if(fromStorage){
      const tasks: string[] = JSON.parse(fromStorage);
      tasks.forEach(task => {
      const liToDoList = document.createElement("li") as HTMLLIElement
      const itemToDoList = document.createElement("p") as HTMLParagraphElement
      liToDoList.setAttribute("class", "li__toDoList")
      itemToDoList.innerHTML = task
      ulToDoList.appendChild(liToDoList)
      liToDoList.appendChild(itemToDoList)

      liToDoList.addEventListener("click", () => {
        if (!liToDoList.classList.contains("done") && !liToDoList.classList.contains("deleted")) {
          liToDoList.classList.add("done");
        } else {
          liToDoList.classList.remove("done");
        }
      })
  
      const removeButton = document.createElement("button") as HTMLButtonElement
        removeButton.setAttribute("class", "btn")

        removeButton.addEventListener("click", () => {
          liToDoList.remove()
          let taskToRemove = itemToDoList.textContent
          console.log(taskToRemove);
          
          if(taskToRemove !== null){
            localStorage.removeItem(taskToRemove)
          }
        })
      liToDoList.appendChild(removeButton)
     
    })
    
  }
  
}

init()