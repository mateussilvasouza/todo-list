import style from './Header.module.css'
import logo from './../../assets/logo.png'

export function Header(){ 
  return(
    <header className={style.wrapper}>
      <img src={logo} alt="Logo Todo List" />
    </header>
  )
}