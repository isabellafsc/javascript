function estação() {
  let mês = prompt('Digite o mês em extenso ou o número (ex: Abril ou 4)')
  let res = document.querySelector('section#res')
  let estação
  switch (mês.toUpperCase()) {
    case 'JANEIRO':
    case 'FEVEREIRO':
    case 'MARÇO':
    case '1':
    case '2':
    case '3':
      estação = 'VERÃO'
      break
    case 'ABRIL':
    case 'MAIO':
    case 'JUNHO':
    case '4':
    case '5':
    case '6':
      estação = 'OUTONO'
      break
    case 'JULHO':
    case 'AGOSTO':
    case 'SETEMBRO':
    case '7':
    case '8':
    case '9':
      estação = 'INVERNO'
      break
    case 'OUTUBRO':
    case 'NOVEMBRO':
    case 'DEZEMBRO':
    case '10':
    case '11':
    case '12':
      estação = 'PRIMAVERA'
      break
    default:
      estação = 'INDEFINIDA'
      break
  }
  res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}
