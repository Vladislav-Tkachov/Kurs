import * as React from 'react';
import { Route, Router } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import './custom.css'
import Cards from './components/Cards';
import { TypeCard } from './Entity';
import { CardInfo } from './components/CardInfo';
import { history } from './index'

export default () => (
    <Router history={history}>
        <Layout>
            <main>
                <Route exact path='/' component={Home} />
                <Route exact path='/kitchens'><Cards type={TypeCard.Kitchens} /></Route>
                <Route exact path='/hallways'><Cards type={TypeCard.Hallways} /></Route>
                <Route exact path='/wardrobes'><Cards type={TypeCard.Wardrobes} /></Route>
                <Route exact path='/serialfurniture'><Cards type={TypeCard.SerialFurnitures} /></Route>
                <Route exact path='/officefurniture'><Cards type={TypeCard.OfficeFurnitures} /></Route>
                <Route exact path="/Kitchens/:id" render={(props) => <CardInfo id={props.match.params.id} />} />
                <Route exact path="/Wardrobes/:id" render={(props) => <CardInfo id={props.match.params.id} />} />
                <Route exact path="/Hallways/:id" render={(props) => <CardInfo id={props.match.params.id} />} />
                <Route exact path="/SerialFurnitures/:id" render={(props) => <CardInfo id={props.match.params.id} />} />
                <Route exact path="/OfficeFurnitures/:id" render={(props) => <CardInfo id={props.match.params.id} />} />
            </main>
        </Layout>
    </Router>
);
