const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`;
console.log('TESTE ENV =>', process.env);
let DataAtual = new Date ;
let Dia = DataAtual.getDate('pt-br');  


export function BossDia (){
let dia = Dia + 4


    const Boss = [
        { nome: 'Plagueroot',
        foto: '	https://www.tibiawiki.com.br/images/2/24/Plagueroot.gif'
        },

        { nome: 'Malofur',
        foto: 'https://www.tibiawiki.com.br/images/3/3b/Malofur_Mangrinder.gif'
        },

        { nome: 'Maxxenius',
        foto: '	https://www.tibiawiki.com.br/images/4/4c/Maxxenius.gif'
        },

        { nome: 'Alptramun',
        foto: 'https://www.tibiawiki.com.br/images/c/c9/Alptramun.gif'
        },

        { nome: 'Izcandar',
        foto: 'https://www.tibiawiki.com.br/images/0/0f/Izcandar_the_Banished.gif'
        }
    ]
    if (dia%5 == 1) {
            return Boss[0]
        }
    else {
        if (dia%5 == 2){
            return Boss[1]
            }
        else {
            if (dia%5 == 3){
                return Boss[2]
            }
            else {
                if (dia%5 == 4){
                    return Boss[3]
                }
                else {
                    return Boss[4]
                }
            }
        }
    }
}
    



export function Rashid(){
let Semana = DataAtual.getDay('pt-br');
    const Rashid = [
        {
            cidade: 'Carlin',
            foto: 'imagens/Carlin.png'
        },
        {
            cidade: 'Svargrond',
            foto: 'imagens/Svargrond.png'
        },
        {
            cidade: 'Liberty Bay',
            foto: 'imagens/Liberty Bay.png'
        },
        {
            cidade: 'Port Hope',
            foto: 'imagens/Port Hope.png'
        },
        {
            cidade: 'Ankrahmun',
            foto: 'imagens/Ankrahmun.png'
        },
        {
            cidade: 'Darashia',
            foto: 'imagens/Darashia.png'
        },
        {
            cidade: 'Edron',
            foto: 'imagens/Edron.png'
        }
    ]
    return Rashid[Semana];
}

