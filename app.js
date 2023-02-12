
function abc(number){
console.log (number)
document.getElementById ("screen").value += number
// var screen = Number(document.getElementById(screen).value);

}
function equal(){
    var equal= document.getElementById("screen").value
    console.log (equal)
    var result = eval(equal);
    console.log(result)
    document.getElementById ("screen").value = result
}
function clearAll(){
    document.getElementById ("screen").value = ""
}
function clearX(){
    var clear  = document.getElementById ("screen").value;
    let result = clear.slice(0, -1);
    document.getElementById("screen").value = result
}
