var addForm = document["addition-form"]

var subForm = document["sub-form"]

var multForm = document["multiply-form"]

addForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let num1 = addForm.add1.value
    let num2 = addForm.add2.value
    let sum = Number(num1) + Number(num2)

    let addH1 = document.createElement("h1")
    addH1.textContent = sum
    document.getElementById("add-button").append(addH1)
})

subForm.addEventListener("submit", function(event) { 
    event.preventDefault()
    let num1 = subForm.sub1.value
    let num2 = subForm.sub2.value
    let result = Number(num1) - Number(num2)

    let subH1 = document.createElement("h1")
    subH1.textContent = result
    document.getElementById("sub-button").append(subH1)
})

multForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let num1 = multForm.multiply1.value
    let num2 = multForm.multiply2.value
    let result = Number(num1) * Number(num2)

    let multH1 = document.createElement("h1")
    multH1.textContent = result
    document.getElementById("mult-button").append(multH1)
})