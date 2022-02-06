const footer ={
    print (){
        return /* html*/ `
        <footer class="pt-10 px-4 bg-slate-300 ">
  <div class="container flex flex-col justify-between mx-auto space-y-8">
    <div>
      <a href="" class="flex justify-center">
        <div class="flex w-12 h-12">
          <img src="image/house.png" class="h-8 w-8 mr-2" alt="">
        </div>
        <span class="font-semibold  text-2xl">
          Căn Hộ Tiện Ich
        </span>
      </a>
    </div>
  <div class="grid grid-cols-2 sm:grid-cols-4">
    <div class="space-y-3">
      <h3 class="">Thông tin hỗ trợ</h3>
      <ul class="text-sky-500">
        <li><a href="">Mr.a</a></li>
        <li><a href=""> Mr.b</a></li>
        <li><a href="">Mr.c</a></li>
      </ul>
    </div>
      <div class="space-y-3">
        <h3 class="">Thông tin liên lạc</h3>
        <ul class="text-sky-500">
          <li><a href="">0989 08 9832</a></li>
          <li><a href="">0989 08 9832</a></li>
          <li><a href="">0989 08 9832</a></li>
        </ul>
      </div>

      <div class="space-y-3">
        <h3 class="">Hệ thống Gần nhất</h3>
        <ul class="text-sky-500">
          <li><a href="">Trịnh Văn Bô, Quận Nam Từ Liêm,Hà Nội</a></li>
          <li><a href=""> Trịnh Văn Bô, Quận Nam Từ Liêm,Hà Nội</a></li>
          
        </ul> 
      </div>

      <div class="space-y-3">
        <h3 class="">Thông tin liên hệ và tư vấn  </h3>
       <div class="flex justify-start mt-3 ml-3">
         <a href="" class="flex items-center p-1">
           <img src="image/facebook.png" alt="" class="fill-current">
         </a> 
         <a href="" class="flex items-center p-1">
          <img src="image/instagram.png" alt="" class="fill-current">
        </a> 
        <a href="" class="flex items-center p-1">
          <img src="image/twitter.png" alt="" class="fill-current">
        </a> 
       </div> 
      </div>

  </div>
  </div>
</footer>
        `
    }
};
export default footer;