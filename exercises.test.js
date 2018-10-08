
const {destroyer, sortOut, diffArray, sumAll} = require('./exercises')

describe('Destroyer Function', () => {

    it('Should be defined', () => {
        expect(destroyer).toBeDefined()
    })

    it('Should remove integer arguments from array', () => {
        expect(destroyer([1, 2, 3], 2)).toEqual([1, 3])
    })

    it('Should remove string arguments from array', () => {
        expect(destroyer(['bear', 'cheetah', 'bobcat'], "cheetah")).toEqual(["bear", "bobcat"])
    }),

    it('Should remove multiple arguments', () => {
        expect(destroyer([45, 18, 25, 90], 45, 25)).toEqual([18, 90])
    })
})

describe('sortOut Function', () => {
    it('Should be defined', () => {
        expect(sortOut).toBeDefined()
    })

    it('Should return an array', () => {
        expect(typeof sortOut([1, 2, 3])).toBe('object')
    })

    it('Should return correct number of values', () => {
        expect( sortOut([4, 67, 10, 4, 11]).length ).toBe(2)
    })

    it('Should return highest/lowest value in array', () => {
        expect( sortOut([432, 10, 5, 2, 56, 4545, 2])).toEqual([4545, 2])
    })

})

describe('diffArray Function', () => {
    it('Should be defined', () => {
        expect(diffArray).toBeDefined()
    })

    it('Should return an array', () => {
        expect( typeof diffArray([45, 10, 12, 5], [45, 10]) ).toBe('object')
    })

    it('Should return an array length <= first argument', () => {
        var firstArray = [145, 10, 5]
        expect( diffArray(firstArray, [456, 10, 23]).length ).toBeLessThanOrEqual(firstArray.length)
    })

    it('Should return difference in arrays', () => {
        expect( diffArray([789, 567, 142, 10], [789, 142, 10])).toEqual([567])
    })
})

describe('sumAll Function', () => {
    it('Should be defined', () => {
        expect(sumAll).toBeDefined()
    })

    it('Should return a number value', () => {
        expect(typeof sumAll([4, 14])).toBe('number')
    })

    it('Should ignore extra arguments given', () => {
        expect( sumAll([4, 14, 18])).toBe(99)
    })

    it('Should return correct sum', () => {
        expect ( sumAll([10, 123]) ).toBe(7581)
    })

    

})