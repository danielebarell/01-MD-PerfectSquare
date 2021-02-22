import {PerfectSquare} from "./js/perfect-square.js";
const perfectSquare = new PerfectSquare(document.querySelector('#shape-container'));
function applySquare(){
    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    console.log(w,h);
    if(h >= w){
        perfectSquare.applyVertical();
    }else{
        perfectSquare.applyHorizontal();
    }
}
window.addEventListener('resize',()=>{
    applySquare()
})
