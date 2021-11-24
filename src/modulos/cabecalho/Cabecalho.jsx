import React, { Fragment } from "react"
import styled from 'styled-components/macro';

function Header(props){
    return (
        <Cabecalho>
                <IMGFansit src="imagens/barrafansite3636.png" />
                <IMGTibiabr src="imagens/tibiabr3636.png" />
                <IMGLegendsbr src="imagens/legendsbr3636.png" />
                <IMGFansitsbr src="imagens/portaltibia3636.png" />
        </Cabecalho> 
    )
}

export default Header

const Cabecalho = styled.div`
display: flex;
justify-content: center;
width: 100%;
background: #f1e6e6;
`

const IMGFansit = styled.img`
padding-right: 15px;
padding-right: 15px;
`

const IMGTibiabr = styled.img`
padding-right: 15px;
padding-right: 15px;
`

const IMGLegendsbr = styled.img`
padding-right: 15px;
padding-right: 15px;
`

const IMGFansitsbr = styled.img`
padding-right: 15px;
padding-right: 15px;
`