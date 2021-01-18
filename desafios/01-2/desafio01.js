/**
 * Desafio 01
 * Cálculo IMC
 * Cálculo aposentadoria
 **/

const Pessoa = {
    nome: 'Carlos',
    peso: 84,
    altura: 1.88,
}

const imc = pessoa => {
    let {peso , altura, nome } = pessoa;
    let imc = peso / (altura*altura);

    if(imc >= 30){
        console.log(`${nome} você esta acima do peso ideal.`)
        return 
    }else{
        console.log(`${nome} você com peso ideal.`)
        return
    }
}

imc(Pessoa);

const Idoso = {
    nome: 'Silvana',
    sexo: 'F',
    idade: 48,
    contribuicao: 23,
}

const aposentadoria = (aposentado) => {
    let {nome, sexo, idade, contribuicao} = aposentado;

    if(sexo === 'F'){
       let aposenta =  (contribuicao >= 30) || (contribuicao + idade >= 85)
       aposenta ? console.log(`${nome}, você pode se aposentar`) :  console.log(`${nome}, você não pode se aposentar`) 
       return
    }else if(sexo === 'M'){
        let aposenta =  (contribuicao >= 35) || (contribuicao + idade >= 95)
        aposenta ? console.log(`${nome}, você pode se aposentar`) :  console.log(`${nome}, você não pode se aposentar`) 
        return
    }

    console.log('não foi possivel realizar calculo de aposentadoria')
    return 
}

aposentadoria(Idoso);