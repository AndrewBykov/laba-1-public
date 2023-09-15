const input = document.querySelector('#input')
const input1 = document.querySelector('#input1')
const btn = document.querySelector('#btn')
const res = document.querySelector('#result')

btn.addEventListener('click', answearText)

function calculate(n, x) {
    const num = Number(n.value)
    const num1 = Number(x.value)
    let sum = 0;

    for(let i = 0; i < num; i++){
        let b = ((-1) ** i * (num1 * 2 * i)) / (2 * i + 1)
        sum = sum + b
    }

    return result = sum
}

function answearText() {
    const result = calculate(input, input1);

    input.value = ''
    input1.value = ''

    res.textContent = result
}




