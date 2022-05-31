
//selecion containers
const containerEx1 = document.querySelector('#ex-1 h2');
const containerEx2 = document.querySelector('#ex-2 h2');
const containerEx3 = document.querySelector('#ex-3 h2');

//pega data atual
const dtLocal = new Date();

//adiciona na exibição
containerEx1.innerHTML = dtLocal.toLocaleDateString('pr-BR',{dateStyle:'full'});
containerEx2.innerHTML = separaDatasHoras(dtLocal);
containerEx3.innerHTML = getNomeDoDia(dtLocal);


//funcoes
function separaDatasHoras(dtSepara){
    const dia = dtSepara.getDate();
    const mes = dtSepara.getMonth()+1;
    const ano = dtSepara.getFullYear();
    const hora = dtSepara.getHours();
    const minutos = dtSepara.getMinutes();

    return `Dia: ${dia} <br /> Mes: ${mes} <br /> Ano: ${ano} <br /> 
    Hora: ${hora} <br /> Minutos: ${minutos} <br />`

}

function getNomeDoDia(dtHoje){
    const diaDaSemana = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', ];
    return diaDaSemana[dtHoje.getDay()];
}
