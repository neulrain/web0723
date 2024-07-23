let stars = "*"
let blank = '\u00A0'
let result = ''


for(let i = 0; i < 6; i++){
    for(let z = 5; z > i; z--){
    result += blank
    }
    for(let j = 0; j < 2 * i - 1; j++){
    result += stars
    }
    result += '\n'
}
console.log(result)