class HT{
    constructor(value){
        //Pass in a table size, or default is 25.
        this._storage = {}
        this._tableSize = value ? value : 25
    }

    insert(key, value){
        let index = this._hash(key, this._tableSize)
        if(!this._storage[index]) this._storage[index] = []
        this._storage[index].push([key, value])
    }

    retrieve(key){
        let index = this._hash(key, this._tableSize)
        //Edge Case: Value isn't stored
        if(!this._storage[index]) return 'Does not exist'

        if(this._storage[index].length <= 1){
            return this._storage[index]
        }

        else {
            let internalArray = this._storage[index]
            for(let i = 0; i < internalArray.length; i++){
                let arrayItem = internalArray[i]

                if (arrayItem[0]===key){
                    return arrayItem[1]
                }
            }
        }
    }

    delete(key){
        //TODO: Similar to retrieve. Just delete instead of returning value.
    }

    _hash(string, n, sum=0){
        //Very weak hash. Only for study purposes.
        for(let i = 0; i < string.length; i++){
            sum += string.charCodeAt(i) * 4
        }

        return sum % n
    }
}
