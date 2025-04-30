import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id='Contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact me</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>

            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="https://drive.google.com/file/d/1d1x8nRVaK0bodgU1lRf0aELXcO2wT3co/view?usp=drive_link">Email Me</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                <a href="https://github.com/InzamamNirob997?tab=repositories">GitHub</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/inzamamkhannirob/">LinkedIn</a>
            </li>
            <li  className={styles.link}>
                <img src={getImageUrl("contact/CV4.jpg")} alt="CV" />
                <a href="https://drive.google.com/file/d/1OxbShTLYJdYc5ilqNSkJmA5gQX7Kunrt/view?usp=drive_link">Resume</a>
            </li>
        </ul>
    </footer>
  
  )
}

export default Contact
