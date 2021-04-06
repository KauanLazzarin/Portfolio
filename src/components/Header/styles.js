import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const HeaderLeftContent = styled.div`
    width: 100%;
    background: url('assets/splash.svg');    
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 0px -3vh; 
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
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    background: url('assets/ellipse.svg');    
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: right -20px;
`;

export const RightHeaderImage = styled.img`
    width: 70%;
    margin: 2vh 5vw 0;
    max-width: 550px;
`;