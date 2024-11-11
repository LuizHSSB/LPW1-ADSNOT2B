    // Função para exibir a saudação com animação e ícones
    function exibirSaudacao() {
        const agora = new Date();
        const hora = agora.getHours();
        
        // Elementos de saudação e ícones
        const cabecalho = document.getElementById('cabecalho');
        const icone = document.getElementById('icone');
        const saudacaoElemento = document.getElementById('saudacao');
    
        // Definir as variáveis de saudação e ícone
        let saudacao = '';
        let iconeUrl = '';
    
        if (hora >= 5 && hora < 12) {
            saudacao = 'Bom dia';
            iconeUrl = '🌅';  
        } else if (hora >= 12 && hora < 18) {
            saudacao = 'Boa tarde';
            iconeUrl = '🌞';  
        } else {
            saudacao = 'Boa noite';
            iconeUrl = '🌙';  
        }
    
        // Transição suave para a nova saudação
        cabecalho.style.opacity = 0;
        setTimeout(() => {
            saudacaoElemento.innerHTML = saudacao;
            icone.innerHTML = iconeUrl;
            
            // Adicionar animação para transição suave
            cabecalho.style.transition = 'opacity 0.5s ease-in';
            cabecalho.style.opacity = 1;
        }, 300);  
    }
    
    // Função chamada ao carregar a página
    window.onload = function() {
        exibirSaudacao();
        const botaoAtualizar = document.getElementById('botaoAtualizar');
        botaoAtualizar.addEventListener('click', exibirSaudacao);
    };    