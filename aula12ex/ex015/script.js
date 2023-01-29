function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById("txtano") //vem do que foi digitado no ano
    var res = document.querySelector("div#res")
    if(form_ano.value.length == 0 || form_ano.value > ano){
        window.alert("[ERRO] verifique os dados e tente novamente.")
    }
    else{
        var form_sex = document.getElementsByName("radsex")
        var idade = ano - Number(form_ano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(form_sex[0].checked) {
            gênero = "Homem"
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "bebem.png")
            }
            else if(idade < 21) {
                //Jovem
                img.setAttribute("src", "jovemm.png")
            }
            else if(idade < 50) {
                //Adulto
                img.setAttribute("src", "adultom.png")
            }
            else {
                //Idoso
                img.setAttribute("src", "idosom.png")
            }
        }
        else if(form_sex[1].checked){
            gênero = "Mulher"
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "bebef.png")
            }
            else if(idade < 21) {
                //Jovem
                img.setAttribute("src", "jovemf.png")
            }
            else if(idade < 50) {
                //Adulto
                img.setAttribute("src", "adultof.png")
            }
            else {
                //Idoso
                img.setAttribute("src", "idosof.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}