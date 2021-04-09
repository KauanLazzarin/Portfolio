import styles from './../../styles/Header.module.css';

export default function Header () {
    return (
        <header className={styles.pageHeader}>
            <div>
                <h1>Kauan Lazzarin</h1>
                <strong>FullStack Developer</strong>
            </div>

            <div>
                <img src="assets/dev-draw.svg" alt="dev-draw"/>
            </div>
        </header>
    )
};