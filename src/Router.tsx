import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import { Edital } from './pages/Edital'
import {Conteudos} from './pages/Conteudos'

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Edital' element={<Edital/>} />
      <Route path='/Conteudos' element={<Conteudos />}/>
    </Routes>
  )
}