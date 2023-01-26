import { Book, Code, Books, Fingerprint } from "phosphor-react";
import { Footer } from "../../../components/Footer";
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
        <Styledobs>Minha recomendação é: leia a lei seca primeiro e então leia o resumo e asista ao vídeo 
          assim o conteúdo irá ficar bastante fixado em sua mente
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

        <StyledSubtheme>Crimes contra a vida</StyledSubtheme>
        <Styledp>Artigos 121 ao 128, nesta parte especial do código penal trataremos dos crimes que ofendem o bem 
          jurídico mais importante tutelado pelo direito penal, a vida humana.
        </Styledp>
        <Styledlink href='https://conteudojuridico.com.br/consulta/artigos/56562/breve-anlise-dos-crimes-contra-a-vida#:~:text=Conforme%20apresentado%20no%20cap%C3%ADtulo%202,artigo%20148%20do%20C%C3%B3digo%20Penal.' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/live/1-FjhbMqXyE?feature=share' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Lesões corporais</StyledSubtheme>
        <Styledp>Artigo 129, trata do crime de lesão corporal e todas suas variações e características</Styledp>
        <Styledlink href='https://www.tjdft.jus.br/institucional/imprensa/campanhas-e-produtos/direito-facil/edicao-semanal/tipos-de-lesao-corporal#:~:text=O%20crime%20de%20les%C3%A3o%20corporal,a%20sa%C3%BAde%20de%20outra%20pessoa.' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/live/T0A7gZKqiF4?feature=share' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a honra</StyledSubtheme>
        <Styledp>Artigos 138 ao 145, neste capitulo trataremos dos crimes que ofendem a honra, que seria
          a imagem da pessoa, seja ela pública ou a concepção que a pessoa tem de si mesma
        </Styledp>
        <Styledlink href='https://enciclopediajuridica.pucsp.br/verbete/429/edicao-1/crimes-contra-a-honra' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/mTtqnQ_mvyo' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a Liberdade Individual</StyledSubtheme>
        <Styledp>Artigos 146 ao 149, nesta parte especial tutelaremos a liberdade individual, segundo bem jurídico 
          mais importante que possuímos
        </Styledp>
        <Styledlink href='https://projetotcmrj.jusbrasil.com.br/artigos/1153413233/dos-crimes-contra-a-liberdade-individual' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/live/ywno9ckYIaU?feature=share' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a inviolabilidade do domicílio</StyledSubtheme>
        <Styledp>Artigo 150, tipifica o crime de invasão de domicílio e da todas as suas características, como 
          a definição legal de domicílio e circunstâncias onde a invasão não é considerada conduta típica.
        </Styledp>
        <Styledlink href='https://ebradi.jusbrasil.com.br/artigos/477025369/crime-de-violacao-de-domicilio-modos-de-execucao-majorantes-e-excludentes' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/XVepgYSej6E' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra o Patrimônio</StyledSubtheme>
        <Styledp>Artigos 155 ao 183, estes são os crimes mais populares, nesta parte estão contidos os roubos, 
          golpes e outros crimes que tenham como objetivo lesar ou usurpar o patrimônio da vítima
        </Styledp>
        <Styledlink href='https://ccdias.jusbrasil.com.br/artigos/180440189/resumo-de-direito-penal-dos-crimes-contra-o-patrimonio' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/live/ByeqtNv6noI?feature=share' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a Dignidade Sexual</StyledSubtheme>
        <Styledp>Artigos 213 ao 234-B, aqui temos os crimes sexuais, tidos por muitos como a categoria mais 
          'despresível' de crime. Entre eles temos o estupro, o estupro de vulnerável entre outros
        </Styledp>
        <Styledlink href='https://www.estrategiaconcursos.com.br/blog/crimes-contra-a-dignidade-sexual/' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/yAy90VGGP4k' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a Saúde Pública</StyledSubtheme>
        <Styledp>Artigos 267 ao 285, este capítulo criminaliza condutas que podem causar perigo a integridade 
          da saúde dos cidadãos, causando perigo público.
        </Styledp>
        <Styledlink href='https://delizaine.jusbrasil.com.br/artigos/359235915/dos-crimes-contra-a-saude-publica-especies-dos-crimes-contra-a-incolumidade-publica#:~:text=Segundo%20CAPEZ%5B9%5D%20o%20crime,crime%20%C3%A9%20a%20sa%C3%BAde%20P%C3%BAblica.' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/x8JQoB3fciI' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a paz pública</StyledSubtheme>
        <Styledp>Artigos 286 a 288-A, tipifica as condutas que ofendem o estado de paz da sociedade e criam 
          medo no consciente coletivo.
        </Styledp>
        <Styledlink href='https://noticias.cers.com.br/noticia/dos-crimes-contra-a-paz-publica/#:~:text=crime%20ou%20criminoso-,Art.,ou%20autor%20de%20algum%20crime.' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/DHy0OSeEqII' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a Fé Pública</StyledSubtheme>
        <Styledp>Artigos 289 ao 311, trata dos crimes que ofendem a fé que os cidadãos tem nos documentos 
          públicos e dinheiro como as falsidades, sejam elas as materiais ou ideológicas.
        </Styledp>
        <Styledlink href='https://carmemrrk.jusbrasil.com.br/artigos/337596971/crimes-contra-a-fe-publica-moeda-falsa-uso-de-documento-falso-e-fraudes-em-certames-de-interesse-publico#:~:text=Crimes%20Contra%20a%20F%C3%A9%20P%C3%BAblica%20s%C3%A3o%20aqueles%20que%20possuem%20como,atuam%20diretamente%20contra%20o%20Estado.' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/TblcQ-mevfM' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes Praticados por Funcionários Públicos contra a Administração</StyledSubtheme>
        <Styledp>Artigos 312 ao 327, aqui encontramos os crimes de 'corrupção' que são os funcionários públicos 
          que agem em interesse próprio em detrimento do bem público.
        </Styledp>
        <Styledlink href='https://robsonsouto39.jusbrasil.com.br/artigos/362323761/dos-crimes-praticados-contra-a-administracao-publica-pelo-funcionario-publico' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://youtu.be/Ep88ZFDV1bc' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes Praticados por Particulares contra a Administração</StyledSubtheme>
        <Styledp>Artigos 328 ao 334-A, são as condutas praticadas por pessoas sem vínculo com a administração pública contra a mesma.</Styledp>
        <Styledlink href='https://juridicocerto.com/p/anadegrava/artigos/crimes-contra-a-administracao-publica-praticados-por-particular-1226' target='_blank'>Resumo do tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/watch?v=FrveDRGnWrE' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes em Licitações e Contratos Administrativos</StyledSubtheme>
        <Styledp>Artigos 337-E ao 337-P, crimes bem específicos que protegem a integridade das licitações e outras modalidades de contratos com a administração.</Styledp>
        <Styledlink href='https://www.estrategiaconcursos.com.br/blog/dos-novos-crimes-em-licitacoes-e-contratos-administrativos-lei-14-133-2021/' target='_blank'>Resumo do Tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/watch?v=8TpLRnaM3io' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra a Administração da Justiça</StyledSubtheme>
        <Styledp>Artigos 338 ao 359, crimes conta a administração, porém mais especificamente contra o poder judiciário e áreas correlatas.</Styledp>
        <Styledlink href='https://masterjuris.com.br/breve-resumo-dos-crimes-contra-a-administracao-da-justica/' target='_blank'>Resumo do Tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/watch?v=msIlpcUjPM8' target='_blank'>Videoaula</Styledlink>
        <br/>

        <StyledSubtheme>Crimes contra o Estado Democrático de Direito</StyledSubtheme>
        <Styledp>Artigos 359-I ao 359-T, são condutas que são consideradas atentados contra a democracia brasileira.</Styledp>
        <Styledlink href='https://www.conjur.com.br/2022-nov-13/cesar-dario-sao-tais-crimes-estado-direito#:~:text=Os%20crimes%20contra%20a%20honra,na%20Lei%20de%20Seguran%C3%A7a%20Nacional.' target='_blank'>Resumo do Tema</Styledlink>
        <br/>
        <Styledlink href='https://www.youtube.com/watch?v=XyW8WJymY1o' target='_blank'>Videoaula</Styledlink>
        <br/>

        <Styledobs>É altamente recomendável que faça o máximo possível de questões no site QConcursos, lá é disponibilizados 'trilhas de estudos' específicas para 
          o concurso que estiver fazendo, basta procurá-lo na barra de pesquisa.
        </Styledobs>

        <Styledobs>Bons estudos e boa sorte em sua jornada</Styledobs>

      </Container>

      <Footer/>
    </div>
  )
}