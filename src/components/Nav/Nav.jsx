import React, { useState, useEffect } from 'react'
import s from './Nav.module.scss'
import { motion } from 'framer-motion'
import { BsFillSunFill } from 'react-icons/bs'
import { IoIosMoon } from 'react-icons/io'

function Nav() {

  //Dark Mode on first time
  if (eval(window.localStorage.getItem('darkmode')) === null) window.localStorage.setItem('darkmode', true)

  // Last mode
  const [dark, setDark] = useState(eval(window.localStorage.getItem('darkmode')))

  const html = document.querySelector('html')

  // Save mode
  useEffect(() => {
    dark ? html.classList.remove('dark') : html.classList.add('dark')
    window.localStorage.setItem('darkmode', dark)
  }, [dark])

  const [menu, setMenu] = useState(false)

  const noScroll = () => window.onscroll = function () { if (window.innerWidth < 1000) window.scrollTo(0, 0) };
  const scroll = () => window.onscroll = function () { }

  const changeToScroll = () => {
    scroll()
    setMenu(!menu)
  }

  useEffect(() => {
    if (menu) noScroll()
    else scroll()
  }, [menu])

  return (
    <motion.div
      className={s.nav}
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}>
      <div className={`${s.menu} ${menu ? s.open : ''}`} onClick={() => setMenu(!menu)}>
        <span className={s.menuBar}></span>
        <span className={s.menuBar}></span>
        <span className={s.menuBar}></span>
      </div>
      <nav className={`${s.navWrapper} ${!menu ? s.menuHidden : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => changeToScroll()}>Home</a></li>
          <li><a href="#projects" onClick={() => changeToScroll()}>Projects</a></li>
          <li><a href="#contact" onClick={() => changeToScroll()}>Contact</a></li>
        </ul>
      </nav>
      <div className={s.navDarkMode}>
        <IoIosMoon
          size={'30px'}
          onClick={() => setDark(true)}
          className={dark ? s.hide : ''}>
        </IoIosMoon>

        <BsFillSunFill
          size={'30px'}
          onClick={() => setDark(false)}
          className={!dark ? s.hide : ''}>
        </BsFillSunFill>
      </div>
    </ motion.div>
  )
}

export default Nav