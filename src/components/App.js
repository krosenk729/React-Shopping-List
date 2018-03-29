import React from 'react';
import Header from './Header';
import StoreItems from './StoreItems';
import List from './List';

class App extends React.Component{

	render(){
		return (
			<div className="list-maker accord">
			<div className="menu">
			<Header tagline="this is fun" />
			</div>
			<StoreItems />
			<List />
			</div>
		)
	}
}

export default App;