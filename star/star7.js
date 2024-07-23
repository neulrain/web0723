let stars = "*"
let blank = '\u00A0'
let result = ''


for(let i = 0; i < 6; i++){
    for(let j = 0; j < i; j++){
    result += blank
    }
    for(let z = 5; z > i; z--){
    result += stars
    }
    result += '\n'
}
console.log(result)