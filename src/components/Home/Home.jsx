import React, { useState } from 'react'
import s from './Home.module.scss'
import Bautista from '../../assets/bautista-pietraroia.png'
import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useEffect } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Home() {

  const [dropDown, setDropDown] = useState(false)

  useEffect(() => {
  }, [dropDown])


  return (
    <div className={s.home} id='home'>
      <motion.div
        className={s.homeWrapper}
        transition={{ delay: 0.2, duration: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <span>Hi <span className='no-dark'>👋</span>, My name is</span>
        <h1>Bautista Pietraroia</h1>
        <h3>Full Stack Web Developer</h3>
        <p>I am from La Plata, Argentina. I am 19 years old and I am passionate about technology. My main stack is PERN (PostgreSQL, Express, React and NodeJS).</p>
        <button id={s.resumeBtn} onClick={() => { setDropDown(!dropDown) }} >
          See CV {dropDown ? <FiChevronUp></FiChevronUp> : <FiChevronDown></FiChevronDown>}
          <ul className={dropDown ? '' : s.hidden}>
            <li><a href="">ES <span class="fi fi-es"></span></a></li>
            <li><a href="">EN <span class="fi fi-us"></span></a></li>
          </ul>
        </button>
      </motion.div>
      <motion.div
        className={s.homeImg}
        transition={{ delay: 0.2, duration: 0.5 }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, }}
        viewport={{ once: true }}>
        <a href="https://www.linkedin.com/in/bautista-pietraroia/" target='_blank'>
          <img
            src={Bautista}
            alt="Bautista Pietraroia"
          />
        </a>
      </motion.div>
    </div>
  )
}

export default Home