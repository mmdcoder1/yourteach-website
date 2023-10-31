import React from 'react';

//styles
import styles from './features.module.css';

//images
import bg from '../../images/features-bg.svg';
import featuresTitle from '../../images/features-title.svg';

//datas
import { featuresData } from './data/data';


const Features = () => {
    return (
        <div className={`section-space ${styles.container}`}>
            <img className={styles.bg} src={bg} alt='بک گراند' />
            <div className={styles.titleContainer}>
                <img className={styles.featuresTitle} src={featuresTitle} />
                <p className={styles.text}>ویژگی های</p>
                <h1 className={styles.title}>یورتـــــــــــیچ</h1>
            </div>

            {
                featuresData.map(feature => <div key={feature.id} style={feature.styles} className={`${styles.card} flex`}>
                    <div>
                        <img className={styles.cardImage} src={feature.icon} />
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardText}>{feature.text}</p>
                    </div>
                </div>)
            }
        </div>
    );
};



export default Features;