function gerar() {
  let num = document.getElementById('num')
  let tab = document.getElementById('tab')
  
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    tab.innerHTML = ''
    for (x = 1; x <= 10; x++) {
      let item = document.createElement('option')
      item.text += `${n} * ${x} = ${n*x}`
      item.value = `tab${x}`
      tab.appendChild(item)
    }
  }
}
