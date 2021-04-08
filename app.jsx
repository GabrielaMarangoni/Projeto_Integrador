
import Search from 'antd/lib/transfer/search';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';
import SearchPage from './src/pages/SearchPage';


export function App() {
    return (
        <BrowserRouter>
       
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cadastro' exact component={Registration}/>
                <Route path='/pesquisa' exact component={SearchPage}/>
            </Switch>
      
        </BrowserRouter>
    )
}