// alert("Hi Majd !!")
let button = document.getElementById("hi")
let p = document.getElementById("")
function test() {
    let firstName = prompt("what is your name ?","your first name")
    let lastName = prompt("your last name ?")
   firstName= firstName.toUpperCase()
    console.log(firstName);
    console.log(lastName);
    alert(`Hi ${firstName} ${lastName}!`)
}
let m = "majd"
console.log(typeof(m))

button.addEventListener("click" , test)