import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Yoga.css';
import Yogas from './data';
import Heading from './Heading';
import Body from './Body';
import App from './App';

const Yoga = () => {
    return (
        <>
            <h3 id ="bob"> Zen.Ai</h3>
            <Heading title="Yoga Poses" />
            <Switch>
                <Route exact path="/" render={() => <Body data={Yogas} />} />
                <Route path="/App/:title/:image" component={App} />
            </Switch>
        </>
    );
}

export default Yoga;