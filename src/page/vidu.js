import axios from "axios";
// xoa
const viDu = {
  async  print (){
       const repons = await fetch('http://localhost:3001/comments');
       const data = await repons.json('');
       
        return /*html*/ `
        <table>
        <tr>
        <th>stt</th>
        <th>anh</th>
        <th>ten</th>
        </tr>
        <tbody>
        ${data.map((post,index)=> /* html */ `
        <tr>
        <td>${index+1}</td>
        <td><img src="${post.img}"></td>
        <td>${post.name}</td>
        <td><a href="/vidu2/${post.id}/edit" id="">edit</a>
        <button class="btn bg-red-300" data-id="${post.id}">xoa</button>
        </td>
        </tr>
        `
             ).join("")}
        
        </tbody>
        </table>
        
        `
            
     
    },
 afterRender(){
     const xoa = document.querySelectorAll('.btn');
     xoa.forEach(xoas=>{
         xoas.addEventListener('click',()=>{
             const id = xoas.dataset.id;
             const confirm = window.confirm("ban muon xoa");
             if(confirm){
                 axios.delete('http://localhost:3001/comments/'+id);
             }
         })

     })
 }
    
    
};
export default viDu;
