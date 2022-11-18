console.log(typeof Array, typeof new Array)

let aprovados = new Array('Vitor', 'André', 'Renato')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados)

console.log(aprovados[8] === null)

console.log(aprovados.sort())// ordenando o Arr

delete aprovados[1]
console.log(aprovados[1])


aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(0, 0, 'AdicionandoEle1', 'AdicionandoEle2')

console.log(aprovados)