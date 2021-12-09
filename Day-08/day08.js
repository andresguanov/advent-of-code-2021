//Part One
const uniqueKeys = [2, 4, 3, 7]


const separateData = data.map(el => el.split(" | "))
const outputs = separateData.map(el => el[0].split(" "))

const outputsLengths = outputs.map(el => el.map(el => el.length))
const result = outputsLengths.flat().filter(el => uniqueKeys.includes(el)).length

console.log(result)//416


//Part Two
const inputs = separateData.map(el => el[1].split(" "))



const results = outputs.map((output, i) => {

    const inputs = inputs[i]

    const one = inputs.find(el => el.length === 2)
    const four = inputs.find(el => el.length === 4)

    return output.map(el => {

        switch (el.length) {
            case 2:
                return 1

            case 4:
                return 4

            case 3:
                return 7

            case 7:
                return 8

            case 5:


                if (
                    el.includes(one[0])
                    && el.includes(one[1]
                    )) {
                    return 3
                } else {
                    const splitFour = four.split("")
                    const number = el.split("")
                    const length = number.filter(el => splitFour.includes(el)).length

                    if (length === 3) {
                        return 5
                    } else {
                        return 2
                    }
                }

            case 6:
                if (!(el.includes(one[0]) && el.includes(one[1]))) {
                    return 6
                } else if (
                    el.includes(four[0])
                    && el.includes(four[1])
                    && el.includes(four[2])
                    && el.includes(four[3])
                ) {
                    return 9
                } else {
                    return 0
                }
        }
    })
})


const result2 = results.reduce((acum, item) => {
    item = Number(item.join(""))
    return acum + item
}, 0)

console.log(result2)//1043697