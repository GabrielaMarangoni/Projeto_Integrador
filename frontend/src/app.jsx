import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import SearchPage from './pages/SearchPage';


export default function App() {
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