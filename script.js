function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value < 1920){
        window.alert('[ERRO]Data inválida')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        //dando um id para o "img" pelo js ao inves do html
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'um Homem'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'criança h.png')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'jovem h.png')
            }else if(idade < 70){
                //adulto
                img.setAttribute('src', 'adulto h.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso h.png')
            }
        }else{
            genero = ' uma Mulher'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'criança m.png')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'jovem m.png')
            }else if(idade < 70){
                //adulto
                img.setAttribute('src', 'adulto m.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}