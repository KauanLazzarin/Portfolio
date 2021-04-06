import { HeaderContainer, HeaderLeftContent, HeaderSmallText, HeaderTitle, RightHeaderContent, RightHeaderImage } from "./styles";

export default function Header () {
    return (
        <HeaderContainer>
            <HeaderLeftContent>
                <HeaderTitle>Kauan Lazzarin</HeaderTitle>
                <HeaderSmallText>FullStack Developer</HeaderSmallText>
            </HeaderLeftContent>

            <RightHeaderContent>
                <RightHeaderImage src="assets/dev-draw.svg" alt="dev-draw"/>
            </RightHeaderContent>
        </HeaderContainer>
    )
};