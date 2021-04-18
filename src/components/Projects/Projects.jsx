import styles from './../../styles/Projects.module.css';

export default function Projects () {
    const projectsData = [
        {
            title: 'Proffy',
            img: '/assets/proffy.png',
            description: 'This project has been developed in the second edition of Next Level Week',
            url: 'https://github.com/KauanLazzarin/proffy'
        },


        {
            title: 'EasyBank Landing Page',
            img: '/assets/easybank-logo.svg',
            description: 'FrontEnd Mentor that I made with React',
            url: 'https://github.com/KauanLazzarin/EasyBank-Landing-Page-React'
        },

        {
            title: 'MoveIt',
            img: '/assets/moveit.png',
            description: 'Project developed in the fourthy edition of Next Level Week',
            url: 'https://github.com/KauanLazzarin/moveit-next'
        }
    ]

    return (
       <main className={styles.projectsContainer}>
           <h2>Some side projects ⭐</h2>
           <div className={styles.cardsContainer}>
               {
                   projectsData.map((project) => {
                        return (
                            <div className={styles.card}>
                                <div className={styles.cardHeader}  style={
                                    {
                                        backgroundImage: `url(${project.img})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        objectFit: 'cover',
                                        backgroundSize: '94%',
                                    }
                                }>

                                </div>
                                
                                <div className={styles.cardBody}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.url}>
                                        <img src="/icons/github-icon-transparent.svg" alt="project link" />
                                    </a>
                                </div>

                            </div>
                            
                        )
                   })
                   
               }
           </div>
       </main> 
    );
};