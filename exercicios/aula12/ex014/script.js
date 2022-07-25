function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('img')
  var data = new Date()
  var hora = data.toLocaleTimeString()
  var horaimg = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (horaimg >= 6 && horaimg < 12) {
    img.src = 'imagens/manha.png'
    document.body.style.background = '#bdc6cd'
  } else if (horaimg >= 12 && horaimg <= 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#6dc3da'
  } else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#00103c'
  }
}
