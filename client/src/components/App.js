import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import NotFound from './NotFound';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/article/:id" component={Article} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;