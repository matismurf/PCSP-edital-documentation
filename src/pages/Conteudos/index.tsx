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
          <a href="#">
            <Styledbutton color='#826AED'>Lingua Portuguesa</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#C879FF'>Constituição Federal</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#FFB7FF'>Direitos Humanos</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#3BF4FB'>Código Penal</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#CAFF8A'>Código de Processo Penal</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#F3A712'>Legislação Especial</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#EF8354'>Direito Administrativo</Styledbutton>
          </a>

          <a href="#">
            <Styledbutton color='#FFA5AB'>Informática</Styledbutton>
          </a>
        </Centralyze>
        
      </ConteudosContainer>
    </div>
  )
}