import React from "react"
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom'
import Paths from "../../../../Paths";

function Mudancas(){

    const history = useHistory()

        const OnHome=()=>{
            history.push(Paths.home)
        }

    return (
        
        <Voltar onClick={()=>OnHome()} >  Voltar para HomePage </Voltar>
        
    )
}

export default Mudancas


const Voltar = styled.div`
cursor: pointer;`