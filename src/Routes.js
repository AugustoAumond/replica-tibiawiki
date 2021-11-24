import {renderRoutes} from  "react-router-config";
import PageRoutes from "./components/pageroutes/PageRoutes";
import Paths, {route} from "./Paths";
import HomePage from "./modulos/homepage/HomePage";
import Achievments from "../src/modulos/biblioteca/rotas/achievements/Achievments";
import Mudancas from "./modulos/home opcoes/rotas/mudancas recentes/Mudancas";
import PadraodeEdicao from "./modulos/home opcoes/rotas/padrao de edicao/PadraodeEdicao";
import PaginaAleatoria from "../src/modulos/home opcoes/rotas/paginas aleatorias/PaginaAleatoria";
import Contato from "../src/modulos/home opcoes/rotas/contato/Contato"
import BibliotecaRota from "./modulos/biblioteca/rotas/biblioteca/Biblioteca";
import Calculadora from "./modulos/biblioteca/rotas/calculadoras/Calculadora";
import Casa from "./modulos/biblioteca/rotas/casas/Casa"
import Criaturas from "./modulos/biblioteca/rotas/criaturas/Criaturas"
import Imbuiment from "./modulos/biblioteca/rotas/imbuiment tool/Imbuiment";
import Itens from "./modulos/biblioteca/rotas/itens/Itens"
import LocaisdeCaca from "./modulos/biblioteca/rotas/locais de caça/Locais de caca";
import Magias from "./modulos/biblioteca/rotas/magias/Magias";
import Mapas from "./modulos/biblioteca/rotas/mapa/Mapas";
import MiniWorldChanges from "./modulos/biblioteca/rotas/mini world changes/Mini world changes";
import Montarias from "./modulos/biblioteca/rotas/montarias/Montarias";
import NPCs from "./modulos/biblioteca/rotas/npcs/NPCs";
import Objetos from "./modulos/biblioteca/rotas/objetos/Objetos";
import Outfiters from "./modulos/biblioteca/rotas/outfiters/Outfiters";
import Outfits from "./modulos/biblioteca/rotas/outfits/Outfits";
import Runas from "./modulos/biblioteca/rotas/runas/Runas";
import TasksDiarias from "./modulos/biblioteca/rotas/tasks diárias/Tasks Diarias";
import Updates from "./modulos/biblioteca/rotas/updates/Updates";
import WorldChanges from "./modulos/biblioteca/rotas/world changes/World Changes";
import WorldQuests from "./modulos/biblioteca/rotas/world quests/World Quests";
import PaginasAfluentes from "./modulos/ferramentas/rotas/paginas afluentes/Paginas Afluentes";
import InformacaodaPagina from "./modulos/ferramentas/rotas/informacao da pagina/Informacao da Pagina";
import LigacaoPermanente from "./modulos/ferramentas/rotas/ligacao permanente/Ligacao Permanente";
import MudancasRelacionadas from "./modulos/ferramentas/rotas/mudancas relacionadas/Mudancas Relacionadas";
import PaginasEssenciais from "./modulos/ferramentas/rotas/paginas essenciais/Paginas Essenciais";
import VersaoparaImpressao from "./modulos/ferramentas/rotas/versao para impressao/Versao para Impressao";
import Recente1 from "./modulos/noticias recentes/recente 1/Recete1";
import Recente2 from "./modulos/noticias recentes/recente 2/recente2";
import Recente3 from "./modulos/noticias recentes/recente 3/Recente3";
import Recente4 from "./modulos/noticias recentes/recente 4/Recente4";
import Login from "./modulos/inicio/rotas/login/Login";
import CodigoFonte from "./modulos/inicio/rotas/codigo fonte/Codigo Fonte";
import CriarConta from "./modulos/inicio/rotas/criar conta/Criar Conta";
import Discussao from "./modulos/inicio/rotas/discussao/Discussao";
import Historico from "./modulos/inicio/rotas/historico/Historico";



export const routes = [
    route (Paths.home, HomePage),
    route (Paths.achievments, Achievments),
    route (Paths.mudancas_recentes, Mudancas),
    route (Paths.padrao_de_edicao, PadraodeEdicao),
    route (Paths.paginas_aleatorias, PaginaAleatoria ),
    route (Paths.contatos, Contato), 
    route (Paths.biblioteca, BibliotecaRota), 
    route (Paths.calculador, Calculadora),
    route (Paths.casas, Casa),
    route (Paths.criaturas, Criaturas),
    route (Paths.imbuement_tool, Imbuiment),
    route (Paths.itens, Itens),
    route (Paths.locais_de_caça, LocaisdeCaca),
    route (Paths.magias, Magias),
    route (Paths.mapa, Mapas),
    route (Paths.mini_world_changes, MiniWorldChanges),
    route (Paths.montarias, Montarias),
    route (Paths.npcs, NPCs),
    route (Paths.objetos, Objetos),
    route (Paths.outfiters, Outfiters),
    route (Paths.outfits, Outfits),
    route (Paths.runas, Runas),
    route (Paths.tasks_diarias, TasksDiarias),
    route (Paths.updates, Updates),
    route (Paths.world_changes, WorldChanges),
    route (Paths.world_quests, WorldQuests),
    route (Paths.paginas_afluentes, PaginasAfluentes),
    route (Paths.informacao_da_pagina, InformacaodaPagina),
    route (Paths.ligacao_permanente, LigacaoPermanente),
    route (Paths.mudancas_relacionadas, MudancasRelacionadas),
    route (Paths.paginas_essenciais, PaginasEssenciais),
    route (Paths.versao_para_impressao, VersaoparaImpressao),
    route (Paths.recente1, Recente1),
    route (Paths.recente2, Recente2),
    route (Paths.recente3, Recente3),
    route (Paths.recente4, Recente4),
    route (Paths.login, Login),
    route (Paths.codigo_fonte, CodigoFonte),
    route(Paths.criar_conta, CriarConta),
    route(Paths.discussao, Discussao),
    route (Paths.historico, Historico),
];


export default renderRoutes([
    {
        component:PageRoutes,
        routes,
    }
])