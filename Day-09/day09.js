const fs = require("fs");

const data = fs
    .readFileSync("data.txt", { encoding: "utf-8" })
    .split("\n")

const fillData = (data, number) => {
    const filled = Array(data[0].length + 2).fill(number)
    let array = data.map(row => row.split("").map(el => Number(el)))
    array = array.map(row => [number, ...row, number])
    array = [filled, ...array, filled]
    return array

}

const matrix = fillData(data, 10)


//Part One

const part1 = (matrix) => {

    const results = []

    for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[0].length - 1; j++) {
            const current = matrix[i][j]
            const top = current < matrix[i - 1][j]
            const bottom = current < matrix[i + 1][j]
            const rigth = current < matrix[i][j + 1]
            const left = current < matrix[i][j - 1]

            if (top && bottom && rigth && left) {
                results.push(matrix[i][j] + 1)
            }
        }
    }

    return results.reduce((a, b) => a + b)
}

console.log(part1(matrix))

//Part Two 

const matrix2 = fillData(data, 9).map(el => el.map(el => el === 9 ? 1 : 0))


const part2 = (matrix) => {

    let results = []

    for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[0].length - 1; j++) {
            const size = neighbors(i, j, matrix);

            if (size > 0) {
                results.push(size);
            }
        }
    }
    results = results.sort((a, b) => b - a)

    return results[0] * results[1] * results[2]
}

function neighbors(i, j, matrix) {
    if (matrix[i][j] === 1) return 0;
    matrix[i][j] = 1;

    let size = 1;

    if (i - 1 >= 0) {
        size += neighbors(i - 1, j, matrix);
    }
    if (i + 1 < matrix.length) {
        size += neighbors(i + 1, j, matrix);
    }
    if (j - 1 >= 0) {
        size += neighbors(i, j - 1, matrix);
    }
    if (j + 1 < matrix[i].length) {
        size += neighbors(i, j + 1, matrix);
    }

    return size;
}

console.log(part2(matrix2))


