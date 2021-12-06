import { data } from "./data"

//-------------Ordenando la data-----------
let data = points.map(point => point.split(" -> ").flatMap(el => el.split(",")))
    .map(point => point.map(el => parseInt(el)))
//-------------Ordenando la data-----------



//------Creacion del map------------
const createMatrix = (rows, cols) => {

    let matrix = []
    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < cols; j++) {
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

let array = createMatrix(1000, 1000)
//------Creacion del map------------

//Part One

//-----Funcion de rellenado del map------------
//
//Solo horizontales y verticales

const modifiedMatrix = (matrix, line) => {
    //-----X igual
    if (line[0] === line[2]) {
        const x = line[0]
        const [start, end] = [line[1], line[3]].sort((a, b) => a - b)

        for (let i = start; i <= end; i++) {
            matrix[i][x]++
        }


        //-----Y igual
    }

    if (line[1] === line[3]) {
        const y = line[1]
        const [start, end] = [line[0], line[2]].sort((a, b) => a - b)

        for (let i = start; i <= end; i++) {
            matrix[y][i]++
        }

    }
    return matrix
}
//-----Funcion de rellenado del map------------


//-------Rellenando el map-----------
for (let i = 0; i < data.length; i++) {
    array = modifiedMatrix(array, data[i])
}

//-------Rellenando el map-----------

//-----Contando los lugares donde hay al menos 2 puntos

const countMatrix = (matrix) => {

    let count = 0;
    matrix.forEach(segment => segment.forEach(point => {
        if (point >= 2) {
            count++
        }
    }))
    return count
}

const count = countMatrix(array)
console.log(count)


//Part two

//-----Funcion de rellenado del map------------
//
const modifiedMatrix2 = (matrix, line) => {
    //-----X igual ej (0,2,0,7)
    const [x1, y1, x2, y2] = line
    if (x1 === x2) {

        const [start, end] = y1 < y2 ? [y1, y2] : [y2, y1]

        for (let i = start; i <= end; i++) {
            matrix[i][x1]++
        }


        //-----Y igual ej (2,0,7,0)
    } else if (y1 === y2) {
        const [start, end] = x1 < x2 ? [x1, x2] : [x2, x1]

        for (let i = start; i <= end; i++) {
            matrix[y1][i]++
        }

    } else if ((y2 - y1) / (x2 - x1) === 1) {
        const [start, end] = x1 < x2 ? [x1, x2] : [x2, x1]
        const diff = x1 - y1


        for (let x = start; x <= end; x++) {
            matrix[x - x1 + y1][x]++
        }
    } else if ((y2 - y1) / (x2 - x1) === -1) {
        const [start, end] = x1 > x2 ? [x1, x2] : [x2, x1]
        for (let x = start; x >= end; x--) {
            matrix[-(x - x1) + y1][x]++
        }
    }

    return matrix
}
//-------Rellenando el map-----------
for (let i = 0; i < data.length; i++) {
    array = modifiedMatrix2(array, data[i])
}

//-------Rellenando el map-----------
const count2 = countMatrix(array)
console.log(count2)

















