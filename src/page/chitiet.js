import footer from "./footer";
import Header from "./header";

const chiTiet = {
    print() {
        return /* html */ `
        <div>${Header.print()}</div>
    <div class="mt-20 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
            <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img src="image/home1.jpg" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover">
        </div>
            <div class="mt-6 lg:mt-0 lg:row-span-3">
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Basic Tee 6-Pack
        </h1>
        <p class="mt-3">Vinhomes Grand Park được định vị là đại đô thị chuẩn mực mới đáng sống nhất tại Việt Nam sau khi đi vào sử dụng. Dự án Vinhomes Grand Park do Vinhomes làm chủ đầu tư (tọa lạc tại phường Long Bình và Long Thạnh Mỹ, TP Thủ Đức) sẽ được phát triển với 3 dòng sản phẩm của Vinhomes:</p>
        <h2 class="text-1xl font-extrabold tracking-tight text-gray-900 sm:text-1xl mt-5">121.21 - 76.64 tr/m²</h2>
        <p class="text-3xl text-gray-900 mt-20">120.0000d</p>
    
        <!-- Reviews -->
        <div class="mt-6">
          <button type="submit" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>

        </div>
            </div>
    </div>
   <div>${footer.print()}</div>
        `
    }
};
export default chiTiet;