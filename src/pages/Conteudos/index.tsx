import { Book, Code, Books, Fingerprint } from "phosphor-react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Centralyze, ConteudosContainer, Styledbutton, Styledh1, Styledobs, Styledp } from "./styles";

export function Conteudos(){
  return(
    <div>
      <Header />
      <ConteudosContainer>
        <Styledh1>Conteúdos</Styledh1>
        <br/>
        <Styledp>Nesta seção você encontrará conteúdos relacionados a cada disciplína do edital</Styledp>

        <Styledobs>Ler tudo que estiver disposto em cada um dos tópicos abaixo e fazer o máximo de questões possíveis irá lhe proporcionar uma vantagem valiosa, 
          recomendo fazer todas provas anteriores se possível e estudar cada uma das questões com calma.
        </Styledobs>

        <Centralyze>
          <a href="/Conteudos/LinguaPortuguesa">
            <Styledbutton color='#826AED' disabled>
              <Book size={25}/>
              Lingua Portuguesa
            </Styledbutton>
          </a>

          <a href="/Conteudos/ConstituicaoFederal">
            <Styledbutton color='#C879FF' disabled>
              <Books size={25}/>
              Constituição Federal
            </Styledbutton>
          </a>

          <a href="/Conteudos/DireitosHumanos">
            <Styledbutton color='#FFB7FF' disabled>
              <Books size={25}/>
              Direitos Humanos
            </Styledbutton>
          </a>

          <a href="/Conteudos/CodigoPenal">
            <Styledbutton color='#3BF4FB'>
              <Books size={25}/>
              Código Penal
            </Styledbutton>
          </a>

          <a href="/Conteudos/CodigoProcessualPenal">
            <Styledbutton color='#CAFF8A'>
              <Books size={25}/>
              Código de Processo Penal
            </Styledbutton>
          </a>

          <a href="/Conteudos/LegislacaoEspecial">
            <Styledbutton color='#F3A712' disabled>
              <Books size={25}/>
              Legislação Especial
            </Styledbutton>
          </a>

          <a href="/Conteudos/DireitoAdministrativo">
            <Styledbutton color='#EF8354' disabled>
              <Books size={25}/>
              Direito Administrativo
            </Styledbutton>
          </a>

          <a href="/Conteudos/Criminologia">
            <Styledbutton color='#edabb5' disabled>
              <Fingerprint size={25}/>
              Criminologia
            </Styledbutton>
          </a>

          <a href="/Conteudos/Informatica">
            <Styledbutton color='#FFA5AB' disabled>
              <Code size={25} />
              Informática
            </Styledbutton>
          </a>
        </Centralyze>
        
      </ConteudosContainer>

      <Footer/>
    </div>
  )
}