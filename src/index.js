const root = document.getElementById('root');
const input = document.createElement('input');

const btn = document.createElement('button');
const btntxt = document.createTextNode('add');
btn.appendChild(btntxt);
btn.addEventListener("click", ()=>{
    const res = document.createElement('div');
    res.setAttribute('id', 'list');
    const txt = document.createTextNode(input.value);
    res.appendChild(txt);
    const delBtn = document.createElement('button');
    const delBtntxt = document.createTextNode('del');
    delBtn.appendChild(delBtntxt);
    delBtn.addEventListener("click", ()=>{
        res.remove();
    })
    res.appendChild(delBtn);
    root.appendChild(res);
    input.value = "";
})



root.appendChild(input);
root.appendChild(btn);