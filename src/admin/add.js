import axios from "axios";
import { add } from "../api/post";
import Navadmin from "./navadmin";
const addPost ={
    async print (){
        return /* html */ `
        <div>${Navadmin.print()} </div>
        <div>
        <form action="" id="form-add-post">
            <input type="text"
                id="title-post"
                class="border border-black"
                placeholder="Title post"
            > 
            <br />
            <input type="file"
                id="img-post"
                class="border border-black"
                placeholder="Imager post"
            > <br />
            <textarea name="" 
                id="desc-post" 
                class="border border-black"
                cols="30" 
                rows="10"></textarea>
                <br />
                <input type="text"
                id="pice-post"
                class="border border-black"
                placeholder="Title post"
            > 
            <br />
            <input type="text"
            id="m-post"
            class="border border-black"
            placeholder="Title post"
        > 
            <button class="bg-blue-500 p-4 inline-block text-white ">Thêm bài viết</button>
        </form>
        </div>
        `;
    },
    //them 
    afterRender(){
        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");
        const CLOUDINARY_API  = "https://api.cloudinary.com/v1_1/dqyoluczh/image/upload";
        const CLOUDINARY_PRESET = "dsowzmts";
        formAdd.addEventListener('submit', async (e)=>{
            e.preventDefault();
            //lay gt input file 
            const file = imgPost.files[0];
            // append vao objec form data
            const formData =  new FormData();
            formData.append('file',file);
            formData.append('upload_preset',CLOUDINARY_PRESET)
            //call api 
            const response = await axios.post(  CLOUDINARY_API,formData,{
                headers:{
                    "Content-Type":"application/from-data"
                  
                }
            })
            //call api
            add({
                title:document.querySelector('#title-post').value,
                img:response.data.url,
                desc:document.querySelector("#desc-post").value,
                pice:document.querySelector("#pice-post").value,
                met:document.querySelector("#m-post").value,
            });
            
        })
    }
};


export default addPost;