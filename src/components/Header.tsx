import styles from './Header.module.css'

import rocketSvg from '../assets/rocket.svg'

export function Header(){

  return(
    <div className={styles.header}>
      <img src={rocketSvg}/>
      <h1 className={styles.title}>to<span>do</span></h1>
    </div>
    
  )
}