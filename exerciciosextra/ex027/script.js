function tabuada() {
  let res = document.getElementById('res')
  let n = Number(document.getElementById('fnum').value)

  res.innerHTML = `<h2>Tabuada de ${n}</h2>`
  let c = 1
  while (c <= 10) {
    res.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
    c++
  }
}
