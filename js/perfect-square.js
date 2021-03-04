export class PerfectSquare{
    //the HTML element reference
    __square
    //margin around the square
    __margin = 25;
    constructor(target, margin = 20){
        this.__square = target;
        this.__margin = margin;
        console.log('Perfect Square constructor', this.__square, this.__margin);
    }
    applyHorizontal(outerWidth,outerHeight){
        this.__square.classList.remove('square-vertical')
        this.__square.classList.add('square-horizontal');
        //Horizontally the square size depends on height
        const size = outerHeight - (this.__margin * 2);
        const width = size;
        const height = size;
        const top = this.__margin;
        const left = (outerWidth - size)/2;
        //set the style attribute
        this.__square.style = `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px;`;
    }
    applyVertical(outerWidth,outerHeight){
        this.__square.classList.remove('square-horizontal');
        this.__square.classList.add('square-vertical');
        //Vertically the square size depends on width
        const size = outerWidth - (this.__margin * 2);
        const width = size;
        const height = size;
        const left = this.__margin;
        const top = (outerHeight - size)/2;
        //set the style attribute
        this.__square.style = `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px;`;
    }
}
