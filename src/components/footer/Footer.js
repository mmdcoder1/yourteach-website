import React from 'react';

//styles
import styles from './footer.module.css';

//images
import logo from '../../images/logo-desktop.svg';
import instagram  from '../../images/instagram.svg';
import telegram  from '../../images/telegram.svg';
import twitter  from '../../images/twitter.png';
import inch from '../../images/inch.svg';


const Footer = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`flex justify-center mt-2 ${styles.logoContainer}`}>
               <img src={logo} className={styles.logo} />
            </div>
            <div style={{ marginTop: '72px' }} className='flex flex-align-start'>
                <div style={{ flexBasis: '20%' }}>
                    <h2 className={styles.title}>دسترسی سریع</h2>
                    <ul className='mt-1'>
                         <li className='mb-05'><a className={`${styles.link} ${styles.active}`} href='#'>صفحه اصلی</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>ثبت نام در کلاس ها</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>ثبت نام مدرس</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>رزرو کلاس</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>تماس با ما</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>درباره ما</a></li>
                    </ul>
                </div>

                <div style={{ flexBasis: '40%' }}>
                    <h2 className={styles.title}>لینک ها</h2>
                    <ul className='mt-1'>
                         <li className='mb-05'><a className={styles.link} href='#'>سوالات متدول</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>شرایط و قوانین</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>راهنمای ثبت نام مدرس</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>راهنمای زبان آموزان</a></li>
                         <li className='mb-05'><a className={styles.link} href='#'>پشتبانی سایت</a></li>
                    </ul>
                </div>

                <div style={{ flexBasis: '40%' }}>
                    <h2 className={styles.title}>درباره یورتیچ</h2>
                         <p className={`${styles.text} mt-1`}>
                          یادمون میاد سال ۹۸ بود که ویروسی به اسم کرونا در کل جهان شیوع پیدا کرد! به همین دلیل هم خیلی از کلاس ها و اموزش ها انلاین شد و همین روزا بود که ما فعالیت ما آغاز شد چون حس میکردیم <a href='#' className={`mr-05 ${styles.link} ${styles.active}`}> بیشتر بخوانید  </a>
                         </p>
                    <div style={{ width: '22rem' }} className='flex justify-space mt-2'>
                        <p className={styles.text}>شبکه های اجتماعی:</p>
                        <div className='flex gap-1'>
                            <img src={inch} /> 
                            <img src={twitter} />
                            <img src={telegram} />
                            <img src={instagram} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;