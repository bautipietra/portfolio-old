import React from 'react'
import s from './Projects.module.scss'
import { motion } from 'framer-motion'

import weather from '../../assets/weather.png'
import tasty from '../../assets/tasty.png'
import mercadoSolidario from '../../assets/mercado-solidario.png'
import ecommerce from '../../assets/ecommerce.png'

function Projects() {
  return (
    <div className={s.projects} id='projects'>
      <motion.h3
        transition={{ delay: 0.2, duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        Projects
      </motion.h3>
      <div className={s.projectsWrapper}>

        <motion.a
          href="https://sneakers.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={ecommerce} alt="E-Commerce" />
            <div className={s.itemContent}>
              <h6>E-Commerce</h6>
              <div className={s.spanWrapper}>
                <span>React</span>
                <span>Redux</span>
                <span>Typescript</span>
                <span>Node</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://mercadosolidario.vercel.app/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={mercadoSolidario} alt="Mercado Solidario" />
            <div className={s.itemContent}>
              <h6>Mercado Solidario</h6>
              <div className={s.spanWrapper}>
                <span>React</span>
                <span>Next</span>
                <span>Prisma</span>
                <span>Node</span>
                <span>Typescript</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://tasty.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={tasty} alt="Tasty Recipes APP" />
            <div className={s.itemContent}>
              <h6>Recipes App</h6>
              <div className={s.spanWrapper}>
                <span>React</span>
                <span>Redux</span>
                <span>Node</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>SASS</span>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://weather.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={weather} alt="Weather App" />
            <div className={s.itemContent}>
              <h6>Weather App</h6>
              <div className={s.spanWrapper}>
                <span>Javascript</span>
                <span>React</span>
                <span>SASS</span>
                <span>Framer Motion</span>
              </div>
            </div>
          </div>
        </motion.a>

      </div>
    </div>
  )
}

export default Projects
