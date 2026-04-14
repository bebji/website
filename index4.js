const equation = []
const digits = document.querySelectorAll("button[id^='digit']");
const operators = document.querySelectorAll("button[id^='operator']");
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")
const root = document.getElementById("root");
root.addEventListener('click', () => {
    if(equation.length > 0) {
        let result = Math.sqrt(eval(equation.join('')));
        document.getElementById("numfield").textContent = result;
        equation.length = 0;
        equation.push(String(result));
    }
});
document.getElementById("numfield").textContent = "0"
digits.forEach(item => {
    item.addEventListener('click', () => {
        equation.push(item.textContent)
        document.getElementById("numfield").textContent = equation.join('');
    })
})
operators.forEach(item => {
    item.addEventListener('click', () => {
        equation.push(item.textContent)
        document.getElementById("numfield").textContent = equation.join('');
    });
});
clear.addEventListener('click', () => {
    equation.length = 0; // empty the array
    document.getElementById("numfield").textContent = "0";
})


equals.addEventListener('click', () => {
    let result = eval(equation.join(''));
    document.getElementById("numfield").textContent = result;
    equation.length = 0;
    equation.push(String(result));
})