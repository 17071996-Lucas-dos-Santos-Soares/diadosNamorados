function fuja() {
     let botaoNao = window.document.getElementById("nao")
     let larguraJanela = window.innerWidth
     let alturaJanela = window.innerHeight
     let maxX = larguraJanela - botaoNao.offsetWidth
     let maxY = alturaJanela - botaoNao.offsetHeight
     let aleatorioX = Math.floor(Math.random() * maxX)
     let aleatorioY = Math.floor(Math.random() * maxY)
     botaoNao.style.left = aleatorioX + "px"
     botaoNao.style.top = aleatorioY + "px"
}
function clicar() {
    let botaoSim = window.document.querySelector('button#sim')
    let msg = window.document.querySelector('div#msg')
    let nome = window.prompt('Digite seu nome')
    msg.innerHTML = `Parabéns ${nome} você fez uma ótima escolha!💋`
    msg.style.color = '#8b0000'
    msg.style.fontSize = '15pt'
}