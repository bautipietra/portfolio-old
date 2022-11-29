import React from 'react'
import s from './Projects.module.scss'
import { motion } from 'framer-motion'

import calculator from '../../assets/calculator.png'
import henry from '../../assets/henrytools.png'
import productivity from '../../assets/productivity.png'
import promodoro from '../../assets/promodoro.png'

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
          href="https://henrytools.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={henry} alt="henry tools website" />
            <div className={s.itemContent}>
              <h6>Henry Tools</h6>
              <div className={s.spanWrapper}>
                <span>React</span>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://promodoro.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={promodoro} alt="Promodoro website" />
            <div className={s.itemContent}>
              <h6>Promodoro</h6>
              <div className={s.spanWrapper}>
                <span>Javascript</span>
                <span>Electron</span>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://productivity-app.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={productivity} alt="productivity app" />
            <div className={s.itemContent}>
              <h6>Productivity App</h6>
              <div className={s.spanWrapper}>
                <span>Javascript</span>
                <span>DraggableJS</span>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://calculator.bautistapietraroia.com.ar/"
          target={'_blank'}
          transition={{ delay: 0.2, duration: 0.5 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <div className={s.projectsWrapperItem}>
            <img src={calculator} alt="calculator website" />
            <div className={s.itemContent}>
              <h6>Calculator</h6>
              <div className={s.spanWrapper}>
                <span>Javascript</span>
                <span>SASS</span>
              </div>
            </div>
          </div>
        </motion.a>

      </div>
    </div>
  )
}

export default Projects