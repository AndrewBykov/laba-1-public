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
        sum += i
    }

    return result = ((-1) ** sum * (num1 * 2 * sum)) / (2 * sum + 1)
}

function answearText() {
    const result = calculate(input, input1);

    input.value = ''
    input1.value = ''

    res.textContent = result
}




