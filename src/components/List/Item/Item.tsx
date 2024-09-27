import { Check, Pencil, Trash } from "@phosphor-icons/react"
import { ITask } from "../../../App"
import styles from './Item.module.css'
import { useState } from "react"
import { Card } from "../../Card/Card"

interface Props{
  data: ITask
  removeTask: (id: number) => void
  toggleTask: (data: ITask) => void
}

export function Item({data, removeTask, toggleTask}:Props){
  const [cardIsOpen, setCardIsOpen] = useState(false)

  function handleRemove(){
    removeTask(data.id)
  }

  function handleTaskToggle(){
    toggleTask(data)
  }

  function handleOpenCard(){
    setCardIsOpen(!cardIsOpen)
  }

  const checkboxCheckedClassname = data.isChecked
  ? styles['checkbox-checked']
  : styles['checkbox-unchecked']
const paragraphCheckedClassname = data.isChecked
  ? styles['paragraph-checked']
  : ''
  
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <div>
        <button onClick={handleOpenCard}>
          <Pencil size={16} color="#bb2727"/>
        </button>

        <button onClick={handleRemove}>
          <Trash size={16} color="#808080"/>
        </button>
      </div>

      {cardIsOpen &&
       <Card data={data} toggleTask={toggleTask} cardIsOpen={handleOpenCard}/>
      }
    </div>
  )
}