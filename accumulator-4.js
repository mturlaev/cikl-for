let arr = ['жаба', 'мага', 'эми', 'амирхан', 'асхаб', 'имран', 'рамзан', 'иса', 'яхья', 'альви',]
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toLowerCase() === 'а') {
       accumulator.push(arr[i]) 
    }
}
console.log(accumulator);