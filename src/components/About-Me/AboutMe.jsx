import { AboutContainer, AboutImage, AboutText, AboutTitle, CenterContent, IconsContainer } from "./styles";

export default function AboutMe () {
    return (
        <AboutContainer>
            <AboutTitle>About Me</AboutTitle>

            <CenterContent>
                <AboutText>
                    I've started studying web development on January 2020,
                    since then I'm studying almost every single day to improve
                    my skills. <br/>
                    I'm 17 and I current live in Ouro Preto d'Oeste, Rondônia, Brazil
                </AboutText>

            </CenterContent>
            <IconsContainer></IconsContainer>
        </AboutContainer>
    )
};