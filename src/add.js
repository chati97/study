/*
import deleting from './del.js';
function adding(val){
    const root = document.getElementById('root');
    const subdiv = document.createElement('div');
    subdiv.innerHTML = `
        <li/>
        <button>삭제</button>
    `
    const outtxt = subdiv.querySelector('li');
    const outvalue = document.createTextNode(val);
    outtxt.appendChild(outvalue);
    //outtxt.innerText = val;
    const delbtn = subdiv.querySelector('button');
    delbtn.addEventListener("click", ()=>{
        deleting(subdiv)
    });
    root.appendChild(subdiv);
}
export default adding;
*/