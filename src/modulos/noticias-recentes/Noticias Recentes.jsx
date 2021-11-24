import React, { Fragment } from "react"
import styled from 'styled-components/macro';
import { useHistory } from "react-router";
import Paths from "../../Paths";
const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`;
console.log('TESTE ENV =>', process.env);

function NoticiasRecentes (){
const history = useHistory()
    const onRecente1 = () => {
        history.push(Paths.recente1)
    }

    const onRecente2 = () => {
        history.push(Paths.recente2)
    }

    const onRecente3 = () => {
        history.push(Paths.recente3)
    }

    const onRecente4 = () => {
        history.push(Paths.recente4)
    }

    return(
        <DivNoticiasRecentes>
            <Recente1>
                <ImgRe1 src="imagens/Tree.png"/>
                <DivImgRe1>
                    <h1> Update de Verão de 2021</h1>
                </DivImgRe1>
                <TextoRe1> 
                    Confira as novidades do Update de Verão 2021! Novas Hunts, Quests e muito mais! <Menu   onClick={()=>onRecente1()}> Saiba mais ➔  </Menu> 
                </TextoRe1>
            </Recente1>
            <Recente2>
                <ImgRe2 src="imagens/Yselda.gif"/>
                <DivImgRe2>
                    <h1> Adventures of Galthen Quest </h1>
                </DivImgRe2>
                <TextoRe2> 
                    A guerra civil de Bounac foi apenas o começo... agora descubra o destino de Yselda! <Menu   onClick={()=>onRecente2()}> Saiba mais ➔  </Menu> 
                </TextoRe2>
            </Recente2>
            <Recente3>
                <ImgRe3 src="imagens/Brainsteeler.gif"/>
                <DivImgRe3>
                    <h1>To Hot to Handle Quest</h1>
                </DivImgRe3>
                <TextoRe3> 
                    A guerra contra os lordes do abismo se intensifica, enfrente os perigos das novas Warzones! <Menu   onClick={()=>onRecente3()}> Saiba mais ➔  </Menu> 
                </TextoRe3>
            </Recente3>
            <Recente4>
                <ImgRe4 src="imagens/discord.png"/>
                <DivImgRe4>
                    <h1>Discord Tibiawiki BR</h1>
                </DivImgRe4>
                <TextoRe4> 
                    Conecte-se conosco na plataforma para sugerir edições e melhorias! <Menu   onClick={()=>onRecente4()}> Saiba mais ➔  </Menu> 
                </TextoRe4>
            </Recente4>
        </DivNoticiasRecentes>
    )
}

export default NoticiasRecentes

const Menu = styled.div`
font-weight: 700;
color: blue;
cursor:pointer`

const DivNoticiasRecentes = styled.div`
display: flex;
justify-content: space-between;
float: right;
height: 140px;
width: 85%;
margin-right: 25px;
margin-top: -788px;
`

const Recente1 = styled.div`
width: 22%;
margin-left: 8px;
border-radius: 15px;
border: solid 1px #15ccc0;
`

const DivImgRe1 = styled.div`
display: flex;
font-size: 8px;
text-align: center;
float: right;
width: 75%;
margin-top: 0px;
border-radius: 10px;
`

const ImgRe1 = styled.img`
`

const TextoRe1 = styled.div`
font-size: 15px;
font-family: emoji;
text-align: justify;
height: 57%;
width: 96%;
margin-top: 4px;
margin-right: 2px;
margin-left: 2px;
border-top: 1px solid #15ccc0;
`

const Recente2 = styled.div`
width: 22%;
margin-left: 8px;
border-radius: 15px;
border: solid 1px #15ccc0;
`

const DivImgRe2 = styled.div`
display: flex;
font-size: 8px;
text-align: center;
float: right;
width: 75%;
margin-top: 0px;
border-radius: 10px;
`

const ImgRe2 = styled.img`
`

const TextoRe2 = styled.div`
font-size: 15px;
font-family: emoji;
text-align: justify;
height: 57%;
width: 96%;
margin-top: 4px;
margin-right: 2px;
margin-left: 2px;
border-top: 1px solid #15ccc0;
`

const Recente3 = styled.div`
width: 22%;
margin-left: 8px;
border-radius: 15px;
border: solid 1px #15ccc0;
`

const DivImgRe3 = styled.div`
display: flex;
font-size: 8px;
text-align: center;
float: right;
width: 75%;
margin-top: 0px;
border-radius: 10px;
`

const ImgRe3 = styled.img`
`

const TextoRe3 = styled.div`
font-size: 15px;
font-family: emoji;
text-align: justify;
height: 57%;
width: 96%;
margin-top: 4px;
margin-right: 2px;
margin-left: 2px;
border-top: 1px solid #15ccc0;
`

const Recente4 = styled.div`
width: 22%;
margin-left: 8px;
border-radius: 15px;
border: solid 1px #15ccc0;
`

const DivImgRe4 = styled.div`
display: flex;
font-size: 8px;
text-align: center;
float: right;
width: 75%;
margin-top: 0px;
border-radius: 10px;
`

const ImgRe4 = styled.img`
`

const TextoRe4 = styled.div`
font-size: 15px;
font-family: emoji;
text-align: justify;
height: 57%;
width: 96%;
margin-top: 4px;
margin-right: 2px;
margin-left: 2px;
border-top: 1px solid #15ccc0;
`