import { GithubLogo, InstagramLogo } from 'phosphor-react'
import {Container} from './styles'

export function Footer(){
  return(
    <Container>
      <p>Criado por Vinícius Matias <a href='https://www.instagram.com/matiasxyl_/' target='_blank'><InstagramLogo size={20} color='white'/></a> 
        <a href='https://github.com/matismurf' target='_blank'><GithubLogo size={20} color='white'/></a>
      </p>
    </Container>
  )
}