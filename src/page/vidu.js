import axios from "axios";
// xoa
const viDu = {
  async  print (){
        const response = await fetch('http://localhost:3001/postCates');
        const data = await response.json();
        return /*html*/ `
        <tr>
        <td>stt<td>
        <td>ten<td>
        </tr>
        <tbody id="">
        
        ${data.map((post,index)=> /*html*/ `
        <tr>
        <td>${index+1}</td>
        <td>${post.name}</td>
        <td>
        <a href="/vidu2/${post.id}/edit">edit</a>
        <button  data-id="${post.id}" class="btn bg-red-500 p-3 rounded text-white inline-block">delete</button>
        
        </td>
        </tr>
        `
            
            ).join("")}
       
        </tbody>
        `
    },
    afterRender(){
        const xoa = document.querySelectorAll('.btn');
        xoa.forEach(xoas=>{
            xoas.addEventListener('click',()=>{
                const id = xoas.dataset.id;
                const confirm = window.confirm("ban co muon xoa ko ");
                if(confirm){
                    //cal api 
                    axios.delete('http://localhost:3001/postCates/'+id).then(()=>console.log("da~ xoa tc"))
                }
            })
        })
    }
};
export default viDu;
