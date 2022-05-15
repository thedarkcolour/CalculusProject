document.addEventListener('DOMContentLoaded', () => {
    const elementsByClassName = document.getElementsByClassName('calculator');

    let h = 0

    function test() {
        for (let i = 0; i < elementsByClassName.length; i++) {
            let calculator = elementsByClassName[i]
            calculator.style.backgroundColor = `hsl(${h}, 100%, 60%)`
        }
        h = (h + 1) % 360
    }

    setInterval(test, 30)
})