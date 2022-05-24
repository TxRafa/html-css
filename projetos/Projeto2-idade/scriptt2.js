function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textoano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique o ano e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 14) {
                //Crianca
                img.setAttribute('src', 'Identidade/criancam.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Identidade/adolecm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Identidade/homem.png')
            } else { 
                //idoso
                img.setAttribute('src', 'Identidade/idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 14) {
                //Crianca
                img.setAttribute('src', 'Identidade/criancaf.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Identidade/adolecf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Identidade/mulher.png')
            } else { 
                //idoso
                img.setAttribute('src', 'Identidade/idosa.png')
            }
        }
        // res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
    
 }

