import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';


 const About = () => {
  return (
    <section className={styles.container} id='About'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="me sitting with laptop" className={styles.aboutImage}/>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
            <h3> Front End Developer</h3> <br />
            <p>* I have experience of building websites with HTML, CSS, JS, React Framework</p> <br />
            <p> * Also layout design for UX/UX base logo design, Thumbnail and website design </p>
            </div>
          </li>
          

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
            <h3>Figma based designer & Backend Node Developer</h3> <br />
            <p> * I haved worked for couple of companys design and for Their IT based system design work</p> 
            <br />
            <p> * I have also worked with node js for backed side server related work to make sure websites work efficiently</p>
            </div>
          </li>
        </ul>
    </div>
  </section>
  )
   
}
export default About;
