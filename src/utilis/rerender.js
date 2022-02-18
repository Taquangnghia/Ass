export const reRender = async (component, dom) => {
    if(component){
        document.querySelector(dom).innerHTML = await component.print();
    }
    if(component.afterRender) await component.afterRender();
}