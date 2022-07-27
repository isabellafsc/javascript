function contagem() {
    let res = document.getElementById('res')
    let num = Number(document.getElementById('fnum').value)
    res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    res.innerHTML += ` &#x1F3C1;`
}