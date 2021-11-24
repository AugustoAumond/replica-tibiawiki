import React, {Fragment} from "react"
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import Paths from "../../Paths";


function HomePesq (props){

const history = useHistory()

    const OnHome = () => {
        history.push(Paths.home)
    }

    const OnRecentes = () => {
        history.push(Paths.mudancas_recentes)
    }

    return(
        <Home>
            <DivOnHome onClick={()=>OnHome()} > Home </DivOnHome>
            <DivRecentes onClick={()=>OnRecentes()} > Mudanças recentes </DivRecentes>
            Padrões de edição
            Página aleatória
            Contato
        </Home> 
    )
}

export default HomePesq

const Home = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
margin: 10px;
height: 83px;
cursor: pointer;
`

const DivOnHome = styled.div`
`

const DivRecentes = styled.div`

`