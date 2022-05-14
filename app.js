document.addEventListener('DOMContentLoaded', () => {
    const elementsByClassName = document.getElementsByClassName('calculator');

    console.log(elementsByClassName)

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

function calculateRiemann() {
    const sumType = document.getElementById('riemann-sum').value
    const a = document.getElementById('endpoint-a').valueAsNumber
    const b = document.getElementById('endpoint-b').valueAsNumber
    const intervals = document.getElementById('number-of-intervals').valueAsNumber
    const dx = (b - a) / intervals

    if (isNaN(a)) {
        document.getElementById('answer-contents').textContent = "Missing Endpoint A"
        return
    } else if (isNaN(b)) {
        document.getElementById('answer-contents').textContent = "Missing Endpoint B"
        return
    } else if (isNaN(intervals)) {
        document.getElementById('answer-contents').textContent = "Missing Intervals"
        return
    }

    let mathFn = document.getElementById('math-function').value

    if (mathFn === 'y = sin(x)') {
        mathFn = Math.sin
    } else if (mathFn === 'y = cos(x)') {
        mathFn = Math.cos
    } else if (mathFn === 'y = ln(x)') {
        mathFn = function (x) {
            return Math.log(x) / Math.log(Math.E)
        }
    }

    console.log(dx)

    let answer = "invalid"

    if (sumType === 'Trapezoid Sum') {
        answer = trapezoidSum(a, dx, intervals, mathFn)
    } else if (sumType === 'Midpoint Sum') {
        answer = midPointSum(a, dx, intervals, mathFn)
    } else if (sumType === 'Left Sum') {
        answer = leftSum(a, dx, intervals, mathFn)
    } else if (sumType === 'Right Sum') {
        answer = rightSum(a, dx, intervals, mathFn)
    }

    document.getElementById('answer-contents').textContent = answer
}

function rightSum(a, dx, intervals, mathFn) {
    let sum = 0

    for (let i = 0; i < intervals; i++) {
        a += dx

        let rectHeight = mathFn(a)

        console.log(`x val: ${a} height: ${rectHeight} area: ${rectHeight * dx}`)

        sum += rectHeight * dx
    }

    return sum
}

function leftSum(a, dx, intervals, mathFn) {
    let sum = 0

    for (let i = 0; i < intervals; i++) {
        let rectHeight = mathFn(a)
        console.log(`x val: ${a} height: ${rectHeight} area: ${rectHeight * dx}`)

        sum += rectHeight * dx
        a += dx
    }

    return sum
}

function midPointSum(a, dx, rectangles, mathFn) {
    let sum = 0

    for (let i = 0; i < rectangles; i++) {
        let rectHeight = mathFn(a + dx / 2)

        sum += rectHeight * dx

        console.log(a + dx / 2)

        a += dx
    }

    return sum
}

function trapezoidSum(a, dx, rectangles, mathFn) {
    let sum = 0

    for (let i = 0; i < rectangles; i++) {
        let rectHeight = (mathFn(a + (i * dx)) + mathFn(a + (i + 1) * dx)) / 2

        sum += rectHeight * dx
    }

    return sum
}

function calculateEuler() {

}