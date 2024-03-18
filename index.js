// ex1.1

const closure = () => {
    let x = 0

    function countX() {
        for (x = 1; x <= 6; x++) {
            console.log(x);
    }
    }
    return [countX];
}

const [countX] = closure()

countX()

const closure = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function showArr() {
        return arr;
    }
    return [showArr];
}

const [showArr] = closure()

console.log(showArr())




// ex1.2

const closure = () => {
    const initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function evenValues() {
       return initialArr.filter(item => item % 2 == 0)
    }

    return [evenValues];
}

const [evenValues] = closure()

console.log(evenValues())



// ex1.3

const closure = () => {
    const initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function oddValues() {
       return initialArr.filter(item => item % 2 !== 0)
    }

    return [oddValues];
}

const [oddValues] = closure()

console.log(oddValues())



// ex1.4

const closure = () => {
    const initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sum = 0
    for (let i = 0; i < initialArr.length; i++) {
        sum += initialArr[i]
    }

    function sumValues() {
        
       return sum
    }

    return [sumValues];
}

const [sumValues] = closure()

console.log(sumValues())



// ex1.5

const closure = () => {
    let initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    function newValue() {
        initialArr.push(11)
        return initialArr
    }

    return [newValue];
}

const [newValue] = closure()

console.log(newValue())


const closure = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    function addNumber(num) {
       if(typeof num !== 'number' && num.isNaN()) return;

       arr.push(num);
}
}

const [addNumber] = closure()

addNumber(showArr().length+1)
console.log(showArr())



// ex2.1

const arr = [1,2,3,4,5,6]

console.log(arr)



// ex2.3

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.filter(item => item % 2 == 0))



// ex2.3

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.filter(item => item % 2))



// ex2.4

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
console.log(sum)



// ex2.5

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const addValue = arr.push(11)

console.log(arr)