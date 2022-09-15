import deleting from './del.js';
function adding(val){
    const root = document.getElementById('root');
    const subdiv = document.createElement('div');
    subdiv.innerHTML = `
        <h1/>
        <button>삭제</button>
    `
    const outtxt = subdiv.querySelector('h1');
    const outputvalue = document.createTextNode(val);
    outtxt.appendChild(outputvalue);
    const delbtn = subdiv.querySelector('button');
    delbtn.addEventListener("click", ()=>{
        deleting(subdiv)
    });
    root.appendChild(subdiv);
}
export default adding;