window.onload = function () { // Executa esta função quando o documento for carregado
    // Localiza todas as marcas <img> no documento <img> no documento
    var images = document.getElementsByTagName("img");
    // Faz um laço por elas, adicionando uma rotina de tratamento para eventos "click" em
    // cada uma para que clicar na imagem a oculte.
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (image.addEventListener) // Outro modo de registrar uma rotina de tratamento
            image.addEventListener("click", hide, false);
        else // para compatibilidade com o IE8 e anteriores
            image.attachEvent("onclick", hide)
    }
    // Esta é a função de rotina para tratamento  de evento registrada anteriormente 
    function hide(event) { event.target.style.visibility = "hidden";}
    
}