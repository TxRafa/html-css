function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')    
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = 'Horadia/manha.png'
    document.body.style.background = '#e2ae12af'
} else if (hora >= 12 && hora < 18){
    img.src = 'Horadia/tarde.png'
    document.body.style.background = '#693339a1'
} else {
    img.src = 'Horadia/noite.png'
    document.body.style.background = '#025f7b9f'
}
}


