import Capa from './assets/hashtaurante.webp'
import './App.css'
import { Navegacao } from './Navegacao'
import { ItemCardapio } from './ItemCardapio'

export function App() {
  return <>
    <img src={Capa} alt="" className='capa'/>
    <Navegacao />
    <ItemCardapio />
  </>
}