
import { getAll } from "../api/post";
const Nav = {
   async  print(){
        const { data } = await getAll();
        console.log(data);
        return /* html */ `
        <div class="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        ${data.map((post)=> /* html */ `
        <div class="rounded  shadow-lg">
        <a href="/chitiet/${post.id}">
          <img class="w-full" src="${post.img}" alt="">
          </a>
          <div class="px-6 py-4">
            <div class="'font-bold text-xl mb-2">${post.title}</div>
            <p class="text-gray-700">${post.desc}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="text-purle-300 font-bold text-sm px-3 py-1 inline-block">${post.pice}</span>
          </div>
          <div class="px-6 pt-4 pb-2">  
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold">${post.met}</span>
           
          </div>
          <div class="px-6 pt-4 pb-10">
            <button class="inline-block bg-purple-400 mr-2 mb-3 rounded-full px-3 py-1 text-sm font-bold text-white font-semibold">Liên hệ</button>
          </div>
        </div>
        `
          ).join("")}
       
        
    
        
     
        `

    }
};
export default Nav