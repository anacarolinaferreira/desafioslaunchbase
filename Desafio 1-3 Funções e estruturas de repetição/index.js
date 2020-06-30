

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

const usuarios = [
    {
        nome: "Nicoli",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Carol",
        tecnologias: [
            "HTML",
            "JavaScript",
            "CSS"
        ]
    },
    {
        nome: "Tuane",
        tecnologias: [
            "Node.JS",
            "JavaScript"
        ]

    }
]

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
}

//Verifica qual usuario trabalha com CSS
function checaSeUsuarioUsaCSS(usuario) {
        if (usuario.tecnologias.indexOf("CSS") != -1) {
            return true
        } else {
            return false
        }
}

for (let i = 0; i < usuarios.length; i++) {
    const trabalhaCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (trabalhaCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
