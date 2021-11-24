import React, { Fragment } from "react"
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import Paths from "../../Paths";

function Ferramentas(props){
const history = useHistory()

    const onPaginasAfluentes = () => {
        history.push(Paths.paginas_afluentes)
    }

    const onMudancasRelacionadas = () => {
        history.push(Paths.mudancas_relacionadas)
    }

    const onPaginasEssenciais = () => {
        history.push(Paths.paginas_essenciais)
    }

    const onVersaoparaImpressao = () => {
        history.push(Paths.versao_para_impressao)
    }

    const onLigacaoPermanente = () => {
        history.push(Paths.ligacao_permanente)
    }

    const onInformacaodaPagina = () => {
        history.push(Paths.informacao_da_pagina)
    }

    return (
        <DivFerramentas>
            <TituloFerramentas>
                Ferramentas
            </TituloFerramentas>

                <Menu  onClick={()=>onPaginasAfluentes()}> Páginas afluentes </Menu>
                
                <Menu   onClick={()=>onMudancasRelacionadas()}> Mudanças relacionadas </Menu>
                
                <Menu   onClick={()=>onPaginasEssenciais()}> Páginas essênciais </Menu>
                
                <Menu   onClick={()=>onVersaoparaImpressao()}> Versão para impressão </Menu>
                
                <Menu   onClick={()=>onLigacaoPermanente()}> Ligação permanente </Menu>
                
                <Menu   onClick={()=>onInformacaodaPagina()}> Informações da página </Menu>
                

            </DivFerramentas>
    )
}

export default Ferramentas

const TituloFerramentas = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
color: black;
font-size: 14px;
margin: 15px;
`

const DivFerramentas = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
margin: 10px;
height: 140px;
`
const Menu = styled.div`
cursor: pointer`