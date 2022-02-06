import footer from "./footer";
import Header from "./header";
import Nav from "./nav";
const home = {
  print() {
    return /*html*/ `
    <div>
    ${Header.print()}
    </div>
 <div>
 ${Nav.print()}
  </div>
  <div>
  ${footer.print()}
  </div>
      `
  },
};
export default home;