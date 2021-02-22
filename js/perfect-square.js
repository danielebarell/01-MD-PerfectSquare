export class PerfectSquare{
    __square
    constructor(target){
        this.__square = target;
        console.log('Perfect Square constructor', this.__square);
    }
    applyHorizontal(){
        this.__square.classList.remove('square-vertical')
        this.__square.classList.add('square-horizontal');
    }
    applyVertical(){
        this.__square.classList.remove('square-horizontal');
        this.__square.classList.add('square-vertical');
    }
}
