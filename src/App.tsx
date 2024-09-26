import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import { Button } from "./components/Button/Button"
import { Header as ListHeader } from "./components/List/Header/Header"
import styles from './App.module.css'
import { useState } from "react"

export interface ITask {
  
}

function App() {
  const [tasks, setTasks] = useState(0)

  return (
    <>
      <Header/>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Input placeholder='Adicione uma nova tarefa'/>
          <Button>Criar</Button>
        </div>

        <div>
          <ListHeader/>
        </div>
      </section>
    </>
  )
}

export default App
