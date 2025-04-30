import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen); // Toggle the menuOpen state
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={handleMenuClick} // Call handleMenuClick when the menu button is clicked
                />
                <ul className={`${styles.menuItem} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#Project">Project</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
