
const arr = ['a','b','c'];
arr.test = "abc"
console.log(arr)
/**
 * for e for..in fornecesse acesso ao indice do array
 */
for(let i = 0; i < arr.length ;i++){
    console.log(arr[i]);
}

for(let i in arr){
    console.log(arr[i]);
}
/**
 * for..on e forEach tem acesso ao próprio elemento do array
 * com forEach é possivel acessar o indice
 */
for(var v of arr){
    console.log(v)
}

arr.forEach((v,i) => console.log(`index: ${i} - valor: ${v}`))

