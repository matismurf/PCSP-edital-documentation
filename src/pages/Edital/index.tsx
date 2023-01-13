import { Header } from "../../components/Header";
import { EditalContainer, Styledbutton, Styledh1, Styledp } from "./styles";

export function Edital(){
  return(
    <div>
      <Header />
      <EditalContainer>
        <Styledh1>Edital</Styledh1>
        <br/>
        <Styledp>No link abaixo é possível acessar o edital original</Styledp>
        <br/>
        <a href='https://documento.vunesp.com.br/documento/stream/MjY5MzgzNg%3d%3d'>
          <Styledbutton><a href='https://documento.vunesp.com.br/documento/stream/MjY5MzgzNg%3d%3d'>Clique aqui</a></Styledbutton>
        </a>
        
      </EditalContainer>
    </div>
  )
}