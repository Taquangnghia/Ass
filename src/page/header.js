const Header ={
    print (){
       return /* html */ `
       <nav class="bg-white shadow-lg" id="nva">
       <div class="max-w-6xl mx-auto px-4">
         <div class="flex justify-between">
           <div class="flex space-x-7">
             <a class="flex items-center py-4 px-2" href="/">
               <img class="h-8 w-8 mr-2" src="image/house.png" alt="">
               <span class="font-semibold text-gray-500 text-lg">Can Ho tien ich</span>
             </a>
           </div>
           <div class="hidden items-center md:flex space-x-1">
             <a class="py-4 px-2  border-purple-500 border-b-4 text-purple-500 font-semibold" href="/">Home</a>
             <a href="" class="py-4 px-2  border-purple-500 font-semibold hover:text-purple-500 transition duration-300">Sản Phẩm mới</a>
             <a href="" class="py-4 px-2  border-purple-500 font-semibold hover:text-purple-500 transition duration-300">Sản phẩm bán chạy </a>
             <a href="" class="py-4 px-2  border-purple-500 font-semibold hover:text-purple-500 transition duration-300">Tư vấn</a>
           </div>
         </div>
       </div>
     </nav>
  <!-- khai dang nhap -->
 <main class="mt-10 px-4">
   <div class="sm:text-center lg:text-center">
     <h1 class="font-extrabold text-4xl sm:text-5xl md:text-6xl">
       <span class="block">Khính chào</span>
       <span class="block text-purple-500">Quý Khách hàng</span>
       
     </h1>
     <p class="mt-3 text-gray-500 md:text-xl md:mt-5">Công ty căn hộ cao cấp chuyên tư vấn buôn bán những lô đát tuyệt vời đến cho quý khách hàng
       để nhận được nhiều ưu đãi từ công ty  hoặc muốn tư vấn quý khách có thể đăng ký tại đây
     </p>
     <div class="mt-5 sm:mt-8 sm:flex sm:justify-center"> 
     <div class="m-2">
       <a class="flex justify-center rounded-md bg-purple-500 text-white px-8 py-3" href="/dangnhap">Đăng nhập</a>
     </div>
     <div class="m-2">
       <a class="flex justify-center rounded-md bg-purple-100 text-purple-700 px-8 py-3" href="/dangky">Đăng ký</a>
     </div>
   </div>
   </div>
 </main>
 
 <div class="mt-5 flex justify-center">
   <h2 class="text-3xl text-gray-500 mb-2">Mặt hàng </h2>
 </div>
       `
        
    }
};
export default Header;