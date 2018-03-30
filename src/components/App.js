import React from 'react';
import Header from './Header';
import StoreItems from './StoreItems';
import StoreList from './StoreList';
import StoreInventory from './StoreInventory';
import storeItems from '../sample-items';

class App extends React.Component{
	/*
	alternative syntax to
	constructor(){ 
		super(); 
		this.state = { ... }
	}
	*/
	state = {
		items: {},
		list: {}
	};

	/*
	copy state
	update copy
	push copy to state
	*/
	addItem = (item) => {
		const items = {...this.state.items};
		items[`item${Date.now()}`] = item;
		this.setState({items});
	}

	loadStoreItems = () => {
		this.setState({items: storeItems});
	}

	render(){
		return (
			<div className="list-maker accord">
			<div className="all-items">
			<Header />
			<StoreItems loadStoreItems={this.loadStoreItems} />
			</div>
			<StoreList />
			<StoreInventory addItem={this.addItem} />
			</div>
		)
	}
}

export default App;