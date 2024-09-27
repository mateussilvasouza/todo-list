import styles from './Empty.module.css'
import clipboard from './../../../assets/clipboard.png'

export function Empty(){
  return(
    <div className={styles.container}>
      <img src={clipboard} alt="Prancheta" />
      <p>
        <strong>Você não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}