 const Paths = {
    home: '/home',
    achievments: '/achievments',
    biblioteca: '/biblioteca',
    calculador: '/calculadoras',
    casas: '/casas',
    criaturas: '/criaturas',
    imbuement_tool: '/imbuement_tool',
    itens: '/itens',
    locais_de_caça: '/locais_de_caça',
    magias: '/magias',
    mapa: '/mapa',
    mini_world_changes: '/mini_world_changes',
    montarias: '/montarias',
    mudancas_recentes: '/mudancas_recentes',
    npcs: '/npcs',
    objetos: '/objetos',
    outfiters: '/outfiters',
    outfits: '/outfits',
    quests: '/quests',
    padrao_de_edicao: '/padrao_de_edicao',
    runas: '/runas',
    tasks_diarias: '/tasks_diarias',
    updates: '/updates',
    world_changes: '/world_changes',
    world_quests: '/world_quests',
    contatos: '/contatos',
    paginas_aleatorias: '/paginas_aleatorias',
    paginas_afluentes: '/paginas_afluentes',
    mudancas_relacionadas: '/mudancas_relacionadas',
    paginas_essenciais: '/paginas_essenciais',
    versao_para_impressao: '/versao_para_impressao',
    ligacao_permanente: '/ligacao_permanente',
    informacao_da_pagina: '/informacao_da_pagina',
    recente1: '/recente1',
    recente2: '/recente2',
    recente3: '/recente3',
    recente4: '/recente4',
    criar_conta: '/criar_conta',
    login: '/login',
    discussao: '/discussao',
    codigo_fonte: '/codigo_fonte',
    historico: '/historico',
    

    // ==================================================
    // Validar rotas existentes
    // ==================================================

  get existRoutes() {
    return [
      `^${this.home}$`,
      `^${this.achievments}$`,
      `^${this.biblioteca}$`,
      `^${this.calculador}$`,
      `^${this.casas}$`,
      `^${this.criaturas}$`,
      `^${this.imbuement_tool}$`,
      `^${this.itens}$`,
      `^${this.locais_de_caça}$`,
      `^${this.magias}$`,
      `^${this.mapa}$`,
      `^${this.mini_world_changes}$`,
      `^${this.montarias}$`,
      `^${this.mudancas_recentes}$`,
      `^${this.npcs}$`,
      `^${this.objetos}$`,
      `^${this.outfiters}$`,
      `^${this.outfits}$`,
      `^${this.padrao_de_edicao}$`,
      `^${this.runas}$`,
      `^${this.tasks_diarias}$`,
      `^${this.updates}$`,
      `^${this.world_changes}$`,
      `^${this.world_quests}$`,
      `^${this.paginas_aleatorias}$`,
      `^${this.contatos}$`,
      `^${this.quests}$`,
      `^${this.paginas_afluentes}$`,
      `^${this.mudancas_relacionadas}$`,
      `^${this.paginas_essenciais}$`,
      `^${this.versao_para_impressao}$`,
      `^${this.ligacao_permanente}$`,
      `^${this.informacao_da_pagina}$`,
      `^${this.recente1}$`,
      `^${this.recente2}$`,
      `^${this.recente3}$`,
      `^${this.recente4}$`,
      `^${this.criar_conta}$`,
      `^${this.login}$`,
      `^${this.historico}$`,
      `^${this.codigo_fonte}$`,
      `^${this.discussao}$`,

      
    ];
  },
  exist(route) {
    return this.existRoutes.find(path => RegExp(path).test(route));
  },

}

export default Paths;

export const route = (path, component) => ({

path, component, exact: true})

