import { $ } from "../utilis";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../utilis/cart";
import { reRender } from "../utilis/rerender";
import footer from "./footer";
import Header from "./header";

const gioHang = {
   async print(){
       let tong = 0;
        const cart = JSON.parse(localStorage.getItem('cart'));
        return  /* html*/`
       ${await Header.print()}
            <table class="w-full text-left  mt-10 justify-center items-cente mb-5">
                <thead class="">
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Price</th>
                        <th>soluong </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="">
                    ${cart.map(item => /*html*/ `
                        <tr>
                            <td>${item.title}</td>
                            <td class="">${item.pice} VNĐ
                                
                            </td>
                            <td>
                                <button  data-id="${item.id}" class="btn increase border border-black p-2">+</button>
                                ${item.quantity}
                                <button  data-id="${item.id}" class="btn decrease border border-black p-2">-</button>
                            </td>
                            <td>
                                <button data-id="${item.id}" class="btn remove border bg-red-500 px-4 py-3 text-white">Remove</button>
                                <p hidden>${tong += item.pice * item.quantity}</p>
                            </td>
                           
                        </tr>
                    `).join("")}
                </tbody>
                <tfoot  class="pt-10">
                    <tr class="pt-10"><td colspan="2" class="text-right pt-10">Tổng là:${tong}</td></tr>    
                   
                </tfoot>
               
            </table>
            <button class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Thanh Toán</button>
            ${footer.print()}
        `
    },
    afterRender(){
        const btns = $('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', function(){
                const id = btn.dataset.id;
                if(btn.classList.contains('increase')){
                    increaseItemInCart(id, function(){
                        reRender(gioHang, "#main");
                    });
                } else if (btn.classList.contains('decrease')){
                    decreaseItemInCart(id, function(){
                        reRender(gioHang, "#main");
                    });
                } else {
                    removeItemInCart(id, function(){
                        reRender(gioHang, "#main");
                    });
                }
            })
        });
        Header.afterRender();   
    }
}
export default gioHang;