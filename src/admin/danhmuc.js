import { getAllpostCates,removepostCates } from "../api/danhmuc";
import Navadmin from "./navadmin";
const danhMuc={
   async print(){
        const{data} = await getAllpostCates();
        return /*html*/ `
        <div>${Navadmin.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">danh muc san pham </h1>
        </div>
      </header>
        <div>
        <table class="w-full">
            <thead>
            <tr class="text-left">
                <th>STT</th>
                <th>loai san pham</th>   
            </tr>
            <tbody id="table-news">
            ${data.map((post,index)=> /* html */ `
            <tr>
                    <td>${index + 1}</td>
                    <td>${post.name}</td>
        
                    <td>
                    <a href="/admin/edit/${post.id}/editdanhmuc">Edit</a>
                        <button data-id="${post.id}" class="btn bg-red-500 p-3 rounded text-white inline-block" >Delete</button>
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
    afterRender() {
        const buttons = document.querySelectorAll('.btn');   
        buttons.forEach(button => {
          const id = button.dataset.id; 
          button.addEventListener('click', () => {
            const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
            if (confirm) {
                removepostCates(id).then(() => {
                    window.location.href = "/admin/danhmuc";
              });
            }
          })
        });
      },
};
export default danhMuc;