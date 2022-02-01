// Exibe uma mensagem em uma seção de sáida de depuração especial do documento.
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
    // Localiza a seção de depuração do documento, examinando os atributos
    // de identificação HTML
    var log = document.getElementById('debuglog');
    // Se não existe  elemento algum com a identificação "debuglog", cria um.
    if (!log) {
        log = document.createElement('div');
        log.id = 'debuglog';
        log.innerHTML = "<h1>Debug log</h1>";
        document.body.appendChild(log);
    }
    // Agora, coloca a mensagem em seu próprio  <pre> e anexa no log  
    var pre = document.createElement('pre');
    var text = document.createTextNode("Are you want cookie?");
    pre.appendChild(text);
    log.appendChild(pre);
}