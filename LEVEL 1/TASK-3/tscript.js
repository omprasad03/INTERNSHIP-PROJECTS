let celInput=document.querySelector('#celsius > input')
let fahInput=document.querySelector('#fahrenheit > input')
let kelInput=document.querySelector('#kelvin > input')

let btn=document.querySelector('.button button')

function roundNum(number){
  return Math.round(number*100)/100
}

/* Celcius to Fahrenheit and Kelvin */
celInput.addEventListener('input', function(){
  let cTemp = parseFloat(celInput.value)
  let fTemp = (cTemp*(9/5)) + 32
  let kTemp = cTemp + 273.15

  fahInput.value = roundNum(fTemp)
  kelInput.value = roundNum(kTemp)
})

/* Fahrenheit to Celcius and Kelvin */
fahInput.addEventListener('input', function(){
  let fTemp = parseFloat(fahInput.value)
  let cTemp = (fTemp - 32) * (5/9)
  let kTemp = (fTemp -32) * (5/9) + 273.15

  celInput.value = roundNum(cTemp)
  kelInput.value = roundNum(kTemp)
})

/* Kelvin to Celcius and Fahrenheit */
kelInput.addEventListener('input', function(){
  let kTemp = parseFloat(kelInput.value)
  let cTemp = kTemp - 273.15
  let fTemp = (kTemp - 273.15) * (9/5) + 32

  celInput.value = roundNum(cTemp)
  fahInput.value = roundNum(fTemp)
})

btn.addEventListener('click', ()=>{
  celInput.value = ""
  fahInput.value = ""
  kelInput.value = ""
})