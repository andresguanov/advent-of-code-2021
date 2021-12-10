const fs = require("fs");

const data = fs
    .readFileSync("data.txt", { encoding: "utf-8" })
    .split("\n")


const arr = data.map(el => el.split(""))
const values = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
}

const hashTable = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
}

const keys = Object.keys(hashTable)

const part1 = (data, keys) => {


    const results = []

    for (let i = 0; i < data.length; i++) {
        const stack = []

        for (let j = 0; j < data[i].length; j++) {
            const current = data[i][j]

            if (keys.includes(current)) {
                stack.push(current)
            } else {

                const comparison = stack.pop()

                if (hashTable[comparison] !== current) {
                    results.push([i, current])
                    continue
                }
            }
        }
    }

    return results
}

const results = part1(arr, keys)
const result = results
    .map(el => values[el[1]])
    .reduce((a, b) => a + b)

console.log(result)

//Part Two

const indexes = results.map(el => el[0])
const data2 = data.filter((_, i) => !indexes.includes(i))

const values2 = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
}

const part2 = (data, chars) => {

    const results = []

    for (let i = 0; i < data.length; i++) {
        const stack = []

        for (let j = 0; j < data[i].length; j++) {
            const current = data[i][j]

            if (keys.includes(current)) {
                stack.push(current)
            } else {
                stack.pop()
            }
        }
        results.push(stack)
    }
    return results
}

const partTwo = part2(data2, values)
const reverseElements = partTwo.map(el => el.reverse())
const resultsPartTwo = reverseElements.map(line => line.map(el => hashTable[el]))
const resultValues = resultsPartTwo.map(line => line.map(el => values2[el]))
const resultReduce = resultValues.map(line => line.reduce((a, b) => a * 5 + b), 0)
const resultSort = resultReduce.sort((a, b) => a - b)
const result2 = resultSort[(resultSort.length - 1) / 2]
console.log(result2)



















