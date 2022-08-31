import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../header/header.module.css'
import logo from '../../images/Vector.svg'

function header() {
  return (
    <div>
            <ul className={style.menu}>
            <li><NavLink className={style.link} to='/'>Technology</NavLink></li>
            <li><NavLink className={style.link} to='/about'>Information</NavLink></li>
            <li><NavLink className={style.link} to='contacts'>Prototypes</NavLink></li>
            <li><NavLink className={style.link} to='/portfolio'>After</NavLink></li>

        </ul>
            <img className={style.logo} src={logo}/>
    </div>
  )
}

export default header