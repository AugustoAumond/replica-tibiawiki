import React from 'react';
import styled from 'styled-components';
import { Rashid, BossDia  }  from './dreamcourts';
const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`;
console.log('TESTE ENV =>', process.env);

function InfoDiaria (props){
    return (
    <InfoDia>
        <CriaturadoDia>
            <DivTitulo>
                <DivFlex>
                    <ImgBest src="imagens/Bestiary.gif" />
                    <DivTexto> Criatura do Dia </DivTexto>
                </DivFlex>
            </DivTitulo>
            <DivCriatureBoost>
                <ImgPedestal src="https://www.tibiawiki.com.br/images/b/ba/Boosted_Creature_Pedestal.gif"/>
                <ImgBoost src="https://www.tibiawiki.com.br/images/8/82/Wolf.gif" />
                <DivFlex2 ><NomeCreature> Wolf </NomeCreature></DivFlex2>
            </DivCriatureBoost>
        </CriaturadoDia>
        <BossDream>
            <DivTitulo>
                <DivFlex>
                    <ImgDream src="https://www.tibiawiki.com.br/images/thumb/5/50/Dream_Talisman_%28Piso%29_1.gif/40px-Dream_Talisman_%28Piso%29_1.gif" />
                    <DivTexto> Criatura do Dia </DivTexto>
                </DivFlex>
            </DivTitulo>
            <DivCriatureBoost>
                <ImgPedestal src="https://www.tibiawiki.com.br/images/b/ba/Boosted_Creature_Pedestal.gif"/>
                <ImgBoost1 src={BossDia().foto} />
                <DivFlex2 ><NomeCreature1> {BossDia().nome} </NomeCreature1></DivFlex2>
            </DivCriatureBoost>
        </BossDream>
        <DivRashid>
            <DivTitulo>
                <DivFlex>
                    <ImgRashid src="https://www.tibiawiki.com.br/images/thumb/8/8b/Small_Treasure_Chest.gif/30px-Small_Treasure_Chest.gif" />
                    <DivTexto> Criatura do Dia </DivTexto>
                </DivFlex>
            </DivTitulo>
            <DivCidadeRashid  fotocidade={Rashid().foto}>
                <ImgPedestal src="https://www.tibiawiki.com.br/images/b/ba/Boosted_Creature_Pedestal.gif"/>
                <ImgBoost2 src="https://www.tibiawiki.com.br/images/f/f5/Rashid.gif" />
                <DivFlex2 ><Cidade> { Rashid().cidade} </Cidade></DivFlex2>
            </DivCidadeRashid>
        </DivRashid>
    </InfoDia>
    )
}

export default InfoDiaria

const InfoDia = styled.div`
display:flex;
width: 82%;
height: 169px;
`

const CriaturadoDia =styled.div`
background: red;
margin-left: 10px;
margin-right: 5px;
width: 30%;
height: 167px;
border-radius: 15px;
border: solid 1px;
`

const DivTitulo = styled.div`
background: linear-gradient(to right,#d42929,#f53f05);
border-radius: 15px;
height: 55px;

`

const DivFlex = styled.div`
display:flex;
`

const ImgBest = styled.img`
display: flex;
font-size: 30px;
margin-top: 10px;
`

const ImgPedestal = styled.img`
display: inline-block;
margin: 6px 88px -11px 70px;
width: 97px;
height: 90px;
`

const ImgBoost = styled.img`    
display: block;
margin: -85px 79px -15px 75px;
width: 90px;
height: 72px;
`

const DivTexto = styled.div`
display: flex;
font-size: 18px;
color: white;
margin-top: 15px;
margin-left: 15px;
`

const DivFlex2 = styled.div`
display:flex;
background: white;
border-radius: 0px 0px 15px 15px;
height: 38px;
margin-top: 25px;
`

const NomeCreature = styled.div`
color: black;
margin: 22px 104px;
margin-top: 10px;
font-size: 20px;
`

const DivCriatureBoost = styled.div`
margin-top: -12px;
height: 75%;
border-radius: 1px 1px 13px 15px;
background-image: url(https://www.tibiawiki.com.br/images/b/b4/Boosted_Creature_BG.png);`



const BossDream = styled.div`
background: red;
margin-left: 10px;
margin-right: 5px;
width: 30%;
height: 167px;
border-radius: 15px;
border: solid 1px;
`

const ImgBoost1 = styled.img`    
display: block;
margin: -85px 79px -15px 80px;
width: 65px;
height: 72px;
`
 const ImgDream = styled.img`
 display: flex;
font-size: 30px;
margin-top: 4px;
`

const NomeCreature1 = styled.div`
color: black;
margin: 22px 85px;
margin-top: 10px;
font-size: 20px;
`

const DivRashid = styled.div`
margin-left: 10px;
margin-right: 5px;
width: 30%;
height: 167px;
border-radius: 15px;
border: solid 1px;
`

const ImgBoost2 = styled.img`    
display: block;
margin: -100px 82px 25px 86px;
width: 65px;
height: 72px;
`

 const ImgRashid = styled.img`
display: flex;
font-size: 30px;
margin-top: 4px;
`

const Cidade = styled.div`
display: flex;
color: black;
font-size: 20px;
align-items: center;
margin-left: 75px;
margin-top: -3px;    
width: 100%;
`

const DivCidadeRashid = styled.div`
margin-top: -12px;
height: 75%;
border-radius: 1px 1px 13px 15px;
background-image: url('${props =>(props.fotocidade)}');`
