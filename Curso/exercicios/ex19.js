const pedido = (item, qnt)=>{
    switch (item) {
        case 100:
            return `Cachorro Quente: R$ ${qnt * 3}`
        break;
        case 200:
            return 'Hambúrguer Simples: R$' + qnt * 4
            break;
        case 300:
            return 'Cheeseburguer: R$' + qnt * 5.5
            break;
        case 400:
            return 'Bauru: R$' + qnt * 7.5
            break;
        case 500:
            return 'Refrigerante: R$' + qnt * 3.5
            break;
        case 600:
            return 'Suco: R$' + qnt * 2.8
            break;
        default:
            'Esse produto não existe!'
    }
}
console.log(pedido(100, 3))