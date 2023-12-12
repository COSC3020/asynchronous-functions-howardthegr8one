const fs = require('fs');
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

describe('unit test0', () => {
    const key = 3
    const array = [1, 2, 3, 3, 4, 5, 4, 3, 4, 3, 3, 3, 5, 6, 7, 8, 7, 6, 3] 
    const solution = 7
    const result = countMatches(array, key)
    result.then(answer => {
        it('successful unit test', () => {
            assert.deepEqual(solution, answer)
        })
    })
})

describe('unit test1', () => {
    const key = 1
    const array = [1, 1, 1, 1] 
    const solution = 4
    const result = countMatches(array, key)
    result.then(answer => {
        it('successful unit test for array of identical values', () => {
            assert.deepEqual(solution, answer)
        })
    })
})

describe('unit test2', () => {
    const key = 0
    const array = [1, 2, 3, 4, 5]


    const solution = 0
    const result = countMatches(array, key)
    result.then(answer => {
        it('sucessful test for when key is not in array', () => {
            assert.deepEqual(solution, answer)
        })
    })
})

describe('unit test3', () => {
    const key = 5
    const array = [] 

    const solution = 0
    const result = countMatches(array, key)
    result.then(answer => {
        it('successful test for empty array', () => {
            assert.deepEqual(solution, answer)
        })
    })
})


