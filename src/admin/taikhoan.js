
import { getAll,remove } from "../api/usere";
import Navadmin from "./navadmin";
const taiKhoan ={
 async   print (){
    const{data} = await getAll();
        return /* html */ `
        <div>${Navadmin.print()} 
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Tài khoản Đăng ký</h1>
        </div>
      </header>
        </div>
        <div>
        <table class="w-full">
            <thead>
            <tr class="text-left">
                <th class="">STT</th>
                <th>Email</th>
                <th>Ten</th>
                <th>Trang thai</th>
              
            </tr>
            <tbody id="table-news">
            ${data.map((user,index)=> /* html */
 `
            <tr>
                <td>${index + 1}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.role}</td>
                <td>
                <button data-id="${user.id}"  class="btn bg-red-500 p-3 rounded text-white inline-block" >Delete</button>
                </td>
            </tr>
 `                
                ).join("")}
     
            </tbody>
            </thead>
        </table>
    </div>
        `
    },
    afterRender(){
        const bnt = document.querySelectorAll('.btn');
        bnt.forEach(butom =>{
            const id = butom .dataset.id;
            butom.addEventListener('click',()=>{
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        
                if (confirm) {
                  remove(id).then(() => {
                    window.location.href = "/admin/taikhoan";
                  });
                }
            });
        });
        
    }
    
};
export default taiKhoan;