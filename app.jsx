
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';


export function App() {
    return (
        <BrowserRouter>
       
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cadastro' exact component={Registration}/>
            </Switch>
      
        </BrowserRouter>
    )
}