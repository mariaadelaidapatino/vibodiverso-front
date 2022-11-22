import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import Inicio from '../index/index';
import nosotros from '../nosotros/nosotros';
import PrivateRoute from '../auth/privaterouter';
import avistamientos from "../avistamientos/inicioe";
import especies from "../especies/especies"

export default function AppRoutes () {
    return(
        <Router>
            <Switch>                
                <PrivateRoute exact path={["/avistamientos"]} component={ avistamientos }/>
                <Route exact path={["/login"]} component={ Login }/>
                <Route exact path={["/"]} component={ Inicio }/>
                <Route exact path={["/nosotros"]} component={ nosotros }/>
                <Route exact path ={["/especies"]} component={ especies }/>
                <Route path ={"*"} component= { () => (
                            <h1 style={{ marginTop: 300 }}>
                                404
                                <br/> 
                                Página no encontrada
                            </h1>
                        ) } />                
            </Switch>
        </Router>

    );

}




