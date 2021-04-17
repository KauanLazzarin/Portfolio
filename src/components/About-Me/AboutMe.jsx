import styles from './../../styles/AboutMe.module.css';

export default function AboutMe () {
    return (
        <>
            <div className={styles.aboutCardHeader}>
                <h1>About Me</h1>
            </div>

            <main className={styles.aboutCardBody}>
                

                <div className={styles.cardInfo}>
                    <div className={styles.imageBorder}>
                        <img src="/assets/me.jpeg" />
                    </div>
                    <p>
                        I've started studying web development on January 2020,
                        since then I'm studying almost every single day to improve
                        my skills. My stack is variable, I can use the basic of web development 
                        (HTML5, CSS3, JavaScript) or a framework / library (ReactJS, NextJS)
                        <br/>
                        I'm 17 and I current live in Ouro Preto d'Oeste, Rondônia, Brazil
                    </p>
                </div>

                <div className="no-desktop" id="mobileIcons">   
                    <div className={styles.mobileIcons}>
                        <a className={styles.mobileIcon} href=""><img src="/icons/discord-icon.svg" alt=""/></a>
                        <a className={styles.mobileIcon} href="https://github.com/KauanLazzarin"><img src="/icons/github-icon.svg" alt=""/></a>
                        <a className={styles.mobileIcon} href=""><img src="/icons/gmail-icon.svg" alt=""/></a>
                        <a className={styles.mobileIcon} href="https://www.instagram.com/kauan.lzz/"><img src="/icons/instagram-icon.svg" alt=""/></a>
                        <a className={styles.mobileIcon} href="https://www.linkedin.com/in/kauan-lazzarin-6804a11b4/"><img src="/icons/linkedin-icon.svg" alt=""/></a>
                    </div>
                </div>

                <div className="no-mobile hoverIconsContainer">
                    <div className={styles.desktopHoverIcon}>
                        <img src="/icons/discord-icon.svg" alt=""/>
                        <div className={styles.iconInfo}>
                            <strong>Kauan Lazzarin#9685</strong>
                        </div>
                    </div>

                    <div className={styles.desktopHoverIcon}>
                        <img src="/icons/github-icon.svg" alt=""/>
                        <div className={styles.iconInfo}>
                            <a href="https://github.com/KauanLazzarin">Github</a>
                        </div>
                    </div>

                    <div className={styles.desktopHoverIcon}>
                        <img src="/icons/gmail-icon.svg" alt=""/>
                        <div className={styles.iconInfo}>
                            <strong>kauanlazzarin@gmail.com</strong>
                        </div>
                    </div>

                    <div className={styles.desktopHoverIcon}>
                        <img src="/icons/instagram-icon.svg" alt=""/>
                        <div className={styles.iconInfo}>
                            <a href="https://www.instagram.com/kauan.lzz/">Instagram</a>
                        </div>
                    </div>

                    <div className={styles.desktopHoverIcon}>
                        <img src="/icons/linkedin-icon.svg" alt=""/>
                        <div className={styles.iconInfo}>
                            <a href="https://www.linkedin.com/in/kauan-lazzarin-6804a11b4/">Linkedin</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};