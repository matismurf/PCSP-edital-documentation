import {
  HeaderContainer,
  HeaderContent,
  LinkComponent,
  Logo,
  Styledspan,
} from './styles'
import logoImg from '../../assets/logo2.jpg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Styledspan>
          <Logo src={logoImg} />
          <a href='/'>Polícia Civil Doc</a>   
        </Styledspan>

        <LinkComponent href="/Edital">Edital</LinkComponent>
        <LinkComponent href="/Conteudos">Conteúdos</LinkComponent>
        <LinkComponent href="https://www.vunesp.com.br/candidato" target="_blank">Vunesp</LinkComponent>
        <LinkComponent href="https://www.google.com/search?q=policia+civil+sp+concurso&sxsrf=AJOqlzWfff_xgeuooguv8hA37QWBLxzv1A:1673614182951&source=lnms&tbm=nws&sa=X&ved=2ahUKEwj4pPbWysT8AhVWppUCHQ9zCGQQ_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1"  target="_blank">
          Notícias</LinkComponent>
      </HeaderContent>
    </HeaderContainer>
  )
}
