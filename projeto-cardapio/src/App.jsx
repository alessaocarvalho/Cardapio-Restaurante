import Capa from './assets/hashtaurante.webp'
import './App.css'
import { Navegacao } from './Navegacao'

export function App() {
  return <>
    <img src={Capa} alt="" className='capa'/>
    <Navegacao />
  </>
}