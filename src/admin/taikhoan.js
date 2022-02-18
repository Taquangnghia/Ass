
import { getAll,remove } from "../api/usere";
import Navadmin from "./navadmin";
const taiKhoan ={
 async   print (){
    const{data} = await getAll();
        return /* html */ `
        <div>${Navadmin.print()} </div>
        <div>
        <table class="w-full">
            <thead>
            <tr class="text-left">
                <th>STT</th>
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