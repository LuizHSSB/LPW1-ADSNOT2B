const produtos = {
    "435307" : {nome: "CADEIRA XEQUE", cor: "BOUCLÉ BRANCO", valor: "R$:269,99" },
    "401919" : {nome: "CADEIRA GIRATÓRIA DANDY", cor: "MUSGO/Nozes", valor: "R$:455,99" },
    "426681" : {nome: "CADEIRA DE ESCRITÓRIO COM BRAÇOS NORDI", cor: "PRETO/CAPPUCCINO", valor: "R$:399,99" },
    "431053" : {nome: "CADEIRA DE ESCRITÓRIO ORLETTI NATURAL/BRANCO", cor: "NATURAL/BRANCO", valor: "R$:549,99" },
    "431054" : {nome: "CADEIRA DE ESCRITÓRIO ORLETTI MARROM", cor: "MARROM", valor: "R$:480,99" },
    "426682" : {nome: "CADEIRA DE ESCRITÓRIO COM BRAÇOS ALTA NORDI", cor: "Preto/Preto", valor: "R$:699,99" },
    "428899" : {nome: "CADEIRA DE ESCRITÓRIO OFFICE ALTA PERSÉFONE", cor: "PRETO", valor: "R$:589,99" },
    "428900" : {nome: "CADEIRA DE ESCRITÓRIO OFFICE BAIXA PERSÉFONE", cor: "PRETO", valor: "R$:569,99" },
    "426577" : {nome: "CADEIRA DE ESCRITÓRIO OFFICE", cor: "PRETO", valor: "R$:539,99" },
    "499813" : {nome: "CADEIRA DE ESCRITÓRIO OFFICE BAIXA", cor: "CINZA", valor: "R$:399,99" },
    "411618" : {nome: "MESA 1,65 M X 90 CM CRATES", cor: "CASTANHO", valor: "R$:289,99" },
    "432737" : {nome: "MESA LATERAL CONJUNTO COM 2 PEÇAS LOOP", cor: "AREIA", valor: "R$:490,99" },
    "430614" : {nome: "MESA DE CENTRO REDONDA 70 CM PIRIZ", cor: "AREIA", valor: "R$:899,99" },
    "376661" : {nome: "MESA DE CENTRO COM 1 GAVETA 1,30 M X 52 CM MASCAVO", cor: "Incolor/Nozes", valor: "R$:599,99" },
    "309002" : {nome: "MESA LATERAL CONJUNTO COM 2 PEÇAS SEQUENCE", cor: "Incolor/Nozes", valor: "R$:799,99" },
    "430616" : {nome: "MESA LATERAL REDONDA 50 CM PIRIZ", cor: "AREIA", valor: "R$:599,99" },
    "433214" : {nome: "MESA DE JANTAR ROMANA L 1 CM X A 77 CM X C 18 CM", cor: "AMÊNDOA", valor: "R$:1.699,99" },
    "332261" : {nome: "MESA DE JANTAR LINTZ L 219 CM X A 75.5 CM X C 110 CM", cor: "OFF-WHITE FOSCO, BEGE E CHAMPANHE", valor: "R$:1.589,99" },
    "446932" : {nome: "MESA LEOPARDO A 35 CM X L 22 CM X C 15 CM", cor: "AMARELO, BRANCO E MARROM", valor: "R$:1.999,99" },
    "535540" : {nome: "MESA ARIEL L 9 CM X A 77 CM X C 16 CM", cor: "PINHÃO", valor: "R$:1.119,99" },
    "179970" : {nome: "BASE PARA CAMA BOX KING 1,93 M MAX", cor: "Branco", valor: "R$:1.299,99" },
    "436016" : {nome: "PUFF 45 CM X 45 CM FLORA CAMINHOS DO SOL", cor: "Verde/Rosa", valor: "R$:59,99" },
    "429972" : {nome: "SOFÁ-CAMA 3 LUGARES BUZZ", cor: "Bege", valor: "R$:2.799,99" },
    "406652" : {nome: "ÁRVORE DE NATAL CELEBRATION 1,50 M", cor: "Verde", valor: "R$:99,99" },
    "433447" : {nome: "ALMOFADA 50 CM X 50 CM DRESSAGE", cor: "TANINO/LODEN GREEN", valor: "R$:199,99" },
    "433527" : {nome: "TAPETE 2 M X 2,50 M SARGI", cor: "NATURAL", valor: "R$:399,99" },
    "429900" : {nome: "LUMINÁRIA DE TETO ANSBACH L 60 X A 3.5 X P 60 CM", cor: "BRANCO", valor: "R$:599,99" },
    "430302" : {nome: "LUSTRE ATHENA L 80 X A 40 X P 80 CM", cor: "BRANCO", valor: "R$:889,99" },
    "435547" : {nome: "LUMINÁRIA FAITHFUL", cor: "PRATA", valor: "R$:319,99" },
    "495367" : {nome: "LUMINÁRIA LIV", cor: "DOURADO", valor: "R$:459,99" }
};

document.querySelector("#produtoSelecionado-0").addEventListener("change",function(){
    const OpcaoSelecionada = this.options[this.selectedIndex];
    const opcaoID = OpcaoSelecionada.id;
}
document.querySelector("#produtoSelecionado-1").addEventListener("change",function(){

}
document.querySelector("#produtoSelecionado-2").addEventListener("change",function(){

}
document.querySelector("#produtoSelecionado-3").addEventListener("change",function(){

}
document.querySelector("#produtoSelecionado-4").addEventListener("change",function(){

}








































// document.querySelectorAll('select[id^="produtoSelecionado"]').forEach((selectElement) => {
//     selectElement.addEventListener('change', (event) => {
//         const produtoId = event.target.selectedOptions[0].id.split('-')[0];
//         const rowIndex = event.target.id.split('-')[1];

//         if (produtos[produtoId]) {
//             document.getElementsByName(`descricao${parseInt(rowIndex) + 1}`)[0].value = produtos[produtoId].descricao;
//             document.getElementsByName(`valorUnitario${parseInt(rowIndex) + 1}`)[0].value = produtos[produtoId].preco.toFixed(2);
//         }
//     });
// });

// document.querySelectorAll('input[name^="quantidade"]').forEach((inputElement) => {
//     inputElement.addEventListener('input', (event) => {
//         const rowIndex = event.target.name.replace('quantidade', '');
//         const quantidade = parseFloat(event.target.value) || 0;
//         const valorUnitario = parseFloat(document.getElementsByName(`valorUnitario${rowIndex}`)[0].value) || 0;

//         const valorTotal = quantidade * valorUnitario;
//         document.getElementsByName(`valorTotal${rowIndex}`)[0].value = valorTotal.toFixed(2);
//     });
// });
