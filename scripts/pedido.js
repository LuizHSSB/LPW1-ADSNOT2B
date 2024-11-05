document.querySelector("#produtoSelecionado-0").addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    const OpcaoSelecionada = this.options[this.selectedIndex];
    const opcaoID = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
    
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

document.querySelector("#produtoSelecionado-1").addEventListener("change",function(){ //<- selecionando o select responsável pelos produtos e iniciando uma função ao receber a aspecto "change"
    const OpcaoSelecionada = this.options[this.selectedIndex];
    const opcaoID1 = OpcaoSelecionada.id; // <-- obtendo o ID do produto selecionado
    
    switch (opcaoID){ // <- Iniciando um Switch Case, onde cada caso é o id de um produto, através de cada id criaremos uma função diferente
        case "selected":
            vazio1()
        break
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

// Aqui começam as funções que preenchem cada espaço "Descrição" e "Valor Unitário" com seus respectivos valores

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