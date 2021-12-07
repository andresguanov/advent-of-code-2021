let data = [3, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 2, 1, 1, 2, 1, 3, 4, 5, 1, 1, 4, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 3, 3, 1, 5, 5, 1, 1, 3, 1, 1, 2, 1, 1, 1, 3, 1, 4, 3, 2, 1, 4, 3, 3, 1, 1, 1, 1, 5, 1, 4, 1, 1, 1, 4, 1, 4, 4, 1, 5, 1, 1, 4, 5, 1, 1, 2, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 5, 1, 3, 1, 1, 4, 4, 1, 1, 5, 1, 2, 1, 1, 1, 1, 5, 1, 3, 1, 1, 1, 2, 2, 1, 4, 1, 3, 1, 4, 1, 2, 1, 1, 1, 1, 1, 3, 2, 5, 4, 4, 1, 3, 2, 1, 4, 1, 3, 1, 1, 1, 2, 1, 1, 5, 1, 2, 1, 1, 1, 2, 1, 4, 3, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 2, 1, 1, 5, 1, 1, 3, 1, 2, 5, 5, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 4, 1, 1, 4, 1, 3, 4, 1, 5, 4, 2, 5, 1, 2, 1, 1, 1, 1, 1, 1, 4, 3, 2, 1, 1, 3, 2, 5, 2, 5, 5, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 4, 1, 4, 2, 1, 3, 4, 1, 1, 1, 2, 3, 1, 1, 1, 4, 1, 2, 5, 1, 2, 1, 5, 1, 1, 2, 1, 2, 1, 1, 1, 1, 4, 3, 4, 1, 5, 5, 4, 1, 1, 5, 2, 1, 3]

const day = 80

//In the part two section there are a better solution to this problem
const part1 = (initialFishes, days) => {
    let data = [...initialFishes];


    for (let i = 1; i <= days; i++) {


        for (let j = 0; j < data.length; j++) {

            if (data[j] === 0) {
                data.push(9)
                data[j] = 6
            } else {
                data[j]--

            }
        }

    }
    return data

}

part1(data, day).length

//Part two

const day2 = 256

const countFishes = (fishes, days) => {

    const queue = Array(9).fill(0)

    fishes.forEach(fish => queue[fish]++)

    for (let i = 0; i < days; i++) {
        let currentFish = queue.shift()
        queue[6] += currentFish
        queue.push(currentFish)

    }
    return queue.reduce((a, b) => a + b)

}

countFishes(data, day2)

