import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { gapi } from "gapi-script";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "12760997796-ipv6mhus6jn4g8jk47tnoutuf68cojj8.apps.googleusercontent.com",
      plugin_name: "chat",
      scope:""
    });
  });

const App = () => (
    <BrowserRouter>
        <Container maxwidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;