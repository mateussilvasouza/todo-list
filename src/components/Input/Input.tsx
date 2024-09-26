import styles from './Input.module.css'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>

export function Input({placeholder, value}:Props){
  return(
    <input className={styles.input} placeholder={placeholder}>{value}</input>
  )
}