import { Book, Code, Books, Fingerprint } from "phosphor-react";
import { Header } from "../../components/Header";
import { Centralyze, ConteudosContainer, Styledbutton, Styledh1, Styledp } from "./styles";

export function Conteudos(){
  return(
    <div>
      <Header />
      <ConteudosContainer>
        <Styledh1>Conteúdos</Styledh1>
        <br/>
        <Styledp>Nesta seção você encontrará conteúdos relacionados a cada disciplína do edital</Styledp>

        <Centralyze>
          <a href="/Conteudos/LinguaPortuguesa">
            <Styledbutton color='#826AED'>
              <Book size={25}/>
              Lingua Portuguesa
            </Styledbutton>
          </a>

          <a href="/Conteudos/ConstituicaoFederal">
            <Styledbutton color='#C879FF'>
              <Books size={25}/>
              Constituição Federal
            </Styledbutton>
          </a>

          <a href="/Conteudos/DireitosHumanos">
            <Styledbutton color='#FFB7FF'>
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
            <Styledbutton color='#F3A712'>
              <Books size={25}/>
              Legislação Especial
            </Styledbutton>
          </a>

          <a href="/Conteudos/DireitoAdministrativo">
            <Styledbutton color='#EF8354'>
              <Books size={25}/>
              Direito Administrativo
            </Styledbutton>
          </a>

          <a href="/Conteudos/Criminologia">
            <Styledbutton color='#edabb5'>
              <Fingerprint size={25}/>
              Criminologia
            </Styledbutton>
          </a>

          <a href="/Conteudos/Informatica">
            <Styledbutton color='#FFA5AB'>
              <Code size={25} />
              Informática
            </Styledbutton>
          </a>
        </Centralyze>
        
      </ConteudosContainer>
    </div>
  )
}