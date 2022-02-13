import { get,update } from "../api/post";
import Navadmin from "./navadmin";
const editAdd ={
    async print(id){
        const {data} = await get(id);
        return /* html */ `
        <div>${Navadmin.print()} </div>
        <div>
        <form action="" id="form-edit-post">
            <input type="text"
                id="title-post"
                class="border border-black"
                placeholder="Title post"
                value="${data.title}"
            > 
            <br />
            <input type="file"
            class="border border-black" 
            placeholder="image "
            id="img-post"
                value="${data.img}"
            > <br />
            <textarea name="" 
                id="desc-post" 
                class="border border-black"
                cols="30" 
                rows="10"
                
                >${data.desc}</textarea>
                <br />
                <input type="text"
                id="pice-post"
                class="border border-black"
                placeholder="Title post"
                value="${data.pice}"
            > 
            <br />
            <input type="text"
            id="m-post"
            class="border border-black"
            placeholder="Title post"
            value="${data.met}"
        > 
            <button class="bg-blue-500 p-4 inline-block text-white ">Thay đỏi</button>
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
                title: document.querySelector('#title-post').value,
                img:  document.querySelector('#img-post').value,
                desc:  document.querySelector('#desc-post').value
            })
           
        })
    }
};
export default editAdd;