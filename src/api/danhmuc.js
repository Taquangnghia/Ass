import instance from "./instance";
export const getAllpostCates = () => {
    const url = "/postCates";
    return instance.get(url)
}
export const getpostCates = (id) => {
    const url = `/postCates/${id}`;
    return instance.get(url);
}
export const addpostCates = (postCates) => {
    const url = `/postCates`;
    return instance.post(url, postCates)
}
export const removepostCates = (id) => { 
    const url = `/postCates/${id}`;
    return instance.delete(url);
}
export const updatepostCates = (postCates) => {
    const url = `/postCates/${postCates.id}`;
    return instance.put(url, postCates);
}
export const getloaipostCates = (value)=>{
    const url = `/postCates?loai=${value}`;
    return instance.get(url);
}
export const getCate = (id) => {
    const url = `/postCates/${id}?_embed=posts`;
    return instance.get(url);
};