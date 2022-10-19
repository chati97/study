/*
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
*/

/*
const $root = document.querySelector('#root');

let state = {
    items: ['item1', 'item2']
}

const render = ()=> {
    const {items} = state;
    $root.innerHTML = `
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button id = "append">추가</button>
    `;
    document.querySelector('#append').addEventListener('click', ()=>{
        setState({items: [...items, `item${items.length + 1}`]})
    })
}

const setState = (newState) =>{
    state = {...state, ...newState};
    render();
}
render();
*/


class Component{
    $target;
    $state;
    constructor($target){
        this.$target = $target;
        this.setup();
        this.render();
    }
    setup(){};
    template(){return '';}
    render(){
        this.$target.innerHTML = this.template();
        this.setEvent();
    }
    setEvent(){}
    setState(newState){
        this.$state={...this.$state, ...newState};
        this.render();
    }
}

class App extends Component{
    setup(){
        this.$state = {items: ['item1', 'item2']};
    }
    template(){
        const {items} = this.$state;
        return `
            <ul>
                ${items.map(item=>`<li>${item}</li>`).join('')}
            </ul>
            <button>추가</button>
        `
    }
    setEvent(){
        this.$target.querySelector('button').addEventlistener('click', ()=>{
            const{items} = this.$state;
            this.setState({items:[...items, `item${items.length+1}`]});
        });
    }
}
new App(document.querySelector('#root'));