console.log("Welcome")
let inputF = document.getElementById("in1")
let inputC = document.getElementById("in2")
let tables = document.getElementById("tab")
let main = document.getElementById("mainid")


let arr = []
function butndone() {
    console.log("working")
    arr = []
arr.push({
    name:inputF.value,
    color:inputC.value
})
console.log(arr)
arr.forEach((item) => {
    let li = document.createElement("li")
    li.innerText = `${item.name} -- ${item.color}`
    li.setAttribute("id", `${item.color}`)
    tables.appendChild(li)
    console.log(li)
    
    document.getElementById(item.color).addEventListener('click', () => {
        main.style.backgroundColor = item.color
    })
});

}

