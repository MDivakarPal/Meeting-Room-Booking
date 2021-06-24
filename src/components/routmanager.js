import React from 'react'
import InputData from './InputData'
import MyApp from './Calendar'
import Thanks from './Thanks'
import {Switch,Route} from 'react-router-dom'
export default function RoutManager() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={InputData}/>
                <Route exact path='/choosetime' component={MyApp}/>
                <Route exact path='/thanks' component={Thanks}/>
            </Switch>
        </div>
         )
}
