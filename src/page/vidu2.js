import axios from "axios";
// sua 
const viDu2 ={
  async  print(id){
      const api = await fetch('http://localhost:3001/comments/'+id);
      const data  = await api.json('');
        return /*html*/ `
        <form id="form-add">
        <input id= "name" value="${data.name}" type="text">
        <input type="file" id="img"> 
        <button> them</button>
        </form>
        `
    },
    afterRender(id){
        const sua = document.querySelector('#form-add');
        const anh = document.querySelector("#img");
        const api = "https://api.cloudinary.com/v1_1/dqyoluczh/image/upload";
        const nameapi ="g0jnecu3 ";
        sua.addEventListener('submit', async(e)=>{
            e.preventDefault();
            const file = anh.files[0];
            const formData = new FormData()
            formData.append('file',file)
            formData.append('upload_preset',nameapi)
            const response = await axios.post(api,formData,{
                headers:{
                    "Content-Type":"application/form-data"              
                }
            })
           const confack = {
                id: id,
                "name":document.querySelector("#name").value,
                "img": response.data.url    
              }
              axios.put('http://localhost:3001/comments/'+id,confack);
        })
       
    }
};
export default viDu2;