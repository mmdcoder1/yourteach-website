import React from 'react';

//styles
import styles from './teachers.module.css';
import Card from './card/Card';

// import { ArrowLeft, ArrowRight } from 'iconsax-react';


//images
import teacher1 from './../../images/teacher1.png';
import teacher2 from './../../images/teacher2.jpg';
import teacher3 from './../../images/teacher3.jpg';

const Teachers = () => {
    return (
        <div className={`section-space ${styles.container}`}>
            <div className={styles.titleContainer}>
                <h1>برترین مدرس های یورتیچ</h1>
            </div>
            {/* <div style={{ right: '1.2rem' }} className={styles.arrow}><ArrowRight /></div> */}
            <div className={`flex gap-3 ${styles.cardsContainer}`}>
                <Card name="مهرشاد نظری" rank={2.3} profile={teacher1} />
                <Card name="آرمین خسروی" rank={4.6} profile={teacher2} />
                <Card name="عرشیا کرمی" rank={3.8} profile={teacher3} />
            </div>
            {/* <button style={{ left: '1.2rem' }} className={styles.arrow}><ArrowLeft /></button> */}
            {/* <div className={styles.dots}>
                 <span className={`${styles.dot} ${styles.active}`}></span>
                 <span className={styles.dot}></span>
                 <span className={styles.dot}></span>
            </div> */}
        </div>
    );
};

export default Teachers;