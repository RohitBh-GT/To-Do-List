import React,{useEffect} from 'react';
import ListNameHeader from '../ListNameHeader/listNameHeader.js';
import { useDispatch } from 'react-redux';
import { fetchList } from '../../actions/lists.js';
import WorkList from '../WorkList/worklist.js';

function TodoList(props){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchList());
     },[dispatch]);

    return (
        <>
         <div>
          <ListNameHeader listId={props.listId} />
          <WorkList listId={props.listId} />
        </div>
        </>
    )
}

export default TodoList;