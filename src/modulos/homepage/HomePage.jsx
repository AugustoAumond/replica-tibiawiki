import React, { Fragment } from "react"
import styled from 'styled-components/macro';
import Cabecalho from '../cabecalho/Cabecalho';
import Inicio from '../inicio/Inicio';
import Options from "../home opcoes/HomeOptions";
import Biblioteca from "../biblioteca/Biblioteca";
import Ferramentas from "../ferramentas/Ferramentas";
import NoticiasRecentes from "../noticias recentes/Noticias Recentes";
import InfoDiaria from "../infodiaria/InfoDiaria";
import DivWiki from "../divwiki/DivWiki.jsx";
import MaisAcessados from "../maisacessados/MaisAcessados";
const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`;
console.log('TESTE ENV =>', process.env);

function HomePage() {
    
    return(
        <Fragment>

            <Cabecalho/>

            <Corpo>

                <Inicio/>

                    <DivLateral>
                        <LogoFerrumbras src="imagens/LogoFerrumbras.png"/>
                        
                        <Options/>

                        <Biblioteca/>

                        <Ferramentas/>

                    </DivLateral> 

                    <NoticiasRecentes/>

                    <DivCorpo>

                        <InfoDiaria />  
                        
                        <DivWiki />

                    </DivCorpo>

                    <DivMaisAcessados>

                        <MaisAcessados/>

                    </DivMaisAcessados>
                    
                    

            </Corpo>
        </Fragment>
    )
}

export default HomePage;


const Corpo = styled.div`
`

const DivLateral = styled.div`
color: #2d7ec3eb;
height: 100%;
width: 145px;
margin-top: -50px;
font-size: 12px;
`

const LogoFerrumbras = styled.img`
height: 145px;
width: 145px;
`
const DivCorpo = styled.div`
display: flex;
margin-left: 140px;
margin-top: -620px;
height: 100%;
width: 80%;
`

const DivMaisAcessados = styled.div`
display: flex;
margin-top: 900px;
margin-left: 140px;
margin-top: 620px;
height: 100%;
width: 80%;
border: solid 1px;`