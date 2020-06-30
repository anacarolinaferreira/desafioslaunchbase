//CALCULO IMC

//const nome = "Carlos"
//const peso =  84
//const altura = 1.88
//const sexo = "Masculino"

//SE o IMC maior ou igual a 30: acima do peso;
//SE o IMC menor que 29.9: não está acima do peso;
//const imc = peso / (altura*altura)
//if(imc >= 30){
//    console.log(`${nome} você está acima do peso.(${imc})`)
//}else{
//  console.log(`${nome} você não está acima do peso(${imc})`)
//}


//CALCULO APOSENTADORIA
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do 
//homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
const soma = idade + contribuicao
if (sexo === 'F') {
    if (soma >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if (soma >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}