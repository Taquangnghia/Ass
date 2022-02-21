import TablePost from "./tappos";

const HienThi ={
   async print(){
        return /* html */ `
        
            <div>
                <table class="w-full">
                    <thead>
                    <tr class="text-left">
                        <th>STT</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Thông tin sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>số mét</th>
                    </tr>
                    <tbody id="table-news">
                        ${await TablePost.print()}
                    </tbody>
                    </thead>
                </table>
            </div>
        `
    },
    afterRender() {
        TablePost.afterRender();
      
      },
      
};
export default HienThi;