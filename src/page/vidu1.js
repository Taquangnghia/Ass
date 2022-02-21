import axios from "axios";
// them
const viDu1 ={
    print(){
        return /*html*/ `
        <form id="form-add">
        <input id= "ten"> ten
        <button> them</button>
        </form>
        `
    },
    afterRender(){
        const add = document.querySelector('#form-add');
        

        add.addEventListener('submit',(e)=>{
            e.preventDefault();
            const posFake = {
                "name": document.querySelector('#ten').value

            };
            axios.post('http://localhost:3001/postCates',posFake);
        }).then(window.location.href("/vidu"))
       
    }
};
export default viDu1;