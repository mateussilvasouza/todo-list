import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import { Button } from "./components/Button/Button"
import { Header as ListHeader } from "./components/List/Header/Header"
import styles from './App.module.css'
import { useState } from "react"
import { Empty } from "./components/List/Empty/Empty"
import { Item } from "./components/List/Item/Item"
import { PlusCircle } from "@phosphor-icons/react"

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTascksCounter = tasks.reduce((acc, currentTask) => {
    if(currentTask.isChecked) return acc + 1

    return acc
  },0)

  function handleAddTask(){
    console.log(inputValue)
    if(!inputValue) return

    const newTask: ITask = {
      id: new Date().getTime(),
      isChecked: false,
      text: inputValue
    }

    setTasks((state)=>[...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id:number){
    const updatedTasks = tasks.filter(task => task.id !== id)

    setTasks(updatedTasks)
  }

   
  function handleToggleTask(id: number){
    const updatedTask = tasks.map(task => {
      if(task.id === id){
        return {...task, isChecked: !task.isChecked}
      }
      return {...task}
    })

    setTasks(updatedTask)
  }
  return (
    <main>
      <Header/>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />  
          </Button>
        </div>

        <div className={styles.taskList}>
          <ListHeader checkedTasksCounter={checkedTascksCounter} tasksCounter={tasks.length}/>
          {tasks.length === 0 ?
            (<Empty/>) : 
            (
            <div className={styles.tasksListItens}>
              {tasks.map(task =>
              <Item key={task.id} data={task} removeTask={handleRemoveTask} toggleTask={handleToggleTask} />
              )}
            </div>
            )    
          }
        </div>
      </section>
    </main>
  )
}

export default App
