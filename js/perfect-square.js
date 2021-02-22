export class PerfectSquare{
    __square
    constructor(target){
        this.__square = target;
        console.log('Perfect Square constructor', this.__square);
    }
    applyHorizontal(){
        console.log('applyHorizontal');
    }
    applyVertical(){
        console.log('applyVertical');
    }
}
