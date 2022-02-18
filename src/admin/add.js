import axios from "axios";
import { add } from "../api/post";
import Navadmin from "./navadmin";
const addPost ={
    async print (){
        return /* html */ `
        <div>${Navadmin.print()} </div>
        <div class="bg-purple-300 mt-5 flex p-10 justify-center items-center">
        <form action="" id="form-add-post" class="w-full max-w-lg">
        <div class="flex ">
           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           Ten San pham
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="ten" id="title-post">
           </div>

           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           So met
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="met" id="m-post">
           </div>
           </div>

           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Giatien</label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien" id="pice-post">
           </div>
           </div>
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Anh</label>
           <input type="file" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien"id="img-post">
           </div>
           </div>
           
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Thong tin san pham</label>
           <textarea type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4 h-48" placeholder="hon" id="desc-post"></textarea>
         
           </div>
           </div>
            <div class="md:flex md:items-center">
                 <div class="md:w-1/3">
                 <button class="shadow bg-purple-400 text-white py-2 px-4 rounded mx-5">Sett</button>
                </div>
            </div>
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
            window.location.href="/admin/hienthi";
            
        })
    }
};


export default addPost;