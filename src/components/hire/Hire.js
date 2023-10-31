import React from 'react';

//styles 
import styles from './hire.module.css';

//images
import hireImage from '../../images/hire-image.png';

const Hire = () => {
    return (
        <div className={`section-space ${styles.container}`}>
            <div className={`flex gap-2 ${styles.containerIN}`}>
                <div className={styles.leftCol}>
                    <h1 className={`mb-1 ${styles.title}`}>همکار ما شوید!</h1>
                    <p className={`${styles.text} mb-2`}>مدرس هایی که تمایل به تدریس زبان دارند میتوانند در پلتفرم یورتیچ شروع به تدریس زبان دلخواهشان با مبلغی که میخواهند بکنند و کلاس های خودشان را به صورت انلاین برگزار کنند... </p>
                    <a href='#' className='btn' style={{ color: 'var(--blue)', background: 'var(--white)' }}>ثبت نام مدرس</a>
                </div> 
                <div className={styles.rightCol}>
                    <img className={styles.image} src={hireImage} />
                </div> 
            </div>
        </div>
    );
};

export default Hire;