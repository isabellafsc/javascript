function calcular() {
  let n1 = Number(prompt('Primeiro valor:'))
  let n2 = Number(prompt('Segundo valor:'))
  let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

  let res = document.getElementById('res')
  res.innerHTML = `<h2>Calculando...</h2>`
  switch (op) {
    case 1:
      res.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
      break
    case 2:
      res.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
      break
    case 3:
      res.innerHTML += `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`
      break
    case 4:
      res.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1 / n2).toLocaleString('pt-BR')}</strong></p>`
      break
    default:
      res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
      break
  }
}
