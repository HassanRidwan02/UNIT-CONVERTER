/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNumber = document.getElementById("number")
let convertBtn = document.getElementById("convert-btn")

let lenMF = document.getElementById("len-mf")
let volLG = document.getElementById("vol-lg")
let masKG = document.getElementById("mass-kg")

convertBtn.addEventListener("click", () =>{

    let massAnswerT = Number(inputNumber.value) * 0.264
    let massAnswerD = Number(inputNumber.value) / 0.264
    masKG.textContent = `${inputNumber.value} kilogram = ${massAnswerT.toFixed(3)} pounds  | ${inputNumber.value} Pound = ${massAnswerD.toFixed(3)} kilos`

    let litreAnswerT = Number(inputNumber.value) * 0.264
    let litreAnswerD = Number(inputNumber.value) / 0.264
    volLG.textContent = `${inputNumber.value} liters = ${litreAnswerT.toFixed(3)} gallons  | ${inputNumber.value} feet = ${litreAnswerD.toFixed(3)} liters`

    let lengthAnswerT = Number(inputNumber.value) * 3.281
    let lengthAnswerD = Number(inputNumber.value) / 3.281
    lenMF.textContent = `${inputNumber.value} meters = ${lengthAnswerT.toFixed(3)} feet  | ${inputNumber.value} feet = ${lengthAnswerD.toFixed(3)} meters`
})