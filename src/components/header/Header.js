import React from 'react';

//styles
import styles from './header.module.css';

//images
import logoDesktop from '../../images/logo-desktop.svg';
import logoMobile from '../../images/logo-mobile.svg';
import loginIcon from '../../images/login-icon.svg';
import menuIcon from '../../images/menu-icon.svg';

const Header = () => {
    return (
        <header style={{ marginTop: '2rem' }} className={`section-space ${styles.container}`}>
             <div className={`${styles.mediaSection} flex justify-space`}>
                <img className={styles.menuIcon} src={menuIcon} alt='menu' />
                <img className={styles.logoMobile} src={logoMobile} alt='لوگو' />
                <div className={`flex gap-05 ${styles.loginContainer}`}>
                    <img src={loginIcon} />
                    <a className={styles.loginLink} href='#'>ورود</a>
                </div>
             </div>
            
         <div className={`${styles.section} flex justify-space`}>
             <img className={styles.logoDesktop} src={logoDesktop} alt='لوگو' />
             <nav className={styles.navbar}>
                 <ul className='flex gap-3'>
                     <li><a className={styles.link} href='#'>زبان ها</a></li>
                     <li><a className={styles.link} href='#'>انتخاب استاد</a></li>
                     <li><a className={styles.link} href='#'>رزرو کلاس</a></li>
                     <li><a className={styles.link} href='#'>تماس با ما</a></li>
                     <li><a className={styles.link} href='#'>درباره ما</a></li>
                 </ul>
             </nav>
             <div className={`flex gap-1 ${styles.btns}`}>
                 <a href='#' className={`btn btn-text ${styles.btn}`}>ورود</a>
                 <a href='#' className={`btn btn-outline ${styles.btn}`}>ثبت نام</a>
             </div>
        </div>

            
        </header>
    );
};

export default Header;