import React from 'react';

//images
import image from '../../../images/left-column-image.png';

//styles
import styles from './column-left.module.css';

const ColumnLeft = () => {
    return (
        <div className={styles.container}><img className={styles.image} src={image} /></div>
    );
};

export default ColumnLeft;