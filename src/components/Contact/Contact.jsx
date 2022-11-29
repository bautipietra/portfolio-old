import React from 'react'
import s from './Contact.module.scss'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
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
            <FiLinkedin size={'25px'} className={s.fi1}></FiLinkedin>
          </div>
        </a>
        <a href="https://wa.me/5492215376148" target='_blank'>
          <div className={s.contactWrapperItem}>
            <FaWhatsapp size={'25px'} className={s.fa}></FaWhatsapp>
          </div>
        </a>
        <a href="https://github.com/bautipietra" target='_blank'>
          <div className={s.contactWrapperItem}>
            <FiGithub size={'25px'} className={s.fi2}></FiGithub>
          </div>
        </a>
      </motion.div>
    </div >
  )
}

export default Contact