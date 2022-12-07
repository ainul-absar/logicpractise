console.log("password")
let val1 =document.getElementById("in1")
let val2 =document.getElementById("in2")

function passwrd() {
    let passcont = ""
    let passcantaner = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz1234567890'
console.log(passcantaner)
for (let index = 0; index < val1.value; index++) {
    var char = Math.floor(Math.random()*passcantaner.length + 1)
    passcont += passcantaner.charAt(char)
    console.log(val2.value)
    val2.value = passcont
    // console.log(char)
    console.log(passcont)

}
}
