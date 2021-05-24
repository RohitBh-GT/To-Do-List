import { ContactsOutlined } from '@material-ui/icons';
import * as api from '../api/list.js';

export const getLists = () => async(dispatch) => {
    try {
        const { data } = await api.fetchLists();
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createNewList = (newList) => async(dispatch) => {
    try {
        const { data } = await api.createNew(newList);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSinglelist = (id) => async(dispatch) => {
    try {
        await api.deleteList(id);
        dispatch({type:'DELETE',payload:id});
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchList = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchSingleList(id);
        dispatch({type:'FETCH_ONE',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateList = (id,item) => async(dispatch) => {
    try {
        const { data } = await api.updateItems(id,item);
        dispatch({type:'NEW_ITEM',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}