function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let data = new Date
    let res = document.getElementById('res')
    let dia = data.getDate()
    let mes = data.getMonth() 
    let ano = data.getFullYear()
    let sem = data.getDay() 
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}