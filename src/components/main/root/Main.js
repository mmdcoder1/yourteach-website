import React from 'react';

//style
import styles from './main.module.css';

//components
import ColumnRight from '../right-column/ColumnRight';
import ColumnLeft from '../left-column/ColumnLeft';

const Main = () => {
    return (
        <div className={`flex flex-media gap-2 justify-space section-space ${styles.container}`}>
            <ColumnRight />
            <ColumnLeft />
        </div>
    );
};

export default Main;