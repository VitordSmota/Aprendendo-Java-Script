function hide(e, reflow) { // Oculta o elemento e faz script de seu estilo
    if (reflow) { //Se o 2º argumento é verdadeiro 
        e.style.display = "none" // oculta o elemento e utiliza seu espaço
    } else { // Caso contrário 
        e.style.visibility = "hidden"; // torna e invisível, mas deixa seu espaço
    }
}

function highlight(e) { // Destaca e, definindo uma classe CSS
    //Basta definir ou anexar no atributo da classe HTML.
    // Isso presume que uma folha de estilos CSS já define a classe "hilite"
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}