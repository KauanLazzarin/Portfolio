import styles from './../../styles/TechCard.module.css';

export default function TechCard ({techs, children}) {
    return (
        <div className={styles.techCard}>
            <div className={styles.cardHeader}>
                <h2>{children}</h2>
            </div>
            
            <div className={styles.techsList}>
                <ul>
                {
                    techs.map((tech) => <li>{tech}</li>)
                }
                </ul>
            </div>
        </div>
    )
};