import { getpostCates,updatepostCates } from "../api/danhmuc";
import Navadmin from "./navadmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const editDanhmuc={
   async print(id){
        const {data} =  await getpostCates(id);
    
        return /*html*/ `
        <div>${Navadmin.print()} 
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Thêm Danh muc</h1>
        </div>
        <form action="" id="form-add-post" class="w-full max-w-lg">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
        edit danh muc
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="ten" id="title-post" required value="${data.name}">
           </div>
           <button class="shadow bg-purple-400 text-white py-2 px-4 rounded mx-5">Đăng</button>
           </form>
        `
    },
    afterRender(id){
        const editform = document.querySelector('#form-add-post');
        editform.addEventListener('submit',(e)=>{
            e.preventDefault();
            updatepostCates({
                id:id,
                "name":document.querySelector('#title-post').value
            })
            document.location.href="/admin/danhmuc";
            toastr.success("Them thanh cong sp");

        })
    }

};
export default editDanhmuc;