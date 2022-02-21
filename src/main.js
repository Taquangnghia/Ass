import Navigo from "navigo";
import addPost from "./admin/add";
import adminDangKy from "./admin/admindangky";
import editAdd from "./admin/edit";
import Navadmin from "./admin/navadmin";
import HienThi from "./admin/thienthi";
import chiTiet from "./page/chitiet";
import home from "./page/home";
import DangKy from "./taikhoan/dangky";
import Login from "./taikhoan/dangnhap";
import taiKhoan from "./admin/taikhoan";
import gioHang from "./page/giohang";
import chungCu from "./page/chungcu";
import bietThu from "./page/bietthu";
import viDu from "./page/vidu";
import viDu1 from "./page/vidu1";
import viDu2 from "./page/vidu2";
const router = new Navigo("/", { linksSelector: "a" });
const render = async (content,id) =>{
    document.querySelector("#main").innerHTML = await content.print(id);
    if(content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
        if (JSON.parse(localStorage.getItem('user'))) {
            const role = JSON.parse(localStorage.getItem('user')).role;
            if (role == 1) {
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }
    }
})
router.on({
    "/":() =>{
        render(home);
    },
    "/dangnhap" :() => {
        render(Login);
       
    },
    "/dangky" :() =>{
        render(DangKy);
    },
    "/chitiet/:id" :({data})=>{
        render(chiTiet,data.id);
    },
    "/chitiet/giohang":()=>{
        render(gioHang);
    },
    "/chungcu":()=>{
        render(chungCu);
    },
    "/bietthu":()=>{
        render(bietThu);
    },  
    /// admin
    "/admin/add":() =>{
        render(addPost);
    },
    "/admin/hienthi":()=>{
        render(HienThi);
    },
    "/edit/:id/edit":({data})=>{
        render(editAdd,data.id);

    },
    "/navadmin":()=>{
        render(Navadmin);
    },
    "/admin/dangky":()=>{
        render(adminDangKy);
    },
    "/admin/taikhoan":()=>{
        render(taiKhoan);
    },
    "/vidu":()=>{
        render(viDu);
    },
    "/vidu1":()=>{
        render(viDu1);
    },
    "/vidu2/:id/edit":({data})=>{
        render(viDu2,data.id);
    }
    
});
router.resolve();