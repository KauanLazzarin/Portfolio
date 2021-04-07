import styled from 'styled-components';

export const HeaderContainer = styled.header` 
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(min-width: 750px) {
        display: grid;
        height: 70vh;
        grid-template-columns: 1fr 1fr;    
    }
`;

export const HeaderLeftContent = styled.div`
    width: 100%;
    background: url('assets/splash.svg');    
    height: 50vh;
    background-size: 80%;
    background-position: left -3vh;
    background-repeat: no-repeat;

    @media (min-width: 750px) {
        height: 70vh;
        background-size: 75%;
        background-position: left -7vh; 
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 3.5rem;
    margin-left: 3vw;
    font-weight: normal;
    margin-top: 4vh;
    font-family: 'Permanent Marker', cursive;
    color: var(--brown);
`;  

export const HeaderSmallText = styled.small`
    margin-left: 3vw;
    margin-top: -1vh;
    font-size: 2rem;
    font-family: 'Caveat';
    color: var(--blue-medium);
`;

export const RightHeaderContent = styled.div`
    display: none;

    @media(min-width: 750px) {
        height: 70vh;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        background: url('assets/ellipse.svg');    
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: right -20px;
    }
`;

export const RightHeaderImage = styled.img`
    display: none;

    @media(min-width: 750px) {
        display: block;
        width: 75%;
        max-width: 550px;
    }
`;