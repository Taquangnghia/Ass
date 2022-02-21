import axios from "axios";
import { add } from "../api/post";
import Navadmin from "./navadmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const addPost ={
    async print (){
        return /* html */ `
        <div>${Navadmin.print()} 
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Thêm Sản phảm</h1>
        </div>
      </header></div>
        <div class="bg-purple-300 mt-5 flex p-10 justify-center items-center">
        <form action="" id="form-add-post" class="w-full max-w-lg">
        <div class="flex ">
           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
          Tên Sản phẩm
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="ten" id="title-post" required>
           </div>

           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           Số mét
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="met" id="m-post" required>
           </div>
           </div>

           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Giá tiền</label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien" id="pice-post" required>
           </div>
           </div>
           <div class="flex mx-3 mb-6 mt-6">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Loai</label> 
           <select id="loai" class="mt-10">
           <option value="bietthu">Biệt thự</option>
           <option value="chungcu">Chung cư</option>
           </select>
           </div>
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Ảnh</label>
           <input type="file" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien"id="img-post" required>
           </div>
           </div>
           <div>
                        <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="imgPreview" />
                      </div>
           
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Thông tin về sản phảm</label>
           <textarea type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4 h-48" placeholder="hon" id="desc-post" ></textarea>
         
           </div>
           </div>
            <div class="md:flex md:items-center">
                 <div class="md:w-1/3">
                 <button class="shadow bg-purple-400 text-white py-2 px-4 rounded mx-5">Đăng</button>
                </div>
            </div>
        </form>
        </div>
        `;
    },
    //them 
 


  

    afterRender(){
        const formAdd = document.querySelector('#form-add-post');
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector("#imgPreview");
        let imgLink = "";

        const CLOUDINARY_API  = "https://api.cloudinary.com/v1_1/dqyoluczh/image/upload";
        const CLOUDINARY_PRESET = "dsowzmts";


        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0])
        });


        formAdd.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Lấy giá trị input file
            const file = imgPost.files[0];
            if(file){
                // append vào object formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET)

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                });
                imgLink = data.url;
            }

            
            // call api thêm bài viết
            add({
                title:document.querySelector('#title-post').value,
                "img": imgLink || "",
                desc:document.querySelector("#desc-post").value,
                pice:document.querySelector("#pice-post").value,
                met:document.querySelector("#m-post").value,
                loai:document.querySelector("#loai").value
            });
            toastr.success("Them thanh cong sp");
            document.location.href="/admin/hienthi";
          
        })
    }
};
   

   
  


export default addPost;