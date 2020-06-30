const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

//percorrer o array
var totalReceitas = 0
var totalDespesas = 0


for (let i = 0; i < usuarios.length; i++) {
    totalReceitas = 0
    totalDespesas = 0
    for (let x = 0; x < usuarios[i].receitas.length; x++) {
        totalReceitas += usuarios[i].receitas[x]
    }
    for (let x = 0; x < usuarios[i].despesas.length; x++) {
        totalDespesas += usuarios[i].despesas[x]
    }

    calculaSaldo(totalDespesas, totalReceitas)
    function calculaSaldo(receitas, despesas) {
        let resultado = receitas - despesas
        if (resultado > 0) {
            console.log(`o usuario ${usuarios[i].nome} possui saldo positivo: ${resultado}`)
            
        }else{
            console.log(`o usuario ${usuarios[i].nome} possui saldo negativo: ${resultado}`)
        }
    }
    
}


