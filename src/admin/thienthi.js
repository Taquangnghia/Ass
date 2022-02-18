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
                        <th>Noi Dung</th>
                        <th>gia tien</th>
                        <th>so met</th>
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