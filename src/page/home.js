import footer from "./footer";
import Header from "./header";
import Nav from "./nav";
const home = {
   async print() {
    return /*html*/ `
    <header>
    ${await Header.print()}
    </header>  
 <div>
  ${await  Nav.print()}
  </div>
  <div>
  ${footer.print()}
  </div>
      `
  },
  afterRender(){
    Header.afterRender();
  }
};
export default home;