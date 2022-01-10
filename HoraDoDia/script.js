function carregar() {
  var bomdia = window.document.getElementById("bomdia");
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  //hora = 2;

  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  if (hora >= 0 && hora < 12) {
    //Bom Dia
    bomdia.innerHTML = `Bom dia`;
    img.src = "manha.png";
    document.body.style.backgroundColor =
      "rgb(" + [140, 78, 17].join(",") + ")";
  } else if (hora >= 12 && hora < 18) {
    // Boa Tarde
    bomdia.innerHTML = `Boa Tarde`;
    img.src = "tarde.png";
    document.body.style.backgroundColor =
      "rgb(" + [203, 148, 57].join(",") + ")";
  } else {
    //Boa Noite
    bomdia.innerHTML = `Boa Noite`;
    img.src = "noite.png";
    document.body.style.background = "rgb(" + [80, 55, 84].join(",") + ")";
  }
}
