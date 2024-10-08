import styles from './Header.module.css'

interface Props{
  tasksCounter: number
  checkedTasksCounter: number
}

export function Header({tasksCounter = 0, checkedTasksCounter = 0}:Props){
  return(
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>
      <aside>
        <p>Concluidas</p>
        <span>{tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}</span>
      </aside>
    </header>
  )
}