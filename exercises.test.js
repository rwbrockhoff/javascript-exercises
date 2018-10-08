const destroyer = require('./exercises')

describe('Destroyer Function', () => {

    it('Should be defined', () => {
        expect(destroyer).toBeDefined()
    }),

    it('Should remove integer arguments from array', () => {
        expect(destroyer([1, 2, 3], 2)).toEqual([1, 3])
    }),

    it('Should remove string arguments from array', () => {
        expect(destroyer(['bear', 'cheetah', 'bobcat'], "cheetah")).toEqual(["bear", "bobcat"])
    }), 

    it('Should remove multiple arguments', () => {
        expect(destroyer([45, 18, 25, 90], 45, 25)).toEqual([18, 90])
    })
})