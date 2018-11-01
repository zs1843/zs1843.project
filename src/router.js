import * as React from 'react';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom';
import * as APP from './app';
import * as Home from './components/home/home';

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    onUpdate() {
        console.log('变化了啊。')
    }
    render() {
        return (
            <BrowserRouter basename="/#">
                <div>
                    <Route path="/" component={APP}></Route>
                    <Route path="/home" component={Home}></Route>
                </div>

            </BrowserRouter>
        )
    }
}

export default Routes;