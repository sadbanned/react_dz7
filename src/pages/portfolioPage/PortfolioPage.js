import React from 'react'
import style from './portfolio.module.css'
import back from '../../../src/images/1st.png'


function PortfolioPage() {
    
  return (

    <div className={style.portfolio}>
        <div className={style.background}>
            <img src={back}/>
        </div>
       <div className={style.text}>
            <h1 className={style.sph}>SPHERA</h1>
            <h2 className={style.prj}>project</h2>
       </div>
    </div>
  )
}

export default PortfolioPage