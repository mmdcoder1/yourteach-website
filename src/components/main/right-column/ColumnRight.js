import React from 'react';

//styles 
import styles from './column-right.module.css';

//data
import { statusData } from './data';

const ColumnRight = () => {
    return (
        <div className={`${styles.container}`}>
            <h2 className={`${styles.title} mb-05`}>هر جای دنیا که باشی, فقط نیاز به</h2>
            <h2 className={`${styles.title} mb-1`}>یورتیچ داری تا زبان یاد بگیر!</h2>
            <p className={`${styles.text} mb-3`}>با یورتیچ فقط کافیه کلاس و مدرسی که دوست داری رو انتخاب بکنی و با هر بودجه ای شروع به یادگیری زبان دلخواهت کنی!</p>
            <a style={{ padding: '1rem 2.5rem' }} href='#' className='btn'>همین الان شروع کن!</a>

            <div className={`flex gap-3 ${styles.statusContainer}`}>
                {
                    statusData.map(status => <div key={status.id}>
                        <h3 className={styles.statusTitle}>{status.title}</h3>
                        <p className={styles.statusText}>{status.text}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ColumnRight;