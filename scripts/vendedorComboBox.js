document.querySelector("#vendedorSelect").addEventListener("click",function() {
    const select = document.getElementById("vendedorSelect");
    const input = document.getElementById("vendedor");
    
    // Pega o texto do vendedor selecionado, removendo o código numérico
    const vendedorNome = select.options[select.selectedIndex].text.split(' - ')[1];
    
    // Preenche o campo input com o nome do vendedor
    input.value = vendedorNome || ""; // Se não houver vendedor selecionado, limpa o campo
});