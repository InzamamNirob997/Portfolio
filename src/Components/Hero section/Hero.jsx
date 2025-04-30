import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Inzamam Ul Islam </h1>
        <p className={styles.description}>Currently I have the experience of working as a Front-End Developer in HTML,CSS, JS, REACT</p>
        <a href="" className={styles.contact}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/img123.png")} alt="" className={styles.heroImage}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
  </section>

}

export default Hero
