const stars = "*"
const blank = '\u00A0'
let result1 = ''
let result2 = ''

for(let i = 0; i < 6; i++){
    for(let z = 5; z > i; z--){
    result1 += blank
    }
    for(let j = 0; j < 2 * i - 1; j++){
    result1 += stars
    }
    result1 += '\n'
}

for(let i = 0; i < 5; i++){
    for(let j = 0; j < i; j++){
    result2 += blank
    }
    for(let z = 8; z > 2 * i - 1; z--){
    result2 += stars
    }
    result2 += '\n'
}
console.log(result1 + result2)