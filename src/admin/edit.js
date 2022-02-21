import { get,update } from "../api/post";
import Navadmin from "./navadmin";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const editAdd ={
    async print(id){
        const {data} = await get(id);
        return /* html */ `
        <div>${Navadmin.print()} 
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Sửa Sản phẩm</h1>
        </div>
      </header>
        </div>
        <div class="bg-purple-300 mt-5 flex p-10 justify-center items-center">
        <form action="" id="form-edit-post" class="w-full max-w-lg">
        <div class="flex ">
           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           Tên sản phẩm
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="ten" id="title-post" value="${data.title}">
           </div>

           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           Số mét
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="met" id="m-post"  value="${data.met}">
           </div>
           </div>

           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Giá tiền</label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien" id="pice-post"  value="${data.pice}">
           </div>
           </div>
           <div class="flex mx-3 mb-6 mt-6">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Loại</label> 
           <select id="loai" class="mt-10">
           <option value="bietthu">Biệt thự</option>
           <option value="chungcu">Chung cư</option>
           </select>
           </div>
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Ảnh</label>
           <input type="file" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien"id="img-post"   value="${data.img}">
           </div>
           </div>
           <div><img width="200" src="${data.img}" id="previewImage" /></div>
           
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Thông tin sản phẩm</label>
           <textarea type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4 h-48" placeholder="hon" id="desc-post"> ${data.desc}</textarea>
         
           </div>
           </div>
            <div class="md:flex md:items-center">
                 <div class="md:w-1/3">
                 <button class="shadow bg-purple-400 text-white py-2 px-4 rounded mx-5">Sửa</button>
                </div>
            </div>
        </form>

        
        </div>
        `
    },
    // sua 
    afterRender(id){
        const formEdit = document.querySelector('#form-edit-post');
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector('#previewImage');
        let imgUploadedLink = "";


        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(imgPost.files[0])
        });
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = imgPost.files[0];
            if(file){
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "dsowzmts");
    
                const {data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/dqyoluczh/image/upload",
                    method: "POST",
                    headers: {
                    "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData,
                });
                imgUploadedLink = data.url
            }
           
            update({
                id, title: document.querySelector('#title-post').value,
                img: imgUploadedLink ? imgUploadedLink : imgPreview.src,
                desc:document.querySelector("#desc-post").value,
                pice:document.querySelector("#pice-post").value,
                met:document.querySelector("#m-post").value,
                loai:document.querySelector("#loai").value
            })
            document.location.href="/admin/hienthi";
            toastr.success("Them thanh cong sp");
            
        });
    }
};
export default editAdd;