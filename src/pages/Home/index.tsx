import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeContainer, Styledh1, Styledp } from "./styles";

export function Home(){
    return(
        <div>
            <Header/>
            <HomeContainer>
                <Styledh1>Bem vindo!</Styledh1>
                <br/>
                <Styledp>Este é um projeto pessoal feito com o intuíto de treinar alguns conceitos de programação 
                    e ao mesmo tempo estudar para um concurso no qual eu estou participando, algumas funcionalidades 
                    porem parecer não tão úteis para usuários porém como é um projeto meramente de aprendizado isso é
                    plenamente justificável e intencional.
                </Styledp>
                <Styledh1>Sobre o Criador</Styledh1>
                <Styledp>Meu nome é Vinícius Matias, atualmente 21 anos, estudante de ciência da computação, residente de São Paulo e 
                    se tudo der certo, futuramente um professor universitário ou escrivão chefe da polícia civil do 
                    Estado de São Paulo.
                </Styledp>
            </HomeContainer>
            
            <Footer/>
        </div>
        
    )
}