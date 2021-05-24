import axios from 'axios';

const url = 'http://localhost:5000/lists';

export const fetchLists = () => axios.get(url);
export const createNew = (newList) => axios.post(url,newList);
export const deleteList = (id) => axios.delete(`${url}/${id}`);
export const fetchSingleList = (id) => axios.get(`${url}/${id}`);
export const updateItems = (id,item) => axios.patch(`${url}/${id}`,item);