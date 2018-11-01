class ArrayList {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(value){
        this.data[this.length] = value
        this.length++
    }
    pop(value){
        var answer = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return answer
    }
    get(index){
        return this.data[index]
    }
    delete(index){
        var value = this.data[index]
        this._collapseTo(index)
        return value
    }
    _collapseTo(index){
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i+1]
        }
    }
}