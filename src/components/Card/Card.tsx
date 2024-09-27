import { useState } from "react"
import { ITask } from "../../App"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { CheckCircle } from "@phosphor-icons/react"
import styles from './Card.module.css'

interface Props{
  data: ITask
  toggleTask: (data: ITask) => void
  cardIsOpen: () => void
}

export function Card({data, toggleTask, cardIsOpen}: Props){
  const [inputValue, setInputValue] = useState(data.text)

  function handleToggleTask(){
    const updateTask: ITask = {
      id: data.id,
      isChecked: data.isChecked,
      text: inputValue
    }
    toggleTask(updateTask)
    cardIsOpen()
  }

  return (
    <div className={styles.container}>
      <Input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
      <Button 
        onClick={handleToggleTask}>
        Salvar
        <CheckCircle size={16} color="#f2f2f2" weight="bold" />  
      </Button>
    </div>
  )
}