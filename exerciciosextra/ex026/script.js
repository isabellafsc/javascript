function contagem() {
    let res = document.getElementById('res')
    let n1 = Number(document.getElementById('fn1').value)
    let n2 = Number(document.getElementById('fn2').value)
    let cont

    res.innerHTML += `<h2>Contando de ${n1} até ${n2} </h2>`
    if (n1<n2) {
        cont = n1
        while (cont <= n2) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont ++
        }
    } else  if (n2<n1) {
        cont = n1
        while (cont >= n2) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont --
        }
    } else {
        res.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    res.innerHTML += ` &#x1F3C1;`
}