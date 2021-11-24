import React  from "react"
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Paths from "../../Paths";


function Inicio (props) {
const history = useHistory()

    const onCriarConta = () =>{
        history.push(Paths.criar_conta)
    }

    const onLogin = () =>{
        history.push(Paths.login)
    }

    const onHome = () =>{
        history.push(Paths.home)
    }

    const onDiscussao = () =>{
        history.push(Paths.discussao)
    }

    const onCodigoFonte = () =>{
        history.push(Paths.codigo_fonte)
    }

    const onHistorico = () =>{
        history.push(Paths.historico)
    }

    return (

        <DivInicio>
            <DivRight>
                <DivText>
                    <Menu   onClick={()=>onCriarConta()}> Crie uma conta </Menu> 
                    <Menu   onClick={()=>onLogin()}>  Entrar </Menu>
                </DivText>
            </DivRight>
            <Rowl> 
                <DivLeft>
                    <Menu   onClick={()=>onHome()}>  Pagina principal </Menu>
                    <Menu   onClick={()=>onDiscussao()}>  Discussão </Menu>
                </DivLeft>
                <DivRight2>
                    <Menu   onClick={()=>onHome()}>  Ler </Menu>
                    <Menu   onClick={()=>onCodigoFonte()}> Ver Código Fonte </Menu>
                    <Menu   onClick={()=>onHistorico()}> Ver Histórico    </Menu>
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

const Menu = styled.div`
cursor:pointer;`

const DivInicio = styled.div`
color: #000;
font-size: 15px;
height: 75px;
width: 100%;
margin-bottom: 30px;
`

const DivRight = styled.div`
width: 150px;
height: 25px;
float: right;
`

const Rowl = styled.div`
display: flex;
justify-content: space-between;
padding: 21px 1px;
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