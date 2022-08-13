var addForm = document["addition-form"]

var subForm = document["sub-form"]

var multForm = document["multiply-form"]

addForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let num1 = addForm.add1.value
    let num2 = addForm.add2.value
    let sum = Number(num1) + Number(num2)

    let addH1 = document.getElementById("result")
    addH1.textContent = sum

    addForm.add1.value = 0
    addForm.add2.value = 0
})

subForm.addEventListener("submit", function(event) { 
    event.preventDefault()
    let num1 = subForm.sub1.value
    let num2 = subForm.sub2.value
    let result = Number(num1) - Number(num2)

    let subH1 = document.getElementById("result2")
    subH1.textContent = result

    subForm.sub1.value = 0
    subForm.sub2.value = 0

})

multForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let num1 = multForm.multiply1.value
    let num2 = multForm.multiply2.value
    let result = Number(num1) * Number(num2)

    let multH1 = document.getElementById("result3")
    multH1.textContent = result

    multForm.multiply1.value = 0
    multForm.multiply2.value = 0

    
})