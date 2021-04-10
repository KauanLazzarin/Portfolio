import React from 'react';
import styles from './../../styles/MobileTechs.module.css';
import TechCard from './TechCard.jsx';

export default function MobileTechs () {
    const [isFrontActive, setFrontActive] = React.useState(false);
    const [isBackActive, setBackActive] = React.useState(false);

    return (
        <div className="no-desktop">
            <div className={styles.techsContainer}>
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
            </div>
        </div>
    )
};