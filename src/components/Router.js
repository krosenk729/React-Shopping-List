import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoreChooser from './StoreChooser';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={StoreChooser} />
			<Route exact path="/store/:storeName" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;