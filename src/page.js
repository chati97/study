import adding from './add.js';

const root = document.getElementById('root');
root.innerHTML = `
    <input type='text'/>
    <button>입력</button>
`
const addbtn = root.querySelector('button');
const textvalue = root.querySelector('input');
addbtn.addEventListener("click", ()=>{
    adding(textvalue.value);
    textvalue.value = "";
})
