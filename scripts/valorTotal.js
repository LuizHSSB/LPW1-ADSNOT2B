const qntEscolhida0 = document.querySelector("#quantidade0");
const qntEscolhida1 = document.querySelector("#quantidade1");
const qntEscolhida2 = document.querySelector("#quantidade2");
const qntEscolhida3 = document.querySelector("#quantidade3");
const qntEscolhida4 = document.querySelector("#quantidade4");

qntEscolhida0.addEventListener("blur",function(){
    let VU0 = document.querySelector("#valorUnitario1").value
    let Q0 = document.querySelector("#quantidade0").value
    let valorT0 = parseFloat(VU0) * parseInt(Q0)
    document.querySelector("#valorTotal1").value =  valorT0.toFixed(2) 

    let totalPedido0 = parseFloat(document.querySelector("#totalPedido").value) || 0
    document.querySelector("#totalPedido").value = (totalPedido0 + valorT0).toFixed(2)
});

qntEscolhida1.addEventListener("blur",function(){
    let VU1 = document.querySelector("#valorUnitario2").value
    let Q1 = document.querySelector("#quantidade1").value
    let valorT1 = parseFloat(VU1) * parseInt(Q1)
    document.querySelector("#valorTotal2").value =  valorT1.toFixed(2)

    let totalPedido1 = parseFloat(document.querySelector("#totalPedido").value) || 0
    document.querySelector("#totalPedido").value = (totalPedido1 + valorT1).toFixed(2)
});

qntEscolhida2.addEventListener("blur",function(){
    let VU2 = document.querySelector("#valorUnitario3").value
    let Q2 = document.querySelector("#quantidade2").value
    let valorT2 = parseFloat(VU2) * parseInt(Q2)
    document.querySelector("#valorTotal3").value =  valorT2.toFixed(2)

    let totalPedido2 = parseFloat(document.querySelector("#totalPedido").value) || 0
    document.querySelector("#totalPedido").value = (totalPedido2 + valorT2).toFixed(2)
});

qntEscolhida3.addEventListener("blur",function(){
    let VU3 = document.querySelector("#valorUnitario4").value
    let Q3 = document.querySelector("#quantidade3").value
    let valorT3 = parseFloat(VU3) * parseInt(Q3)
    document.querySelector("#valorTotal4").value =  valorT3.toFixed(2)

    let totalPedido3 = parseFloat(document.querySelector("#totalPedido").value) || 0
    document.querySelector("#totalPedido").value = (totalPedido3 + valorT3).toFixed(2)
});

qntEscolhida4.addEventListener("blur",function(){
    let VU4 = document.querySelector("#valorUnitario5").value
    let Q4 = document.querySelector("#quantidade4").value
    let valorT4 = parseFloat(VU4) * parseInt(Q4)    
    document.querySelector("#valorTotal5").value =  valorT4.toFixed(2)

    let totalPedido4 = parseFloat(document.querySelector("#totalPedido").value) || 0
    document.querySelector("#totalPedido").value = (totalPedido4 + valorT4).toFixed(2)
});