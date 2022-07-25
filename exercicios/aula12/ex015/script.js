function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var gênero = ''
    if (fsex[0].checked) {
      gênero = 'Feminino'
      if (idade < 4) {
        //Bebe
        img.setAttribute('src', './imagens/bebe.png')
      } else if (idade < 11) {
        //Criança
        img.setAttribute('src', './imagens/criancaF.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', './imagens/jovemF.png')
      } else if (idade < 60) {
        //Adulto
        img.setAttribute('src', './imagens/adultoF.png')
      } else {
        //Idoso
        img.setAttribute('src', './imagens/idosoF.png')
      }
    } else {
      gênero = 'Masculino'
      if (idade < 4) {
        //Bebe
        img.setAttribute('src', './imagens/bebe.png')
      } else if (idade < 11) {
        //Criança
        img.setAttribute('src', './imagens/criancaM.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', './imagens/jovemM.png')
      } else if (idade < 60) {
        //Adulto
        img.setAttribute('src', './imagens/adultoM.png')
      } else {
        //Idoso
        img.setAttribute('src', './imagens/idosoM.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos o gênero ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
