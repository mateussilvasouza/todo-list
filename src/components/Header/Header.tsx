import style from './Header.module.css'

export function Header(){ 
  return(
    <header className={style.wrapper}>
      <img src="./src/assets/logo.png" alt="Logo Todo List" />
    </header>
  )
}