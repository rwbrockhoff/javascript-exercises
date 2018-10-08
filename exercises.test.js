
const {destroyer, sortOut, diffArray, sumAll, spinalCase, findLongestWordLength, myReplace, pairElement, fearNotLetter, uniteUnique} = require('./exercises')

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

describe('spinalCase Function', () => {
    var resolution = 'this-is-spinal-tap'

    it('Should be defined', () => {
        expect(spinalCase).toBeDefined()
    })

    it('Should return a string', () => {
        expect( typeof spinalCase('Wisconsin in the Winter')).toBe('string')
    })

    it('Should return spinal case when given spaces', () => {
        expect( spinalCase('This is Spinal Tap')).toBe(resolution)
    })

    it('Should return spinal case when given camel case', () => {
        expect( spinalCase('thisIsSpinalTap')).toBe(resolution)
    })

    it('Shoudl return spinal case when given underscores', () => {
        expect( spinalCase('This_Is_Spinal_Tap')).toBe(resolution)
    })
})

describe('findLongestWordLength Function', () => {
    it('Should be defined', () => {
        expect(findLongestWordLength).toBeDefined()
    })

    it('Should return a positive integer', () => {
        expect( findLongestWordLength('hello goodbye')).toBeGreaterThan(0)
    })

    it('Should return length of longest word', () => {
        var longest = 'Deutschland'
        var length = longest.length
        expect( findLongestWordLength(`${longest} word here`)).toBe(length)
    })

    it('Should ignore periods as characters', () => {
        var withPeriod = 'Deutschland.'
        var lengthWithoutPeriod = withPeriod.length -1
        expect (findLongestWordLength(`${withPeriod} is home`)).toBe(lengthWithoutPeriod)
    })

    it('Should ignore consecutive periods', () => {
        expect(  findLongestWordLength("Worrysome.. Sentence is here to test.") ).toBe(9)
    })
})

describe('myReplace function', () => {
    var sampleString = 'Hi Sandra. How are you doing?'
    var initialName = 'Sandra'
    var resolvedName = 'Thomas'

    it('Should be defined', () => {
        expect(myReplace).toBeDefined()
    })

    it('Should return a string', () => {
        expect(typeof myReplace(sampleString, initialName, resolvedName)).toBe('string')
    })

    it('Should return a string containing new input', () => {
        expect( myReplace(sampleString, initialName, resolvedName)).toContain(resolvedName)
    })

    it('Should replace initialValue with resolvedValue with same lower/upper case as initialValue', () => {
        expect( myReplace("He is Sleeping on the couch", "Sleeping", "sitting") ).toContain('Sitting')
    })

    it('Should replace with lower case character', () => {
        expect( myReplace("He is sleeping on the couch", "sleeping", "sitting") ).toContain('sitting')
    })
})

describe('pairElement function', () => {
    it('Should be defined', () => {
        expect(pairElement).toBeDefined()
    })

    it('Should resolve to array', () => {
        expect(typeof pairElement('ATCG')).toBe('object')
    })

    it('Should resolve to an array with same length as string', () => {
        expect( pairElement('ATCG').length ).toBe(4)
    })

    it('Should return AT for A input', () => {
        expect( pairElement('ATCG')[0] ).toEqual(['A', 'T'])
    })

    it('Should return TA for T input', () => {
        expect ( pairElement('ATCG')[1]).toEqual(['T', 'A'])
    })

    it('Should return CG for C input', () => {
        expect( pairElement('ATCG')[2]).toEqual(['C', 'G'])
    })

    it('Should return GC for G input', () => {
        expect( pairElement('ATCG')[3]).toEqual(['G', 'C'])
    })

    it('Should resolve with lowercase characters', ()=> {
        expect( pairElement('aaaa')).toBeTruthy()
    })

    it('Should resolve array with lowercase character input', () => {
        expect( typeof pairElement('aaaa')).toBe('object')
    })

    it('Should resolve array with correct DNA pairs', () => {
        expect( pairElement('aG')).toEqual([['A', 'T'], ['G', 'C']])
    })
})

describe('fearNotLetter function', () => {

    it('Should be defined', () => {
        expect(fearNotLetter).toBeDefined()
    })

    it('Should return a string', () => {
        expect(typeof fearNotLetter('abde')).toBe('string')
    })

    it('Should return a string with length of 1', () => {
        expect( fearNotLetter('abde').length ).toBe(1)
    })

    it('Should return the missing letter in the alphabet', () => {
        expect( fearNotLetter('abcef')).toBe('d')
    })

    it('Should be undefined if no missing letter', () => {
        expect( fearNotLetter('mnopqrst')).toBeUndefined()
    })

    it('Should work with capital letters', () => {
        expect ( fearNotLetter('FGHJK') ).toBe('i')
    })

    it('Should work at any place in the alphabet', () => {
        expect( fearNotLetter("stvwx") ).toBe('u')
    })
})

describe('uniteUnique Function', () => {
    var testArray = [1, 45, 10, 4, 18]
    var testArray2 = [24, 24, 10, 3]
    var length = () => {
        return testArray.length > testArray2.length ? testArray.length: testArray2.length
    }
    it('Should be defined', () => {
        expect(uniteUnique).toBeDefined()
    })

    it('Should return an array', () => {
        expect( Array.isArray( uniteUnique(testArray, testArray2) ) ).toBeTruthy()
    })

    it('Should return an array no greater than given argument length', () => {
        expect( uniteUnique(testArray, testArray2).length ).toBeGreaterThanOrEqual(length())
    })

    it('Should return unique array when provied 3 arguments', () => {
        expect( uniteUnique([1, 2, 2, 3], [1, 4, 4, 5], [1, 1, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    it('Should only contain unique values', () => {
        var array = uniteUnique(testArray, testArray2)
        var uniqueIntegers = []

        array.map(e => {
            if(uniqueIntegers.indexOf(e)===-1){
                uniqueIntegers.push(e)
            }
        })
        expect(array.length).toBe(uniqueIntegers.length)
    })

    it('Should return correct array given 4 arguments', () => {
        expect( uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) ).toEqual([1, 2, 3, 5, 4, 6, 7, 8])
    })
})