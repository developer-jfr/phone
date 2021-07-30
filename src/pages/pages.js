import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import FinalScreen from '../components/FinalScreen/FinalScreen'
import HeroSection from '../components/HeroSection'
import Support from '../components/Support/Support'

function Pages() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HeroSection} />
            <Route path='/support' component={Support} />
            <Route path='/final' component={FinalScreen} />
           
        </Switch>
        </BrowserRouter>
    )
}

export default Pages

