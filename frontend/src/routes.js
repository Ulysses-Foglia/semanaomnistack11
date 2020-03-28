import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes() {
    return(
        <BrowserRouter>
    <Switch>
        {/* exact para o caminho válido da rota ser exatamente apenas o "/" */}
        <Route path="/" exact component={Logon}/> 
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={NewIncident}/>
    </Switch>
    </BrowserRouter>
    ); 
}