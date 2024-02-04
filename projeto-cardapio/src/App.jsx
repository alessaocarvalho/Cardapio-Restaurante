import { useState } from 'react'
import Capa from './assets/hashtaurante.webp'
import './App.css'
import { Navegacao } from './Navegacao'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'
import { ItemCardapio } from './ItemCardapio'

export function App() {

  const paginasMenu = [
    pratosPrincipais,
    sobremesas,
    bebidas
  ]
  const [paginaSelecionada, atualizarPaginaSelecinada] = useState(0)

  return <>
    <img src={Capa} alt="" className="capa" />
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecinada}/>
    <div className="menu">
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio
        nome={item.nome}
        descricao={item.descricao}
        preco={item.preco}
        imagem={item.imagem}
      />)}
    </div>
  </>
}