import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>

export function Button({children}: Props){
  return (
    <button className={styles.button}>
      {children} 
      <img src="src/assets/button.png" alt="Adicionar" />
    </button>
  )
}

