function gerar() {
    let min = 1
    let max = 100
    let aleatorio = Math.random()
    let num = min + Math.trunc((max - min) * aleatorio)
    let res = document.querySelector('section#res')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() { 
    let res = document.querySelector('section#res')
    res.innerHTML = null
}