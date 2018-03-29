import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import ShoppingList from './ShoppingList';

class App extends React.Component{

	render(){
		return (
			<div className="list-maker">
			<div className="menu">
			<Header tagline="this is fun" />
			</div>
			<Inventory />
			<ShoppingList />
			</div>
		)
	}
}

export default App;