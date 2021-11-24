import React, { Fragment } from "react"
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom'
import Paths from "../../Paths";


function Options (){
const history = useHistory();
    const onHome = () => {
        history.push(Paths.home)
    }    

    const onRecentes = () => {
        history.push(Paths.mudancas_recentes)
    }

    const onEdicao = () => {
        history.push(Paths.padrao_de_edicao)
    }

    const onPagina = () => {
        history.push(Paths.paginas_aleatorias)
    }

    const onContato = () => {
        history.push(Paths.contatos)
    }

    return (
        <Home>
            <Menu onClick={()=>onHome()}> Home </Menu>

            <Menu onClick={()=>onRecentes()}> Mudanças recentes </Menu>

            <Menu onClick={()=>onEdicao()}> Padrões de edição</Menu>

            <Menu onClick={()=>onPagina()}> Página aleatória </Menu>
            
            <Menu onClick={()=>onContato()}> Contato </Menu> 
        </Home> 
    )
}

export default Options

const Home = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
margin: 10px;
height: 83px;
`

const Menu = styled.div`
cursor: pointer;`

const Menu2 = styled.div`
cursor: pointer;`
