import axios from "axios";
import { data } from "jquery";
// them
const viDu1 ={
    print(){
        return /*html*/ `
        <form id = "form-add" action="">
        <label>ten</label>
         <input type="text" id="name"> 
         <label>anh</label>
         <input type="file" id="img"> 
        <button>gui</button>
        </form>
        `
    },



afterRender(){
    const form = document.querySelector('#form-add');
    const img = document.querySelector('#img');
    const api ="https://api.cloudinary.com/v1_1/dqyoluczh/image/upload";
    const nameapi="g0jnecu3";
    form.addEventListener('submit',async(e)=>{
        e.preventDefault();
        const file = img.files[0];
        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset',nameapi);
        const repon = await axios.post(api,formData,{
            headers:{
                "Content-Type":"application/form-data"
            }
        })
        const fake ={
            "img":repon.data.url,
            "name":document.querySelector("#name").value
        }
        axios.post('http://localhost:3001/comments',fake);
    })
}

























    
};
export default viDu1;