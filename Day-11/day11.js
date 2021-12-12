const data = [
    "2264552475",
    "7681287325",
    "3878781441",
    "6868471776",
    "7175255555",
    "7517441253",
    "3513418848",
    "4628736747",
    "1133155762",
    "8816621663",
]

const fillData = (data, fillNumber) => {
    data = data.map(line => line.split("").map(el => Number(el)))
    const fill = Array(data[0].length + 2).fill(fillNumber)
    data = data.map(line => [fillNumber, ...line, fillNumber])
    return [fill, ...data, fill]
}

const octopuses = fillData(data, 30)

const part1 = (data, times) => {
    let result = 0
    for (let time = 0; time < times; time++) {
        const stack = []
        const increase = (i, j, data) => {
            stack.push([i, j])
            //-------------------------Sumas----------------------------------

            for (let row = i - 1; row <= i + 1; row++) {
                for (let col = j - 1; col <= j + 1; col++) {
                    const includes = stack.some(el => el[0] === row && el[1] === col)
                    if (includes) {
                        data[row][col] = 0
                    } else {
                        data[row][col]++
                    }
                }
            }
            //-------------------------Sumas----------------------------------
            //-------------------------Recursividad--------------------------

            for (let row = i - 1; row <= i + 1; row++) {
                for (let col = j - 1; col <= j + 1; col++) {
                    const same = row === i && col === j
                    if (!same) {
                        if (data[row][col] > 9 && data[row][col] < 20) {
                            data = increase(row, col, data)
                        }
                    }
                }
            }

            //-------------------------Recursividad--------------------------

            return data
        }

        for (let i = 1; i < data.length - 1; i++) {
            for (let j = 1; j < data[i].length - 1; j++) {
                if (data[i][j] === 9) {
                    data = increase(i, j, data)
                } else {
                    const includes = stack.some(el => el[0] === i && el[1] === j)
                    if (includes) {
                        data[i][j] = 0
                    } else {
                        data[i][j]++
                    }
                }
            }
        }

        for (let i = 1; i < data.length - 1; i++) {
            for (let j = 1; j < data[i].length - 1; j++) {
                if (data[i][j] === 0) {
                    result++
                }
            }
        }
    }

    return result
}

const result = part1(octopuses, 100)
console.log(result)

//Part Two

const part2 = data => {
    let result = 0;
    let repeat = true;
    while (repeat) {
        const stack = []
        const increase = (i, j, data) => {
            stack.push([i, j])
            //-------------------------Sumas----------------------------------

            for (let row = i - 1; row <= i + 1; row++) {
                for (let col = j - 1; col <= j + 1; col++) {
                    const includes = stack.some(el => el[0] === row && el[1] === col)
                    if (includes) {
                        data[row][col] = 0
                    } else {
                        data[row][col]++
                    }
                }
            }
            //-------------------------Sumas----------------------------------
            //-------------------------Recursividad--------------------------

            for (let row = i - 1; row <= i + 1; row++) {
                for (let col = j - 1; col <= j + 1; col++) {
                    const same = row === i && col === j
                    if (!same) {
                        if (data[row][col] > 9 && data[row][col] < 20) {
                            data = increase(row, col, data)
                        }
                    }
                }
            }

            //-------------------------Recursividad--------------------------

            return data
        }

        for (let i = 1; i < data.length - 1; i++) {
            for (let j = 1; j < data[i].length - 1; j++) {
                if (data[i][j] === 9) {
                    data = increase(i, j, data)
                } else {
                    const includes = stack.some(el => el[0] === i && el[1] === j)
                    if (includes) {
                        data[i][j] = 0
                    } else {
                        data[i][j]++
                    }
                }
            }
        }

        let newData = []
        for (let i = 1; i < data.length - 1; i++) {
            for (let j = 1; j < data[i].length - 1; j++) {
                newData.push(data[i][j])
            }
        }

        result++
        repeat = !newData.every(el => el === 0)

    }

    return result
}


const result2 = part2(octopuses)
console.log(result2)



