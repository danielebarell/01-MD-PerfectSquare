import {PerfectSquare} from "./js/perfect-square.js";
const perfectSquare = new PerfectSquare(document.querySelector('#shape-container'));
function applySquare(){
    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    console.log(w,h);
    if(h >= w){
        perfectSquare.applyVertical(w,h);
    }else{
        perfectSquare.applyHorizontal(w,h);
    }
}
window.addEventListener('resize',()=>{
    applySquare()
})
