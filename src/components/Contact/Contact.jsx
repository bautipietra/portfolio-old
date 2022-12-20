import React from 'react'
import s from './Contact.module.scss'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className={s.contact} id='contact'>
      <motion.h3
        transition={{ delay: 0.2, duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        Get in touch
      </motion.h3>

      <motion.div
        className={s.contactWrapper}
        transition={{ delay: 0.2, duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <a href="https://www.linkedin.com/in/bautista-pietraroia/" target='_blank'>
          <div className={s.contactWrapperItem}>
            <FiLinkedin size={'25px'} className={s.fi}></FiLinkedin>
          </div>
        </a>
        <a href="mailto:bautistapietraroia@gmail.com" target='_blank'>
          <div className={s.contactWrapperItem}>
            <FiMail size={'25px'} className={s.fi}></FiMail>
          </div>
        </a>
        <a href="https://github.com/bautipietra" target='_blank'>
          <div className={s.contactWrapperItem}>
            <FiGithub size={'25px'} className={s.fi}></FiGithub>
          </div>
        </a>
      </motion.div>
    </div >
  )
}

export default Contact