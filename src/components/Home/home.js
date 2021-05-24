import React,{ useEffect } from 'react';
import Header from '../Header/Header.js';
import ListGrid from '../ListGrid/ListGrid.js';
import { getLists } from '../../actions/lists.js';
import Create from '../CreateForm/CreateForm.js';
import { useDispatch } from 'react-redux';

function Home(){

   const dispatch = useDispatch();

   useEffect( () => {
      dispatch(getLists());
   },[dispatch]);

    return (
        <>
          <Header />
          <Create />
          <ListGrid />
        </>
    )
}

export default Home;