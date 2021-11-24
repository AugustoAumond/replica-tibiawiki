import React, { Fragment } from "react"
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function Inicio (){
    return (
                <DivInicio>
                    <DivRight>
                        <DivText>
                        <a href=""> Crie uma conta</a>
                        <a href=""> Entrar</a>
                        </DivText>
                    </DivRight>
                    <Rowl> 
                        <DivLeft>
                        <a href=""> Pagina principal</a>
                        <a href=""> Discussão</a>
                        </DivLeft>
                        <DivRight2>
                        <a href=""> Ler</a>
                        <a href=""> Ver Código Fonte </a>
                        <a href=""> Ver Histórico</a>
                            <DivSearch>
                                <InputSearch placeholder="Pesquisar em tibia wiki"/>
                                <IconLupa icon={faSearch} onClick="" />
                            </DivSearch>
                        </DivRight2>
                    </Rowl> 
                </DivInicio> 
            )
        }

export default Inicio

const DivInicio = styled.div`
color: #000;
font-size: 12px;
height: 60px;
width: 100%;
border-top: solid 1px #00000040;
`
        
const DivRight = styled.div`
width: 150px;
height: 25px;
float: right;
`
        
const Rowl = styled.div`
display: flex;
justify-content: space-between;
margin-top: 25px;
width: 100%
`
        
const DivText = styled.div`
display: flex;
justify-content: space-between;
margin: 3px;
`
        
const DivLeft = styled.div`
display: flex;
justify-content: space-between;
margin-left: 175px;
width: 165px;
`
        
const DivRight2 = styled.div`
display: flex;
justify-content: space-between;
margin-right: 10px;
width: 450px;
`

const DivSearch = styled.div`
`

const InputSearch = styled.input`
`

const IconLupa = styled(FontAwesomeIcon)`
font-size: 14px;
margin-left: 4px;
margin-right: 4px;
`