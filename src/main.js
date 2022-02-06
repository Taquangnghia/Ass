import Navigo from "navigo";
import chiTiet from "./page/chitiet";
import home from "./page/home";
import DangKy from "./taikhoan/dangky";
import Login from "./taikhoan/dangnhap";
const router = new Navigo("/", { linksSelector: "a" });
const render = async(Content) =>{
    document.getElementById("main").innerHTML = await Content.print();
};
router.on({
    "/":() =>{
        render(home);
    },
    "/dangnhap" :() => {
        render(Login)
       
    },
    "/dangky" :() =>{
        render(DangKy)
    },
    "/chitiet" :()=>{
        render(chiTiet)
    },
});
router.resolve();