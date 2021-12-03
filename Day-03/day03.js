import { data } from "../Day-02/data"

const gamma = []
const epsilon = []

for (let i = 0; i < data[0].length; i++) {
    const column = data.map(el => el[i])
    const ones = column.filter(el => el === "1").length
    const zeros = data.length - ones

    if (ones > zeros) {
        gamma.push(1)
        epsilon.push(0)
    } else {
        gamma.push(0)
        epsilon.push(1)
    }

}


const gammaBinary = gamma.join("")
const gammaDecimal = parseInt(gammaBinary, 2)
const epsilonBinary = epsilon.join("")
const epsilonDecimal = parseInt(epsilonBinary, 2)

const result = gammaDecimal * epsilonDecimal
console.log(result)


//Part Two

let O2 = [...data]
let CO2 = [...data]

for (let i = 0; i < data[0].length + 1; i++) {
    const column = O2.map(el => el[i])

    let ones = column.filter(el => el === "1").length
    let zeros = O2.length - ones
    if (ones >= zeros) {
        O2 = O2.filter(el => el[i] === "1")
    } else {
        O2 = O2.filter(el => el[i] === "0")


    }
    if (O2.length === 1) {
        O2 = parseInt(O2[0], 2)
        break
    }

}

for (let i = 0; i < data[0].length + 1; i++) {
    const column = CO2.map(el => el[i])

    let ones = column.filter(el => el === "1").length
    let zeros = CO2.length - ones

    if (zeros <= ones) {
        CO2 = CO2.filter(el => el[i] === "0")
    } else {
        CO2 = CO2.filter(el => el[i] === "1")

    }
    if (CO2.length === 1) {
        CO2 = parseInt(CO2[0], 2)
        break
    }

}


const result2 = O2 * CO2
result2














