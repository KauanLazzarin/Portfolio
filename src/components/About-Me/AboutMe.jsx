import styles from './../../styles/AboutMe.module.css';

export default function AboutMe () {
    return (
        <main className={styles.aboutContainer}>
            <h1>About Me</h1>

            <div>
                <img href="assets/me.jpeg" />
                <p>
                    I've started studying web development on January 2020,
                    since then I'm studying almost every single day to improve
                    my skills. <br/>
                    I'm 17 and I current live in Ouro Preto d'Oeste, Rondônia, Brazil
                </p>


            </div>
            <div></div>
        </main>
    )
};