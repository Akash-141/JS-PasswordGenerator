let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let genBtn = document.getElementById('genBtn');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=> {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

function generatePassword() {
    let genPass = "";

    genPass = Math.floor(Math.random() * 10);
    return genPass;
}



