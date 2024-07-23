let stars = "*"
let blank = '\u00A0'
let result = ''


for(let i = 0; i < 5; i++){
    for(let j = 0; j < i; j++){
    result += blank
    }
    for(let z = 8; z > 2 * i - 1; z--){
    result += stars
    }
    result += '\n'
}
console.log(result)