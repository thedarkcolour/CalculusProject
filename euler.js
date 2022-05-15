math.config({
    number: 'BigNumber',      // Default type of number:
                              // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 8             // Number of significant digits for BigNumbers
})

function calculateEuler() {
    let mathFn = math.compile(document.getElementById('math-function').value)
    let xy = {
        x: math.bignumber(document.getElementById('initial-y').valueAsNumber),
        y: math.bignumber(document.getElementById('initial-x').valueAsNumber),
    }
    let dx = math.bignumber(document.getElementById('dx').valueAsNumber)
    let steps = document.getElementById('steps').valueAsNumber

    let table = document.getElementById('calculations')

    // clear any old calculations
    table.innerHTML = ""

    for (let i = 0; i < steps; i++) {
        let xi = xy.x
        let yi = xy.y
        let dyDx = mathFn.evaluate(xy);
        let dy = math.multiply(dyDx, dx);
        // xi, yi, dx, dy/dx, dy, xf, yf
        table.innerHTML += `<tr><td${i === 0 ? " class=\"significant\"" : ""}>${xy.x}</td><td${i === 0 ? " class=\"significant\"" : ""}>${xy.y}</td><td>${dx}</td><td>${dyDx}</td><td>${dy}</td><td${i + 1 === steps ? " class=\"significant\"" : ""}>${xy.x = math.add(xy.x, dx)}</td><td${i + 1 === steps ? " class=\"significant\"" : ""}>${xy.y = math.add(xy.y, dy)}</td><tr>`
    }
}
