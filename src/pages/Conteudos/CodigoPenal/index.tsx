import { Book, Code, Books, Fingerprint } from "phosphor-react";
import { Header } from "../../../components/Header";
import { Container, Styledh1, Styledlink, Styledobs, Styledp, StyledSubtheme } from "./styles";

export function CodigoPenal(){
  return(
    <div>
      <Header />
      <Container>
        <Styledh1>Codigo Penal</Styledh1>
        <Styledp>Um código penal é um conjunto de normas codificadas que tem o objetivo de determinar 
          e regulamentar os ados considerados infrações penais, assim como definir as sanções correspondentes.
          É considerado um dos grandes códigos na tradição jurídica romano-germânica.
        </Styledp>
        <Styledp>O código penal vigente no Brasil foi criado pelo decreto-lei 2 848, de 7 de dezembro de 1940, 
          pelo então presidente do Brasil Getúlio Vargas, tendo, como ministro da justiça, Francisco Campos. 
          Este código substituiu o Código Penal de 1890, o qual, por sua vez, substituiu o Código Criminal de 1830.
        </Styledp>
        <Styledobs>OBS: Não precisaremos ler o documento inteiro, e nem é recomendável.Estudaremos apenas as 
          partes pedidas expressamente no edital oficial.
        </Styledobs>
        <Styledlink href='https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' target='_blank'>Clique aqui para ver o código penal no site do planalto</Styledlink>
        <br/>

        <StyledSubtheme>Da Aplicação da lei penal</StyledSubtheme>
        <Styledp>Tratam-se dos artigos referentes as disposições gerais do código penal, apenas apresentando 
          alguns conceitos de teorias adotadas pelo CP brasileiro. Presente nos artigos 1 ao 12.
        </Styledp>
        <Styledlink href='https://monografias.brasilescola.uol.com.br/direito/da-aplicacao-lei-penal.htm' target='_blank'>Um resumo dos principais pontos desta parte do documento</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/live/SkiJeugYutA?feature=share' target='_blank'>Uma videoaula a respeito do assunto</Styledlink>
        <br/>

        <StyledSubtheme>Do crime</StyledSubtheme>
        <Styledp>Artigos 13 ao 25, apresenta o conceito de crime e definições completas e pormenorizadas a respeito do tema 
          respondendo questões complexas.
        </Styledp>
        <Styledlink href='https://www.direitonet.com.br/resumos/exibir/127/Conceito-de-crime' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/3TltdLt49rU' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Concurso de Pessoas</StyledSubtheme>
        <Styledp>Artigos 29 ao 31, é o cometimento da infração penal por mais de um pessoa. Tal cooperação da 
          prática da conduta delitiva pode se dar por meio da coautoria, participação, concurso de delinquentes 
          ou de agentes, entre outras formas.
        </Styledp>
        <Styledlink href='https://www.direitonet.com.br/resumos/exibir/352/Concurso-de-pessoas' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/Ie7z18ah7pE' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Concurso de Crimes</StyledSubtheme>
        <Styledp>Artigos 69 ao 71,haverá concurso de crimes quando uma pessoa, mediante uma ou mais condutas, 
          cometer duas ou mais infrações penais que estejam ligadas entre si.
        </Styledp>
        <Styledlink href='https://enciclopediajuridica.pucsp.br/verbete/416/edicao-1/concurso-de-crimes' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/M2o4rcdiOLE' target='_blank'>Videoaula</Styledlink>
        <br/>
        
      </Container>
    </div>
  )
}