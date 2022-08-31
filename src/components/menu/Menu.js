import React from 'react'

import style from './menu.module.css'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div>
        {/* <ul className={style.menu}>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contacts'>Contacts</a></li>
        </ul> */}
        <ul className={style.menu}>
            <li><NavLink className={style.link} to='/'>Home</NavLink></li>
            <li><NavLink className={style.link} to='/about'>About</NavLink></li>
            <li><NavLink className={style.link} to='/contacts'>Contacts</NavLink></li>
            <li><NavLink className={style.link} to='/portfolio'>Portfolio</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu