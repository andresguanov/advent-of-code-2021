import { data } from "./data"

const part1 = (positions) => {

    let fuel = 0;
    const indexes = positions.sort((a, b) => a - b)
    const length = indexes.length

    positions.forEach(position => {
        fuel += Math.abs(position - indexes[length / 2])
    })

    return fuel;

}

part1(data)

//Part two

const part2 = (positions) => {

    let fuel = 0;
    const indexes = [...new Set(positions)].sort((a, b) => a - b)

    for (let i = 0; i < indexes[indexes.length - 1]; i++) {

        let fuelIndex = 0;

        for (let j = 0; j < positions.length; j++) {

            //formula S(n)=n(n+1)/2
            const n = Math.abs(positions[j] - indexes[i])
            fuelIndex += n * (n + 1) / 2

        }

        if (i === 0 || fuelIndex < fuel) {

            fuel = fuelIndex

        } else {

            break
        }
    }

    return fuel;
}

part2(data)//104822130
