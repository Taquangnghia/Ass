import { addpostCates } from "../api/danhmuc";
import Navadmin from "./navadmin";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const addDanhmuc={
  async  print (){
        return /*html*/ `
        <div>${Navadmin.print()} 
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Thêm Danh muc</h1>
        </div>
        <form action="" id="form-add-post" class="w-full max-w-lg">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label for="" class="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider"> 
         Ten danh muc
           </label>
           <input type="text" class="block w-full border-purple-500 text-gray-700 block py-3 px-4" placeholder="ten" id="title-post" required>
           </div>
           <button class="shadow bg-purple-400 text-white py-2 px-4 rounded mx-5">Đăng</button>
           </form>
        `
    },
    afterRender(){
        const form = document.querySelector ('#form-add-post');
        form.addEventListener('submit',  (e)=>{
            e.preventDefault();
            addpostCates({
                "name":document.querySelector('#title-post').value
            })
            toastr.success("Them thanh cong sp");
            document.location.href="/admin/danhmuc";
        });
   
    }
};
export default addDanhmuc;