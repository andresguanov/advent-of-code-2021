import { data } from "./data.js"


const data2 = data.map(el => {
    return el.split(" ")
})

//Part one
const obj = data2.reduce((obj, item) => {
    obj[item[0]] = (obj[item[0]] || 0) + Number(item[1])
    return obj
}, {})

const result = obj["forward"] * (obj["down"] - obj["up"])

console.log(result)

//Part two
let aim = 0, depth = 0;

for (let i = 0; i < data2.length; i++) {
    const el = data2[i]
    const num = Number(el[1])

    switch (el[0]) {
        case "down":
            aim += num
            break
        case "up":
            aim -= num
            break
        case "forward":
            depth += aim * num
            break;
    }
}

const result2 = obj["forward"] * depth

console.log(result2)