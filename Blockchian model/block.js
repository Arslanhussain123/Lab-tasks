class Block{
    constructor(){
        this.index=0;
        this.previousHash="";
        this.hash="";
        this.nonce=0;
        this.transaction=[]
    }
    get Key(){
        return JSON.stringlyfy(this.transactions) + this.index + this.previousHash + this.nonce
}
addTransaction(trnsactio){
    this.transaction.push(trnsactio)
}

}
module.exports=Block