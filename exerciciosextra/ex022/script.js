function contar() {
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`
    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0) {
            res.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
        } else {
            res.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++ 
    }
    res.innerHTML += ` &#x1F3C1;`
}