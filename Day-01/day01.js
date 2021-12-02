import { data } from "./data";

let increased = 0;

for (let i = 2; i < data.length; i++) {
    const sum = data[i - 2] + data[i - 1] + data[i];
    sums.push(sum)
}

for (let i = 1; i < sums.length; i++) {
    if (sums[i] > sums[i - 1]) {

        increased++
    }
}

console.log(increased)


