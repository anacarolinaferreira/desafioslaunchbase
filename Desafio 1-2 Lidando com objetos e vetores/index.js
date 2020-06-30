//CONSTRUÇÃO E IMPRESSÃO DE OBJETOS

const empresa = {
    nome: 'Rocketseat',
    cor: 'roxo',
    foco: 'programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}
console.log(`A empresa ${empresa.nome} esta localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)



//VETORES E OBJETOS
const programador =
{
    nome: 'Carol',
    idade: 24,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }

    ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia 
${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)