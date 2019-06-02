var alunos = ["Mateus", "joão vitor", "Gabriel", "andré", "raynara", "Rebecca", "Edgard", "Israel", "Naedson", "Wanderson"]

var num_aleatorio = Math.random() * alunos.length

var sorteado = Math.round(num_aleatorio)

console.log( "sorteado : " + alunos[sorteado-1])
