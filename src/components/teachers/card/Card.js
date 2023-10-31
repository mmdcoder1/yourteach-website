import React from 'react';

import franceFlag from '../../../images/france-flag.svg';

//styles
import styles from './card.module.css';

//persian number
import PN from 'persian-number';

const Card = ({ name, rank, profile }) => {
    return (
       <div className={`flex gap-2 justify-center ${styles.cardContainer}`}>
           <div className={styles.card}>
                <img style={{ borderRadius: "100%" }} height={100} width={100} className={styles.cardImage} src={profile} />
                <h3 className={styles.cardTitle}>{name}</h3>
                <p className={styles.cardText}>عاشق تدریس هستم و ۷ ساله در جاهای مختلف این کار رو انجام میدم و خیلی از تدریس زبان فرانسوی لذت میبرم...</p>
                <div className={`${styles.cardBottom} flex justify-space`}>
                <p className={`${styles.cardLang} flex gap-05`}><span>زبان فرانسوی</span><img src={franceFlag} /></p>
                <p className={`${styles.cardScore}`}>امتیاز  {PN.convertEnToPe(rank)}</p>  
                </div>
        </div>
       </div>
    );
};

export default Card;