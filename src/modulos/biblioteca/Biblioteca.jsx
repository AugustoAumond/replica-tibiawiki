import React, { Fragment } from "react"
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom'
import Paths from "../../Paths";

function Biblioteca (props){
    const history = useHistory()

    const onAchievments = () => {
        history.push(Paths.achievments)
    }

    const onBiblioteca = () => {
        history.push(Paths.biblioteca)
    }

    const onCalculadora = () => {
        history.push(Paths.calculador)
    }

    const onCasa = () => {
        history.push(Paths.casas)
    }

    const onCriaturas = () => {
        history.push(Paths.criaturas)
    }

    const onImbuimentsTools = () => {
        history.push(Paths.imbuement_tool)
    }

    const onItens = () => {
        history.push(Paths.itens)
    }

    const onLocaisdeCaca = () => {
        history.push(Paths.locais_de_caça)
    }

    const onMagias = () => {
        history.push(Paths.magias)
    }

    const onMapa = () => {
        history.push(Paths.mapa)
    }

    const onMiniWorldChanges = () => {
        history.push(Paths.mini_world_changes)
    }

    const onMontarias = () => {
        history.push(Paths.montarias)
    }

    const onNPCs = () => {
        history.push(Paths.npcs)
    }

    const onObjetos = () => {
        history.push(Paths.objetos)
    }

    const onOutfiters = () => {
        history.push(Paths.outfiters)
    }

    const onOutfits = () => {
        history.push(Paths.outfits)
    }

    const onQuests = () => {
        history.push(Paths.quests)
    }

    const onRunas = () => {
        history.push(Paths.runas)
    }

    const onTasksDiarias = () => {
        history.push(Paths.tasks_diarias)
    }

    const onUpdates = () => {
        history.push(Paths.updates)
    }

    const onWorldChanges = () => {
        history.push(Paths.world_changes)
    }

    const onWorldQuests = () => {
        history.push(Paths.world_quests)
    }

    

    return(
        <DivBiblioteca>
            <TituloBi>
                Biblioteca
            </TituloBi>
                 <Menu onClick={()=>onAchievments()}> Achievements </Menu>

                <Menu onClick={()=>onBiblioteca()}> Biblioteca </Menu>

                <Menu onClick={()=>onCalculadora}> Calculadoras </Menu>

                <Menu onClick={()=>onCasa()}>Casas</Menu>

                <Menu onClick={()=>onCriaturas()}>Criaturas</Menu>

                <Menu onClick={()=>onImbuimentsTools()}>Imbuement Tool</Menu>

                <Menu onClick={()=>onItens()}>Itens</Menu>

                <Menu onClick={()=>onLocaisdeCaca()}>Locais de Caça</Menu>

                <Menu onClick={()=>onMagias()}>Magias</Menu>

                <Menu onClick={()=>onMapa()}>Mapa</Menu>

                <Menu onClick={()=>onMiniWorldChanges}>Mini World Changes</Menu>

                <Menu onClick={()=>onMontarias()}>Montarias</Menu>

                <Menu onClick={()=>onNPCs()}>NPCs</Menu>

                <Menu onClick={()=>onObjetos()}>Objetos</Menu>

                <Menu onClick={()=>onOutfiters()}>Outfiters</Menu>

                <Menu onClick={()=>onOutfits()}>Outfits</Menu>

                <Menu onClick={()=>onQuests()}>Quests</Menu>

                <Menu onClick={()=>onRunas()}>Runas</Menu>

                <Menu onClick={()=>onTasksDiarias()}>Tasks Diárias</Menu>

                <Menu onClick={()=>onUpdates()}>Updates</Menu>

                <Menu onClick={()=>onWorldChanges()}>World Changes</Menu>

                <Menu onClick={()=>onWorldQuests()}>World Quests</Menu>

            </DivBiblioteca>
    )
}

export default Biblioteca

const TituloBi = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
color: black;
font-size: 14px;
margin: 15px;
`

const DivBiblioteca = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
margin: 10px;
height: 400px;
`

const Menu = styled.div`
cursor: pointer;
`