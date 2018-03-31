import React from 'react';
import Header from './Header';
import StoreItems from './StoreItems';
import StoreList from './StoreList';
import StoreInventory from './StoreInventory';
import storeItems from '../sample-items';
import base from '../base';

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
	Save / sync with firebase
	*/
	componentDidMount(){
		console.log(this.props.match.params.storeName);
		this.dbRef = base.syncState(`${this.props.match.params.storeName}/items`, {
			context: this,
			state: 'items'
		});
	}

	componentWillUnmount(){
		base.removeBinding(this.dbRef);
	}

	/*
	Store list in local storage
	*/
	componentDidUpdate(){
		localStorage.setItem(this.props.match.params.storeName, JSON.stringify(this.state.list));
		console.log('updated', this.state.list);
	}

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

	/*
	copy state
	add to list OR increment quantity of list item
	push copy to state
	*/
	addToList = (key) => {
		const list = {...this.state.list};
		list[key] = list[key] + 1 || 1; 
		this.setState({list});
	}

	/*
	copy state
	decrease quantity OR remove list item
	push copy to state
	*/
	decreaseList = (key) => {
		const list = {...this.state.list};
		if(list[key] === 1){
			delete list[key];
		} else {
			list[key] = list[key] - 1;
		}
		this.setState({list});
	}

	/*
	copy state
	remove list item
	push copy to state
	*/
	removeFromList = (key) => {
		const list = {...this.state.list};
		delete list[key];
		this.setState({list});
	}

	render(){
		return (
			<div className="list-maker accord">
			<div className="all-items">
			<Header />
			<StoreItems 
			loadStoreItems={this.loadStoreItems} 
			addToList={this.addToList} 
			items={this.state.items} />
			</div>
			<StoreList
			decreaseList={this.decreaseList}
			removeFromList={this.removeFromList}
			list={this.state.list}
			items={this.state.items} />
			<StoreInventory addItem={this.addItem} />
			</div>
		)
	}
}

export default App;