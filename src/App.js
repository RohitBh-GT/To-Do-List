import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/home.js';
import SingleList from './components/SingleList/singleList.js';
import { Component } from 'react';

function App(){

    return (
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route exact path="/lists/:id" render={(props) => <SingleList {...props} /> } />
          </Switch>
        </BrowserRouter>
    );
}

export default App;