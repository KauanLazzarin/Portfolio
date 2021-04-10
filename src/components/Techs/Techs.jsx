import React from 'react';
import styles from './../../styles/Techs.module.css';
import TechCard from './TechCard.jsx';

export default function MobileTechs () {
    const [isFrontActive, setFrontActive] = React.useState(false);
    const [isBackActive, setBackActive] = React.useState(false);

    return (
        <>
            <h2 className={styles.sectionTitle}>Techs that I use, my stack! 👨🏽‍💻</h2>
            <div className={styles.techsContainer}>
                <section className={styles.techSection}>
                    <button onClick={() => setFrontActive(!isFrontActive)}>
                        FrontEnd 
                        <img src="/icons/arrow-down.svg" alt=""/>
                    </button>

                    {
                        isFrontActive && (
                            <TechCard 
                            techs={['HTML 5', 'CSS 3', 'JavaScript ES6', 'ReactJS', 'Styled-Components']}>
                                Frontend
                            </TechCard>
                        )
                    }
                </section>

                <section className={styles.techSection}>
                    <button onClick={() => setBackActive(!isBackActive)}>
                        BackEnd 
                        <img src="/icons/arrow-down.svg" alt=""/>
                    </button>

                    {
                        isBackActive && (
                            <TechCard 
                            techs={['NodeJS', 'MongoDB', 'ExpressJS', 'RESP APIs']}>
                                BackEnd
                            </TechCard>
                        )
                    }
                </section>
            </div>
        </>
    )
};