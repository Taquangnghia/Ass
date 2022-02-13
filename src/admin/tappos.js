// import { forEach } from "json-server-auth";
import { getAll, remove } from "../api/post"
import { reRender } from "../utilis/render";
import Navadmin from "./navadmin";


const TablePost ={
    async print (){
        const{data} = await getAll();
        return /* html */ `
        <div>${Navadmin.print()} </div>
        ${data.map((post,index)=> /* html */ `
        <tr>
                <td>${index + 1}</td>
                <td><img src="${post.img}" width="50" /></td>
                <td>${post.title}</td>
                <td>${post.desc}</td>
                <td>${post.pice}</td>
                <td>${post.met}</td>
                <td>
                <a href="/edit/${post.id}/edit">Edit</a>
                    <button data-id="${post.id}" class="btn bg-red-500 p-3 rounded text-white inline-block" >Delete</button>
                </td>
            </tr>
        `
            ).join("")} 
        `;
    },
    // xoa
    afterRender() {
        const buttons = document.querySelectorAll('.btn');   
        buttons.forEach(button => {
          const id = button.dataset.id; 
          button.addEventListener('click', () => {
            const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
            if (confirm) {
              remove(id).then(() => {
                window.location.href = "/admin/hienthi";
              });
            }
          })
        });
      },
        
};
export default TablePost;