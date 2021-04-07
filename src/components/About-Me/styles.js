import styled from 'styled-components';

export const AboutContainer = styled.main`
    width: 100%;
    margin: 26vh auto;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction:column;

    background:url('assets/about-bg-mobile.svg') center 3vh no-repeat;
    background-size: cover;

    @media (min-width: 750px) {
        background: url('assets/about-bg-desktop.svg');
    }
`;

export const AboutTitle = styled.h2`
    font-family: 'Permanent Marker';
    font-weight: normal;
    filter: drop-shadow(2px 2px 4px var(--bg-blue));
    font-size: 45px;
    color: var(--brown);
`;

export const CenterContent = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const AboutImage = styled.img`
    width: 40vw;
    height: 20vw;
    border-radius: 50%;
`;

export const AboutText = styled.p`
    font-size: 20px;
    font-family: 'Caveat';
    color: var(--bg-blue);
`;

export const IconsContainer = styled.div`
    width: 100%;
    height: 20vh;
`;