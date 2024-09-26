import styles from './Empty.module.css'

export function Empty(){
  return(
    <div className={styles.container}>
      <img src="src/assets/clipboard.png" alt="Prancheta" />
      <p>
        <strong>Você não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}