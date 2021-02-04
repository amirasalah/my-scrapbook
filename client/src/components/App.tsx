import React, { FC } from 'react'
import { Header } from './Header/header'
import Home from './Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './Auth/Auth'

const App: FC<any> = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/auth'>
                    <Auth />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default App
