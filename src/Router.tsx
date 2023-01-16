import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import { Edital } from './pages/Edital'
import {Conteudos} from './pages/Conteudos'
import {LinguaPortuguesa} from './pages/Conteudos/LinguaPortuguesa'
import {ConstituicaoFederal} from './pages/Conteudos/ContituicaoFederal'
import { DireitosHumanos } from './pages/Conteudos/DireitosHumanos'
import { CodigoPenal } from './pages/Conteudos/CodigoPenal'
import { CodigoProcessualPenal } from './pages/Conteudos/CodigoProcessualPenal'
import { LegislacaoEspecial } from './pages/Conteudos/LegislacaoEspecial'
import { DireitoAdministrativo } from './pages/Conteudos/DireitoAdministrativo'
import { Criminologia } from './pages/Conteudos/Criminologia'
import { Informatica } from './pages/Conteudos/Informatica'

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Edital' element={<Edital/>} />
      <Route path='/Conteudos' element={<Conteudos />}/>
      <Route path='/Conteudos/LinguaPortuguesa' element={<LinguaPortuguesa/>}/>
      <Route path='/Conteudos/ConstituicaoFederal' element={<ConstituicaoFederal/>}/>
      <Route path='/Conteudos/DireitosHumanos' element={<DireitosHumanos/>} />
      <Route path='/Conteudos/CodigoPenal' element={<CodigoPenal/>}/>
      <Route path='/Conteudos/CodigoProcessualPenal' element={<CodigoProcessualPenal/>}/>
      <Route path='/Conteudos/LegislacaoEspecial' element={<LegislacaoEspecial/>}/>
      <Route path='/Conteudos/DireitoAdministrativo' element={<DireitoAdministrativo/>}/>
      <Route path='/Conteudos/Criminologia' element={<Criminologia/>}/>
      <Route path='/Conteudos/Informatica' element={<Informatica/>}/>
    </Routes>
  )
}