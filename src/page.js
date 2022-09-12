import adding from './add.js';
import deleting from './del.js';

const root = document.getElementById('root  ');
const element = document.createElement('div');
element.innerHTML = `
    <input type='text'/>
    <button>chk</button>
`
root.appendChild(element);