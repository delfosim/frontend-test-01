import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import NewChart from './pages/newChart';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/newChart" component={NewChart} />
            <Route path="/editChart/:id" component={NewChart} />
        </BrowserRouter>
    );
}