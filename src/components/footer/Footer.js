import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../footer/footer.module.css'

function Footer() {
  return (
    <div>
            <ul className={style.menu}>
            <li><NavLink className={style.link} to='/'>Home</NavLink></li>
            <li><NavLink className={style.link} to='/about'>About</NavLink></li>
            <li><NavLink className={style.link} to='contacts'>Contacts</NavLink></li>
            <li><NavLink className={style.link} to='/portfolio'>Portfolio</NavLink></li>
        </ul>
    </div>
  )
}

export default Footer