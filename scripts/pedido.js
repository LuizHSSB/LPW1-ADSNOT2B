const selectProduto0 = document.querySelector("#produtoSelecionado-0");
const selectProduto1 = document.querySelector("#produtoSelecionado-1");
const selectProduto2 = document.querySelector("#produtoSelecionado-2");
const selectProduto3 = document.querySelector("#produtoSelecionado-3");
const selectProduto4 = document.querySelector("#produtoSelecionado-4");

let OpcaoSelecionada;
let opcaoID;

selectProduto0.addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    OpcaoSelecionada = this.options[this.selectedIndex];
    opcaoID = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
    
    switch (opcaoID){ // <- Iniciando um Switch Case, onde cada caso é o id de um produto, através de cada id criaremos uma função diferente
        case "selected":
            vazio()
        break
        case "435307-0":
            cadeiraXeque();
        break
        case "401919-0":
            cadeiraDandy();
        break
        case "426681-0":
            cadeiraNordi();
        break
        case "431053-0":
            cadeiraOrlettiWhite();
        break
        case "431054-0":
            cadeiraOrlettiBrown();
        break
        case "426682-0":
            cadeiraAltaNordy();
        break
        case "428899-0":
            cadeiraAltaPersefone();
        break
        case "428900-0":
            cadeiraBaixaPersefone();
        break
        case "426577-0":
            cadeiraOffice();
        break
        case "499813-0":
            cadeiraOfficeBaixa();
        break
        case "411618-0":
            mesaCrates();
        break
        case "432737-0":
            mesaLoop();
        break
        case "430614-0":
            mesaPiriz();
        break
        case "376661-0":
            mesaMascavo();
        break
        case "309002-0":
            mesaSequence();
        break
        case "430616-0":
            mesaPirizAlta();
        break
        case "433214-0":
            mesaRomana();
        break
        case "332261-0":
            mesaLintz();
        break
        case "446932-0":
            mesaLeopardo();
        break
        case "535540-0":
            mesaAriel();
        break
        case "179970-0":
            baseCamaKing();
        break
        case "436016-0":
            puffFlora();
        break
        case "429972-0":
            sofaCama();
        break
        case "406652-0":
            arvoreNatal();
        break
        case "433447-0":
            almofada();
        break
        case "433527-0":
            tapete();
        break
        case "429900-0":
            luminariaAnsbach();
        break
        case "430302-0":
            lustreAthena();
        break
        case "435547-0":
            faithful();
        break
        case "495367-0":
            liv();
        break
    }
});

// Aqui começam as funções que preenchem cada espaço "Descrição" e "Valor Unitário" com seus respectivos valores

function vazio(){
    document.querySelector("#descricao1").value = ""
    document.querySelector("#valorUnitario1").value = ""

    document.querySelector("#descricao2").value = ""
    document.querySelector("#valorUnitario2").value = ""
    
    document.querySelector("#descricao3").value = ""
    document.querySelector("#valorUnitario3").value = ""
    
    document.querySelector("#descricao4").value = ""
    document.querySelector("#valorUnitario4").value = ""
    
    document.querySelector("#descricao5").value = ""
    document.querySelector("#valorUnitario5").value = ""

};

function cadeiraXeque(){
    document.querySelector("#descricao1").value = "CADEIRA XEQUE, Cor: BOUCLÉ BRANCO, Id: 435307"
    document.querySelector("#valorUnitario1").value = "R$:269,99"
};
function cadeiraDandy(){
    document.querySelector("#descricao1").value = "CADEIRA GIRATÓRIA DANDY, Cor: MUSGO/Nozes, Id: 401919"
    document.querySelector("#valorUnitario1").value = "R$:455,99"
};
function cadeiraNordi(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS NORDI, Cor: PRETO/CAPPUCCINO, Id: 426681"
    document.querySelector("#valorUnitario1").value = "R$:399,99"
};
function cadeiraOrlettiWhite(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: NATURAL/BRANCO, Id: 431053"
    document.querySelector("#valorUnitario1").value = "R$:549,99"
};
function cadeiraOrlettiBrown(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: MARROM Id: 431054"
    document.querySelector("#valorUnitario1").value = "R$:480,99"
};
function cadeiraAltaNordy(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS ALTA NORDI, Cor: Preto/Preto, Id: 426682"
    document.querySelector("#valorUnitario1").value = "R$:699,99"
};
function cadeiraAltaPersefone(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO OFFICE ALTA PERSÉFONE, Cor: PRETO, Id: 428899"
    document.querySelector("#valorUnitario1").value = "R$:589,99"
};
function cadeiraBaixaPersefone(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA PERSÉFONE, Cor: PRETO, Id: 428900"
    document.querySelector("#valorUnitario1").value = "R$:569,99"
};
function cadeiraOffice(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO OFFICE, Cor: PRETO, Id: 426577"
    document.querySelector("#valorUnitario1").value = "R$:539,99"
};
function cadeiraOfficeBaixa(){
    document.querySelector("#descricao1").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA, Cor: CINZA, Id: 499813"
    document.querySelector("#valorUnitario1").value = "R$:399,99"
};
function mesaCrates(){
    document.querySelector("#descricao1").value = "MESA 1,65 M X 90 CM CRATES, Cor: CASTANHO, Id: 411618"
    document.querySelector("#valorUnitario1").value = "R$:289,99"
};
function mesaLoop(){
    document.querySelector("#descricao1").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS LOOP, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario1").value = "R$:490,99"
};
function mesaPiriz(){
    document.querySelector("#descricao1").value = "MESA DE CENTRO REDONDA 70 CM PIRIZ, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario1").value = "R$:899,99"
};
function mesaMascavo(){
    document.querySelector("#descricao1").value = "MESA DE CENTRO COM 1 GAVETA 1,30 M X 52 CM MASCAVO, Cor: Incolor/Nozes, Id: 376661"
    document.querySelector("#valorUnitario1").value = "R$:599,99"
};
function mesaSequence(){
    document.querySelector("#descricao1").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS SEQUENCE, Cor: Incolor/Nozes, Id: 309002"
    document.querySelector("#valorUnitario1").value = "R$:799,99"
};
function mesaPirizAlta(){
    document.querySelector("#descricao1").value = "MESA LATERAL REDONDA 50 CM PIRIZ, Cor: AREIA, Id: 430616"
    document.querySelector("#valorUnitario1").value = "R$:599,99"
};
function mesaRomana(){
    document.querySelector("#descricao1").value = "MESA DE JANTAR ROMANA L 1 CM X A 77 CM X C 18 CM, Cor: AMÊNDOA, Id: 433214"
    document.querySelector("#valorUnitario1").value = "R$:1.699,99"
};
function mesaLintz(){
    document.querySelector("#descricao1").value = "MESA DE JANTAR LINTZ L 219 CM X A 75.5 CM X C 110 CM, Cor: OFF-WHITE FOSCO, BEGE E CHAMPANHE, Id: 332261"
    document.querySelector("#valorUnitario1").value = "R$:1.589,99"
};
function mesaLeopardo(){
    document.querySelector("#descricao1").value = "MESA LEOPARDO A 35 CM X L 22 CM X C 15 CM, Cor: AMARELO, BRANCO E MARROM, Id: 446932"
    document.querySelector("#valorUnitario1").value = "R$:1.999,99"
};
function mesaAriel(){
    document.querySelector("#descricao1").value = "MESA ARIEL L 9 CM X A 77 CM X C 16 CM, Cor: PINHÃO, Id: 535540"
    document.querySelector("#valorUnitario1").value = "R$:1.119,99"
};
function baseCamaKing(){
    document.querySelector("#descricao1").value = "BASE PARA CAMA BOX KING 1,93 M MAX, Cor: Branco, Id: 179970"
    document.querySelector("#valorUnitario1").value = "R$:1.299,99"
};
function puffFlora(){
    document.querySelector("#descricao1").value = "PUFF 45 CM X 45 CM FLORA CAMINHOS DO SOL, Cor: Verde/Rosa, Id: 436016"
    document.querySelector("#valorUnitario1").value = "R$:59,99"
};
function sofaCama(){
    document.querySelector("#descricao1").value = "SOFÁ-CAMA 3 LUGARES BUZZ, Cor: Bege, Id: 429972"
    document.querySelector("#valorUnitario1").value = "R$:2.799,99"
};
function arvoreNatal(){
    document.querySelector("#descricao1").value = "ÁRVORE DE NATAL CELEBRATION 1,50 M, Cor: Verde, Id: 406652"
    document.querySelector("#valorUnitario1").value = "R$:99,99"
};
function almofada(){
    document.querySelector("#descricao1").value = "ALMOFADA 50 CM X 50 CM DRESSAGE, Cor: TANINO/LODEN GREEN, Id: 433447"
    document.querySelector("#valorUnitario1").value = "R$:199,99"
};
function tapete(){
    document.querySelector("#descricao1").value = "TAPETE 2 M X 2,50 M SARGI, Cor: NATURAL, Id: 433527"
    document.querySelector("#valorUnitario1").value = "R$:399,99"
};
function luminariaAnsbach(){
    document.querySelector("#descricao1").value = "LUMINÁRIA DE TETO ANSBACH L 60 X A 3.5 X P 60 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario1").value = "R$:599,99"
};
function lustreAthena(){
    document.querySelector("#descricao1").value = "LUSTRE ATHENA L 80 X A 40 X P 80 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario1").value = "R$:889,99"
};
function faithful(){
    document.querySelector("#descricao1").value = "LUMINÁRIA FAITHFUL, Cor: PRATA, Id: 435547"
    document.querySelector("#valorUnitario1").value = "R$:319,99"
};
function liv(){
    document.querySelector("#descricao1").value = "LUMINÁRIA LIV, Cor: DOURADO, Id: 495367"
    document.querySelector("#valorUnitario1").value = "R$:459,99"
};

selectProduto1.addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    OpcaoSelecionada = this.options[this.selectedIndex];
    opcaoID = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
    switch (opcaoID){ // <- Iniciando um Switch Case, onde cada caso é o id de um produto, através de cada id criaremos uma função diferente
        case "435307-1":
            cadeiraXeque1();
        break
        case "401919-1":
            cadeiraDandy1();
        break
        case "426681-1":
            cadeiraNordi1();
        break
        case "431053-1":
            cadeiraOrlettiWhite1();
        break
        case "431054-1":
            cadeiraOrlettiBrown1();
        break
        case "426682-1":
            cadeiraAltaNordy1();
        break
        case "428899-1":
            cadeiraAltaPersefone1();
        break
        case "428900-1":
            cadeiraBaixaPersefone1();
        break
        case "426577-1":
            cadeiraOffice1();
        break
        case "499813-1":
            cadeiraOfficeBaixa1();
        break
        case "411618-1":
            mesaCrates1();
        break
        case "432737-1":
            mesaLoop1();
        break
        case "430614-1":
            mesaPiriz1();
        break
        case "376661-1":
            mesaMascavo1();
        break
        case "309002-1":
            mesaSequence1();
        break
        case "430616-1":
            mesaPirizAlta1();
        break
        case "433214-1":
            mesaRomana1();
        break
        case "332261-1":
            mesaLintz1();
        break
        case "446932-1":
            mesaLeopardo1();
        break
        case "535540-1":
            mesaAriel1();
        break
        case "179970-1":
            baseCamaKing1();
        break
        case "436016-1":
            puffFlora1();
        break
        case "429972-1":
            sofaCama1();
        break
        case "406652-1":
            arvoreNatal1();
        break
        case "433447-1":
            almofada1();
        break
        case "433527-1":
            tapete1();
        break
        case "429900-1":
            luminariaAnsbach1();
        break
        case "430302-1":
            lustreAthena1();
        break
        case "435547-1":
            faithful1();
        break
        case "495367-1":
            liv1();
        break
    }
});

function cadeiraXeque1(){
    document.querySelector("#descricao2").value = "CADEIRA XEQUE, Cor: BOUCLÉ BRANCO, Id: 435307"
    document.querySelector("#valorUnitario2").value = "R$:269,99"
};
function cadeiraDandy1(){
    document.querySelector("#descricao2").value = "CADEIRA GIRATÓRIA DANDY, Cor: MUSGO/Nozes, Id: 401919"
    document.querySelector("#valorUnitario2").value = "R$:455,99"
};
function cadeiraNordi1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS NORDI, Cor: PRETO/CAPPUCCINO, Id: 426681"
    document.querySelector("#valorUnitario2").value = "R$:399,99"
};
function cadeiraOrlettiWhite1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: NATURAL/BRANCO, Id: 431053"
    document.querySelector("#valorUnitario2").value = "R$:549,99"
};
function cadeiraOrlettiBrown1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: MARROM Id: 431054"
    document.querySelector("#valorUnitario2").value = "R$:480,99"
};
function cadeiraAltaNordy1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS ALTA NORDI, Cor: Preto/Preto, Id: 426682"
    document.querySelector("#valorUnitario2").value = "R$:699,99"
};
function cadeiraAltaPersefone1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO OFFICE ALTA PERSÉFONE, Cor: PRETO, Id: 428899"
    document.querySelector("#valorUnitario2").value = "R$:589,99"
};
function cadeiraBaixaPersefone1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA PERSÉFONE, Cor: PRETO, Id: 428900"
    document.querySelector("#valorUnitario2").value = "R$:569,99"
};
function cadeiraOffice1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO OFFICE, Cor: PRETO, Id: 426577"
    document.querySelector("#valorUnitario2").value = "R$:539,99"
};
function cadeiraOfficeBaixa1(){
    document.querySelector("#descricao2").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA, Cor: CINZA, Id: 499813"
    document.querySelector("#valorUnitario2").value = "R$:399,99"
};
function mesaCrates1(){
    document.querySelector("#descricao2").value = "MESA 1,65 M X 90 CM CRATES, Cor: CASTANHO, Id: 411618"
    document.querySelector("#valorUnitario2").value = "R$:289,99"
};
function mesaLoop1(){
    document.querySelector("#descricao2").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS LOOP, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario2").value = "R$:490,99"
};
function mesaPiriz1(){
    document.querySelector("#descricao2").value = "MESA DE CENTRO REDONDA 70 CM PIRIZ, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario2").value = "R$:899,99"
};
function mesaMascavo1(){
    document.querySelector("#descricao2").value = "MESA DE CENTRO COM 1 GAVETA 1,30 M X 52 CM MASCAVO, Cor: Incolor/Nozes, Id: 376661"
    document.querySelector("#valorUnitario2").value = "R$:599,99"
};
function mesaSequence1(){
    document.querySelector("#descricao2").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS SEQUENCE, Cor: Incolor/Nozes, Id: 309002"
    document.querySelector("#valorUnitario2").value = "R$:799,99"
};
function mesaPirizAlta1(){
    document.querySelector("#descricao2").value = "MESA LATERAL REDONDA 50 CM PIRIZ, Cor: AREIA, Id: 430616"
    document.querySelector("#valorUnitario2").value = "R$:599,99"
};
function mesaRomana1(){
    document.querySelector("#descricao2").value = "MESA DE JANTAR ROMANA L 1 CM X A 77 CM X C 18 CM, Cor: AMÊNDOA, Id: 433214"
    document.querySelector("#valorUnitario2").value = "R$:1.699,99"
};
function mesaLintz1(){
    document.querySelector("#descricao2").value = "MESA DE JANTAR LINTZ L 219 CM X A 75.5 CM X C 110 CM, Cor: OFF-WHITE FOSCO, BEGE E CHAMPANHE, Id: 332261"
    document.querySelector("#valorUnitario2").value = "R$:1.589,99"
};
function mesaLeopardo1(){
    document.querySelector("#descricao2").value = "MESA LEOPARDO A 35 CM X L 22 CM X C 15 CM, Cor: AMARELO, BRANCO E MARROM, Id: 446932"
    document.querySelector("#valorUnitario2").value = "R$:1.999,99"
};
function mesaAriel1(){
    document.querySelector("#descricao2").value = "MESA ARIEL L 9 CM X A 77 CM X C 16 CM, Cor: PINHÃO, Id: 535540"
    document.querySelector("#valorUnitario2").value = "R$:1.119,99"
};
function baseCamaKing1(){
    document.querySelector("#descricao2").value = "BASE PARA CAMA BOX KING 1,93 M MAX, Cor: Branco, Id: 179970"
    document.querySelector("#valorUnitario2").value = "R$:1.299,99"
};
function puffFlora1(){
    document.querySelector("#descricao2").value = "PUFF 45 CM X 45 CM FLORA CAMINHOS DO SOL, Cor: Verde/Rosa, Id: 436016"
    document.querySelector("#valorUnitario2").value = "R$:59,99"
};
function sofaCama1(){
    document.querySelector("#descricao2").value = "SOFÁ-CAMA 3 LUGARES BUZZ, Cor: Bege, Id: 429972"
    document.querySelector("#valorUnitario2").value = "R$:2.799,99"
};
function arvoreNatal1(){
    document.querySelector("#descricao2").value = "ÁRVORE DE NATAL CELEBRATION 1,50 M, Cor: Verde, Id: 406652"
    document.querySelector("#valorUnitario2").value = "R$:99,99"
};
function almofada1(){
    document.querySelector("#descricao2").value = "ALMOFADA 50 CM X 50 CM DRESSAGE, Cor: TANINO/LODEN GREEN, Id: 433447"
    document.querySelector("#valorUnitario2").value = "R$:199,99"
};
function tapete1(){
    document.querySelector("#descricao2").value = "TAPETE 2 M X 2,50 M SARGI, Cor: NATURAL, Id: 433527"
    document.querySelector("#valorUnitario2").value = "R$:399,99"
};
function luminariaAnsbach1(){
    document.querySelector("#descricao2").value = "LUMINÁRIA DE TETO ANSBACH L 60 X A 3.5 X P 60 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario2").value = "R$:599,99"
};
function lustreAthena1(){
    document.querySelector("#descricao2").value = "LUSTRE ATHENA L 80 X A 40 X P 80 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario2").value = "R$:889,99"
};
function faithful1(){
    document.querySelector("#descricao2").value = "LUMINÁRIA FAITHFUL, Cor: PRATA, Id: 435547"
    document.querySelector("#valorUnitario2").value = "R$:319,99"
};
function liv1(){
    document.querySelector("#descricao2").value = "LUMINÁRIA LIV, Cor: DOURADO, Id: 495367"
    document.querySelector("#valorUnitario2").value = "R$:459,99"
};

selectProduto2.addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    OpcaoSelecionada = this.options[this.selectedIndex];
    opcaoID = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
        switch (opcaoID){
        case "435307-2":
            cadeiraXeque2();
        break
        case "401919-2":
            cadeiraDandy2();
        break
        case "426681-2":
            cadeiraNordi2();
        break
        case "431053-2":
            cadeiraOrlettiWhite2();
        break
        case "431054-2":
            cadeiraOrlettiBrown2();
        break
        case "426682-2":
            cadeiraAltaNordy2();
        break
        case "428899-2":
            cadeiraAltaPersefone2();
        break
        case "428900-2":
            cadeiraBaixaPersefone2();
        break
        case "426577-2":
            cadeiraOffice2();
        break
        case "499813-2":
            cadeiraOfficeBaixa2();
        break
        case "411618-2":
            mesaCrates2();
        break
        case "432737-2":
            mesaLoop2();
        break
        case "430614-2":
            mesaPiriz2();
        break
        case "376661-2":
            mesaMascavo2();
        break
        case "309002-2":
            mesaSequence2();
        break
        case "430616-2":
            mesaPirizAlta2();
        break
        case "433214-2":
            mesaRomana2();
        break
        case "332261-2":
            mesaLintz2();
        break
        case "446932-2":
            mesaLeopardo2();
        break
        case "535540-2":
            mesaAriel2();
        break
        case "179970-2":
            baseCamaKing2();
        break
        case "436016-2":
            puffFlora2();
        break
        case "429972-2":
            sofaCama2();
        break
        case "406652-2":
            arvoreNatal2();
        break
        case "433447-2":
            almofada2();
        break
        case "433527-2":
            tapete2();
        break
        case "429900-2":
            luminariaAnsbach2();
        break
        case "430302-2":
            lustreAthena2();
        break
        case "435547-2":
            faithful2();
        break
        case "495367-2":
            liv2();
        break
}
});

function cadeiraXeque2(){
    document.querySelector("#descricao3").value = "CADEIRA XEQUE, Cor: BOUCLÉ BRANCO, Id: 435307"
    document.querySelector("#valorUnitario3").value = "R$:269,99"
};
function cadeiraDandy2(){
    document.querySelector("#descricao3").value = "CADEIRA GIRATÓRIA DANDY, Cor: MUSGO/Nozes, Id: 401919"
    document.querySelector("#valorUnitario3").value = "R$:455,99"
};
function cadeiraNordi2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS NORDI, Cor: PRETO/CAPPUCCINO, Id: 426681"
    document.querySelector("#valorUnitario3").value = "R$:399,99"
};
function cadeiraOrlettiWhite2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: NATURAL/BRANCO, Id: 431053"
    document.querySelector("#valorUnitario3").value = "R$:549,99"
};
function cadeiraOrlettiBrown2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: MARROM Id: 431054"
    document.querySelector("#valorUnitario3").value = "R$:480,99"
};
function cadeiraAltaNordy2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS ALTA NORDI, Cor: Preto/Preto, Id: 426682"
    document.querySelector("#valorUnitario3").value = "R$:699,99"
};
function cadeiraAltaPersefone2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO OFFICE ALTA PERSÉFONE, Cor: PRETO, Id: 428899"
    document.querySelector("#valorUnitario3").value = "R$:589,99"
};
function cadeiraBaixaPersefone2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA PERSÉFONE, Cor: PRETO, Id: 428900"
    document.querySelector("#valorUnitario3").value = "R$:569,99"
};
function cadeiraOffice2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO OFFICE, Cor: PRETO, Id: 426577"
    document.querySelector("#valorUnitario3").value = "R$:539,99"
};
function cadeiraOfficeBaixa2(){
    document.querySelector("#descricao3").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA, Cor: CINZA, Id: 499813"
    document.querySelector("#valorUnitario3").value = "R$:399,99"
};
function mesaCrates2(){
    document.querySelector("#descricao3").value = "MESA 1,65 M X 90 CM CRATES, Cor: CASTANHO, Id: 411618"
    document.querySelector("#valorUnitario3").value = "R$:289,99"
};
function mesaLoop2(){
    document.querySelector("#descricao3").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS LOOP, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario3").value = "R$:490,99"
};
function mesaPiriz2(){
    document.querySelector("#descricao3").value = "MESA DE CENTRO REDONDA 70 CM PIRIZ, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario3").value = "R$:899,99"
};
function mesaMascavo2(){
    document.querySelector("#descricao3").value = "MESA DE CENTRO COM 1 GAVETA 1,30 M X 52 CM MASCAVO, Cor: Incolor/Nozes, Id: 376661"
    document.querySelector("#valorUnitario3").value = "R$:599,99"
};
function mesaSequence2(){
    document.querySelector("#descricao3").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS SEQUENCE, Cor: Incolor/Nozes, Id: 309002"
    document.querySelector("#valorUnitario3").value = "R$:799,99"
};
function mesaPirizAlta2(){
    document.querySelector("#descricao3").value = "MESA LATERAL REDONDA 50 CM PIRIZ, Cor: AREIA, Id: 430616"
    document.querySelector("#valorUnitario3").value = "R$:599,99"
};
function mesaRomana2(){
    document.querySelector("#descricao3").value = "MESA DE JANTAR ROMANA L 1 CM X A 77 CM X C 18 CM, Cor: AMÊNDOA, Id: 433214"
    document.querySelector("#valorUnitario3").value = "R$:1.699,99"
};
function mesaLintz2(){
    document.querySelector("#descricao3").value = "MESA DE JANTAR LINTZ L 219 CM X A 75.5 CM X C 110 CM, Cor: OFF-WHITE FOSCO, BEGE E CHAMPANHE, Id: 332261"
    document.querySelector("#valorUnitario3").value = "R$:1.589,99"
};
function mesaLeopardo2(){
    document.querySelector("#descricao3").value = "MESA LEOPARDO A 35 CM X L 22 CM X C 15 CM, Cor: AMARELO, BRANCO E MARROM, Id: 446932"
    document.querySelector("#valorUnitario3").value = "R$:1.999,99"
};
function mesaAriel2(){
    document.querySelector("#descricao3").value = "MESA ARIEL L 9 CM X A 77 CM X C 16 CM, Cor: PINHÃO, Id: 535540"
    document.querySelector("#valorUnitario3").value = "R$:1.119,99"
};
function baseCamaKing2(){
    document.querySelector("#descricao3").value = "BASE PARA CAMA BOX KING 1,93 M MAX, Cor: Branco, Id: 179970"
    document.querySelector("#valorUnitario3").value = "R$:1.299,99"
};
function puffFlora2(){
    document.querySelector("#descricao3").value = "PUFF 45 CM X 45 CM FLORA CAMINHOS DO SOL, Cor: Verde/Rosa, Id: 436016"
    document.querySelector("#valorUnitario3").value = "R$:59,99"
};
function sofaCama2(){
    document.querySelector("#descricao3").value = "SOFÁ-CAMA 3 LUGARES BUZZ, Cor: Bege, Id: 429972"
    document.querySelector("#valorUnitario3").value = "R$:2.799,99"
};
function arvoreNatal2(){
    document.querySelector("#descricao3").value = "ÁRVORE DE NATAL CELEBRATION 1,50 M, Cor: Verde, Id: 406652"
    document.querySelector("#valorUnitario3").value = "R$:99,99"
};
function almofada2(){
    document.querySelector("#descricao3").value = "ALMOFADA 50 CM X 50 CM DRESSAGE, Cor: TANINO/LODEN GREEN, Id: 433447"
    document.querySelector("#valorUnitario3").value = "R$:199,99"
};
function tapete2(){
    document.querySelector("#descricao3").value = "TAPETE 2 M X 2,50 M SARGI, Cor: NATURAL, Id: 433527"
    document.querySelector("#valorUnitario3").value = "R$:399,99"
};
function luminariaAnsbach2(){
    document.querySelector("#descricao3").value = "LUMINÁRIA DE TETO ANSBACH L 60 X A 3.5 X P 60 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario3").value = "R$:599,99"
};
function lustreAthena2(){
    document.querySelector("#descricao3").value = "LUSTRE ATHENA L 80 X A 40 X P 80 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario3").value = "R$:889,99"
};
function faithful2(){
    document.querySelector("#descricao3").value = "LUMINÁRIA FAITHFUL, Cor: PRATA, Id: 435547"
    document.querySelector("#valorUnitario3").value = "R$:319,99"
};
function liv2(){
    document.querySelector("#descricao3").value = "LUMINÁRIA LIV, Cor: DOURADO, Id: 495367"
    document.querySelector("#valorUnitario3").value = "R$:459,99"
};

selectProduto3.addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    OpcaoSelecionada = this.options[this.selectedIndex];
    opcaoID = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
    switch (opcaoID){
        case "435307-3":
            cadeiraXeque3();
        break
        case "401919-3":
            cadeiraDandy3();
        break
        case "426681-3":
            cadeiraNordi3();
        break
        case "431053-3":
            cadeiraOrlettiWhite3();
        break
        case "431054-3":
            cadeiraOrlettiBrown3();
        break
        case "426682-3":
            cadeiraAltaNordy3();
        break
        case "428899-3":
            cadeiraAltaPersefone3();
        break
        case "428900-3":
            cadeiraBaixaPersefone3();
        break
        case "426577-3":
            cadeiraOffice3();
        break
        case "499813-3":
            cadeiraOfficeBaixa3();
        break
        case "411618-3":
            mesaCrates3();
        break
        case "432737-3":
            mesaLoop3();
        break
        case "430614-3":
            mesaPiriz3();
        break
        case "376661-3":
            mesaMascavo3();
        break
        case "309002-3":
            mesaSequence3();
        break
        case "430616-3":
            mesaPirizAlta3();
        break
        case "433214-3":
            mesaRomana3();
        break
        case "332261-3":
            mesaLintz3();
        break
        case "446932-3":
            mesaLeopardo3();
        break
        case "535540-3":
            mesaAriel3();
        break
        case "179970-3":
            baseCamaKing3();
        break
        case "436016-3":
            puffFlora3();
        break
        case "429972-3":
            sofaCama3();
        break
        case "406652-3":
            arvoreNatal3();
        break
        case "433447-3":
            almofada3();
        break
        case "433527-3":
            tapete3();
        break
        case "429900-3":
            luminariaAnsbach3();
        break
        case "430302-3":
            lustreAthena3();
        break
        case "435547-3":
            faithful3();
        break
        case "495367-3":
            liv3();
        break
}
});

function cadeiraXeque3(){
    document.querySelector("#descricao4").value = "CADEIRA XEQUE, Cor: BOUCLÉ BRANCO, Id: 435307"
    document.querySelector("#valorUnitario4").value = "R$:269,99"
};
function cadeiraDandy3(){
    document.querySelector("#descricao4").value = "CADEIRA GIRATÓRIA DANDY, Cor: MUSGO/Nozes, Id: 401919"
    document.querySelector("#valorUnitario4").value = "R$:455,99"
};
function cadeiraNordi3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS NORDI, Cor: PRETO/CAPPUCCINO, Id: 426681"
    document.querySelector("#valorUnitario4").value = "R$:399,99"
};
function cadeiraOrlettiWhite3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: NATURAL/BRANCO, Id: 431053"
    document.querySelector("#valorUnitario4").value = "R$:549,99"
};
function cadeiraOrlettiBrown3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: MARROM Id: 431054"
    document.querySelector("#valorUnitario4").value = "R$:480,99"
};
function cadeiraAltaNordy3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS ALTA NORDI, Cor: Preto/Preto, Id: 426682"
    document.querySelector("#valorUnitario4").value = "R$:699,99"
};
function cadeiraAltaPersefone3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO OFFICE ALTA PERSÉFONE, Cor: PRETO, Id: 428899"
    document.querySelector("#valorUnitario4").value = "R$:589,99"
};
function cadeiraBaixaPersefone3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA PERSÉFONE, Cor: PRETO, Id: 428900"
    document.querySelector("#valorUnitario4").value = "R$:569,99"
};
function cadeiraOffice3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO OFFICE, Cor: PRETO, Id: 426577"
    document.querySelector("#valorUnitario4").value = "R$:539,99"
};
function cadeiraOfficeBaixa3(){
    document.querySelector("#descricao4").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA, Cor: CINZA, Id: 499813"
    document.querySelector("#valorUnitario4").value = "R$:399,99"
};
function mesaCrates3(){
    document.querySelector("#descricao4").value = "MESA 1,65 M X 90 CM CRATES, Cor: CASTANHO, Id: 411618"
    document.querySelector("#valorUnitario4").value = "R$:289,99"
};
function mesaLoop3(){
    document.querySelector("#descricao4").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS LOOP, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario4").value = "R$:490,99"
};
function mesaPiriz3(){
    document.querySelector("#descricao4").value = "MESA DE CENTRO REDONDA 70 CM PIRIZ, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario4").value = "R$:899,99"
};
function mesaMascavo3(){
    document.querySelector("#descricao4").value = "MESA DE CENTRO COM 1 GAVETA 1,30 M X 52 CM MASCAVO, Cor: Incolor/Nozes, Id: 376661"
    document.querySelector("#valorUnitario4").value = "R$:599,99"
};
function mesaSequence3(){
    document.querySelector("#descricao4").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS SEQUENCE, Cor: Incolor/Nozes, Id: 309002"
    document.querySelector("#valorUnitario4").value = "R$:799,99"
};
function mesaPirizAlta3(){
    document.querySelector("#descricao4").value = "MESA LATERAL REDONDA 50 CM PIRIZ, Cor: AREIA, Id: 430616"
    document.querySelector("#valorUnitario4").value = "R$:599,99"
};
function mesaRomana3(){
    document.querySelector("#descricao4").value = "MESA DE JANTAR ROMANA L 1 CM X A 77 CM X C 18 CM, Cor: AMÊNDOA, Id: 433214"
    document.querySelector("#valorUnitario4").value = "R$:1.699,99"
};
function mesaLintz3(){
    document.querySelector("#descricao4").value = "MESA DE JANTAR LINTZ L 219 CM X A 75.5 CM X C 110 CM, Cor: OFF-WHITE FOSCO, BEGE E CHAMPANHE, Id: 332261"
    document.querySelector("#valorUnitario4").value = "R$:1.589,99"
};
function mesaLeopardo3(){
    document.querySelector("#descricao4").value = "MESA LEOPARDO A 35 CM X L 22 CM X C 15 CM, Cor: AMARELO, BRANCO E MARROM, Id: 446932"
    document.querySelector("#valorUnitario4").value = "R$:1.999,99"
};
function mesaAriel3(){
    document.querySelector("#descricao4").value = "MESA ARIEL L 9 CM X A 77 CM X C 16 CM, Cor: PINHÃO, Id: 535540"
    document.querySelector("#valorUnitario4").value = "R$:1.119,99"
};
function baseCamaKing3(){
    document.querySelector("#descricao4").value = "BASE PARA CAMA BOX KING 1,93 M MAX, Cor: Branco, Id: 179970"
    document.querySelector("#valorUnitario4").value = "R$:1.299,99"
};
function puffFlora3(){
    document.querySelector("#descricao4").value = "PUFF 45 CM X 45 CM FLORA CAMINHOS DO SOL, Cor: Verde/Rosa, Id: 436016"
    document.querySelector("#valorUnitario4").value = "R$:59,99"
};
function sofaCama3(){
    document.querySelector("#descricao4").value = "SOFÁ-CAMA 3 LUGARES BUZZ, Cor: Bege, Id: 429972"
    document.querySelector("#valorUnitario4").value = "R$:2.799,99"
};
function arvoreNatal3(){
    document.querySelector("#descricao4").value = "ÁRVORE DE NATAL CELEBRATION 1,50 M, Cor: Verde, Id: 406652"
    document.querySelector("#valorUnitario4").value = "R$:99,99"
};
function almofada3(){
    document.querySelector("#descricao4").value = "ALMOFADA 50 CM X 50 CM DRESSAGE, Cor: TANINO/LODEN GREEN, Id: 433447"
    document.querySelector("#valorUnitario4").value = "R$:199,99"
};
function tapete3(){
    document.querySelector("#descricao4").value = "TAPETE 2 M X 2,50 M SARGI, Cor: NATURAL, Id: 433527"
    document.querySelector("#valorUnitario4").value = "R$:399,99"
};
function luminariaAnsbach3(){
    document.querySelector("#descricao4").value = "LUMINÁRIA DE TETO ANSBACH L 60 X A 3.5 X P 60 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario4").value = "R$:599,99"
};
function lustreAthena3(){
    document.querySelector("#descricao4").value = "LUSTRE ATHENA L 80 X A 40 X P 80 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario4").value = "R$:889,99"
};
function faithful3(){
    document.querySelector("#descricao4").value = "LUMINÁRIA FAITHFUL, Cor: PRATA, Id: 435547"
    document.querySelector("#valorUnitario4").value = "R$:319,99"
};
function liv3(){
    document.querySelector("#descricao4").value = "LUMINÁRIA LIV, Cor: DOURADO, Id: 495367"
    document.querySelector("#valorUnitario4").value = "R$:459,99"
};

selectProduto4.addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    OpcaoSelecionada = this.options[this.selectedIndex];
    opcaoID = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
    switch (opcaoID){
        case "435307-4":
            cadeiraXeque4();
        break
        case "401919-4":
            cadeiraDandy4();
        break
        case "426681-4":
            cadeiraNordi4();
        break
        case "431053-4":
            cadeiraOrlettiWhite4();
        break
        case "431054-4":
            cadeiraOrlettiBrown4();
        break
        case "426682-4":
            cadeiraAltaNordy4();
        break
        case "428899-4":
            cadeiraAltaPersefone4();
        break
        case "428900-4":
            cadeiraBaixaPersefone4();
        break
        case "426577-4":
            cadeiraOffice4();
        break
        case "499813-4":
            cadeiraOfficeBaixa4();
        break
        case "411618-4":
            mesaCrates4();
        break
        case "432737-4":
            mesaLoop4();
        break
        case "430614-4":
            mesaPiriz4();
        break
        case "376661-4":
            mesaMascavo4();
        break
        case "309002-4":
            mesaSequence4();
        break
        case "430616-4":
            mesaPirizAlta4();
        break
        case "433214-4":
            mesaRomana4();
        break
        case "332261-4":
            mesaLintz4();
        break
        case "446932-4":
            mesaLeopardo4();
        break
        case "535540-4":
            mesaAriel4();
        break
        case "179970-4":
            baseCamaKing4();
        break
        case "436016-4":
            puffFlora4();
        break
        case "429972-4":
            sofaCama4();
        break
        case "406652-4":
            arvoreNatal4();
        break
        case "433447-4":
            almofada4();
        break
        case "433527-4":
            tapete4();
        break
        case "429900-4":
            luminariaAnsbach4();
        break
        case "430302-4":
            lustreAthena4();
        break
        case "435547-4":
            faithful4();
        break
        case "495367-4":
            liv4();
        break
}
});

function cadeiraXeque4(){
    document.querySelector("#descricao5").value = "CADEIRA XEQUE, Cor: BOUCLÉ BRANCO, Id: 435307"
    document.querySelector("#valorUnitario5").value = "R$:269,99"
};
function cadeiraDandy4(){
    document.querySelector("#descricao5").value = "CADEIRA GIRATÓRIA DANDY, Cor: MUSGO/Nozes, Id: 401919"
    document.querySelector("#valorUnitario5").value = "R$:455,99"
};
function cadeiraNordi4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS NORDI, Cor: PRETO/CAPPUCCINO, Id: 426681"
    document.querySelector("#valorUnitario5").value = "R$:399,99"
};
function cadeiraOrlettiWhite4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: NATURAL/BRANCO, Id: 431053"
    document.querySelector("#valorUnitario5").value = "R$:549,99"
};
function cadeiraOrlettiBrown4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO ORLETTI, Cor: MARROM Id: 431054"
    document.querySelector("#valorUnitario5").value = "R$:480,99"
};
function cadeiraAltaNordy4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO COM BRAÇOS ALTA NORDI, Cor: Preto/Preto, Id: 426682"
    document.querySelector("#valorUnitario5").value = "R$:699,99"
};
function cadeiraAltaPersefone4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO OFFICE ALTA PERSÉFONE, Cor: PRETO, Id: 428899"
    document.querySelector("#valorUnitario5").value = "R$:589,99"
};
function cadeiraBaixaPersefone4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA PERSÉFONE, Cor: PRETO, Id: 428900"
    document.querySelector("#valorUnitario5").value = "R$:569,99"
};
function cadeiraOffice4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO OFFICE, Cor: PRETO, Id: 426577"
    document.querySelector("#valorUnitario5").value = "R$:539,99"
};
function cadeiraOfficeBaixa4(){
    document.querySelector("#descricao5").value = "CADEIRA DE ESCRITÓRIO OFFICE BAIXA, Cor: CINZA, Id: 499813"
    document.querySelector("#valorUnitario5").value = "R$:399,99"
};
function mesaCrates4(){
    document.querySelector("#descricao5").value = "MESA 1,65 M X 90 CM CRATES, Cor: CASTANHO, Id: 411618"
    document.querySelector("#valorUnitario5").value = "R$:289,99"
};
function mesaLoop4(){
    document.querySelector("#descricao5").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS LOOP, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario5").value = "R$:490,99"
};
function mesaPiriz4(){
    document.querySelector("#descricao5").value = "MESA DE CENTRO REDONDA 70 CM PIRIZ, Cor: AREIA, Id: 430614"
    document.querySelector("#valorUnitario5").value = "R$:899,99"
};
function mesaMascavo4(){
    document.querySelector("#descricao5").value = "MESA DE CENTRO COM 1 GAVETA 1,30 M X 52 CM MASCAVO, Cor: Incolor/Nozes, Id: 376661"
    document.querySelector("#valorUnitario5").value = "R$:599,99"
};
function mesaSequence4(){
    document.querySelector("#descricao5").value = "MESA LATERAL CONJUNTO COM 2 PEÇAS SEQUENCE, Cor: Incolor/Nozes, Id: 309002"
    document.querySelector("#valorUnitario5").value = "R$:799,99"
};
function mesaPirizAlta4(){
    document.querySelector("#descricao5").value = "MESA LATERAL REDONDA 50 CM PIRIZ, Cor: AREIA, Id: 430616"
    document.querySelector("#valorUnitario5").value = "R$:599,99"
};
function mesaRomana4(){
    document.querySelector("#descricao5").value = "MESA DE JANTAR ROMANA L 1 CM X A 77 CM X C 18 CM, Cor: AMÊNDOA, Id: 433214"
    document.querySelector("#valorUnitario5").value = "R$:1.699,99"
};
function mesaLintz4(){
    document.querySelector("#descricao5").value = "MESA DE JANTAR LINTZ L 219 CM X A 75.5 CM X C 110 CM, Cor: OFF-WHITE FOSCO, BEGE E CHAMPANHE, Id: 332261"
    document.querySelector("#valorUnitario5").value = "R$:1.589,99"
};
function mesaLeopardo4(){
    document.querySelector("#descricao5").value = "MESA LEOPARDO A 35 CM X L 22 CM X C 15 CM, Cor: AMARELO, BRANCO E MARROM, Id: 446932"
    document.querySelector("#valorUnitario5").value = "R$:1.999,99"
};
function mesaAriel4(){
    document.querySelector("#descricao5").value = "MESA ARIEL L 9 CM X A 77 CM X C 16 CM, Cor: PINHÃO, Id: 535540"
    document.querySelector("#valorUnitario5").value = "R$:1.119,99"
};
function baseCamaKing4(){
    document.querySelector("#descricao5").value = "BASE PARA CAMA BOX KING 1,93 M MAX, Cor: Branco, Id: 179970"
    document.querySelector("#valorUnitario5").value = "R$:1.299,99"
};
function puffFlora4(){
    document.querySelector("#descricao5").value = "PUFF 45 CM X 45 CM FLORA CAMINHOS DO SOL, Cor: Verde/Rosa, Id: 436016"
    document.querySelector("#valorUnitario5").value = "R$:59,99"
};
function sofaCama4(){
    document.querySelector("#descricao5").value = "SOFÁ-CAMA 3 LUGARES BUZZ, Cor: Bege, Id: 429972"
    document.querySelector("#valorUnitario5").value = "R$:2.799,99"
};
function arvoreNatal4(){
    document.querySelector("#descricao5").value = "ÁRVORE DE NATAL CELEBRATION 1,50 M, Cor: Verde, Id: 406652"
    document.querySelector("#valorUnitario5").value = "R$:99,99"
};
function almofada4(){
    document.querySelector("#descricao5").value = "ALMOFADA 50 CM X 50 CM DRESSAGE, Cor: TANINO/LODEN GREEN, Id: 433447"
    document.querySelector("#valorUnitario5").value = "R$:199,99"
};
function tapete4(){
    document.querySelector("#descricao5").value = "TAPETE 2 M X 2,50 M SARGI, Cor: NATURAL, Id: 433527"
    document.querySelector("#valorUnitario5").value = "R$:399,99"
};
function luminariaAnsbach4(){
    document.querySelector("#descricao5").value = "LUMINÁRIA DE TETO ANSBACH L 60 X A 3.5 X P 60 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario5").value = "R$:599,99"
};
function lustreAthena4(){
    document.querySelector("#descricao5").value = "LUSTRE ATHENA L 80 X A 40 X P 80 CM, Cor: BRANCO, Id: 429900"
    document.querySelector("#valorUnitario5").value = "R$:889,99"
};
function faithful4(){
    document.querySelector("#descricao5").value = "LUMINÁRIA FAITHFUL, Cor: PRATA, Id: 435547"
    document.querySelector("#valorUnitario5").value = "R$:319,99"
};
function liv4(){
    document.querySelector("#descricao5").value = "LUMINÁRIA LIV, Cor: DOURADO, Id: 495367"
    document.querySelector("#valorUnitario5").value = "R$:459,99"
};