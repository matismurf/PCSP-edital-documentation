import { HeaderContainer, HeaderContent, LinkComponent, Logo } from "./styles";
import logoImg from '../../assets/logo2.jpg'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <span>
                    <Logo src={logoImg}/>
                    Polícia Civil Edital
                </span>

                <LinkComponent href='#'>Edital</LinkComponent>
                <LinkComponent href='#'>Conteúdos</LinkComponent>
                <LinkComponent href='#'>Vunesp</LinkComponent>
                <LinkComponent href='#'>Notícias</LinkComponent>


                
            </HeaderContent>
        </HeaderContainer>
    )
}