import axios from "axios";
// sua 
const viDu2 ={
  async  print(){
      const api = await fetch('http://localhost:3001/postCates');
      
     
        return /*html*/ `

        <form id="form-add">
        <input id= "name" value="${api.id}" type="text"> 
        <button> them</button>
        </form>

        `
    },
    afterRender(id){
        const sua = document.querySelector('#form-add');
        sua.addEventListener('submit',(e)=>{
            e.preventDefault();
           const confack = {
                id: id,
                "name":document.querySelector("#name").value          
              }
              axios.put('http://localhost:3001/postCates/',confack);
        })
       
    }
};
export default viDu2;