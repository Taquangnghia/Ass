import { get,update } from "../api/post";
import Navadmin from "./navadmin";
const editAdd ={
    async print(id){
        const {data} = await get(id);
        return /* html */ `
        <div>${Navadmin.print()} </div>
        <div class="bg-purple-300 mt-5 flex p-10 justify-center items-center">
        <form action="" id="form-edit-post" class="w-full max-w-lg">
        <div class="flex ">
           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           Ten San pham
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="ten" id="title-post" value="${data.title}">
           </div>

           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
           So met
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="met" id="m-post"  value="${data.met}">
           </div>
           </div>

           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Giatien</label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien" id="pice-post"  value="${data.pice}">
           </div>
           </div>
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Anh</label>
           <input type="file" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="tien"id="img-post"   value="${data.img}">
           </div>
           </div>
           
           <div class="flex mx-3 mb-6 mt-6">
           <div class="w-full px-3">
           <label class="block text-xs text-gray-700 font-bold mb-2 tracking-wider">Thong tin san pham</label>
           <textarea type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4 h-48" placeholder="hon" id="desc-post"> ${data.desc}</textarea>
         
           </div>
           </div>
            <div class="md:flex md:items-center">
                 <div class="md:w-1/3">
                 <button class="shadow bg-purple-400 text-white py-2 px-4 rounded mx-5">Sett</button>
                </div>
            </div>
        </form>

        
        </div>
        `
    },
    // sua 
    afterRender(id){
        const formEdit = document.querySelector('#form-edit-post');
        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();
            update({
                id: id,
                title:document.querySelector('#title-post').value,
                img:document.querySelector('#img-post').value,
                desc:document.querySelector('#desc-post').value,
                pice:document.querySelector("#pice-post").value,
                met:document.querySelector("#m-post").value,
            });
            window.location.href="/admin/hienthi";
           
        })
    }
};
export default editAdd;