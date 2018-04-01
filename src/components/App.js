import React from 'react';
import base from '../base';
import Header from './Header';
import StoreItems from './StoreItems';
import StoreList from './StoreList';
import StoreInventory from './StoreInventory';
import essentials from '../sample-items';

class App extends React.Component{
	/**********************************************************
	State Management
	alternative syntax to
	constructor(){ 
		super(); 
		this.state = { ... }
	}
	*/
	state = {
		items: {},
		list: {},
		storeName: this.props.match.params.storeName
	};

	/**********************************************************
	Save / sync with firebase
	*/
	componentDidMount(){
		const localList = localStorage.getItem(this.state.storeName);
		if(localList){
			console.log(localList);
			this.setState({list: JSON.parse(localList)});
		}
		this.dbRef = base.syncState(`${this.state.storeName}/items`, {
			context: this,
			state: 'items'
		});
	}

	componentWillUnmount(){
		base.removeBinding(this.dbRef);
	}

	/**********************************************************
	Store list in local storage
	*/
	componentDidUpdate(){
		localStorage.setItem(this.state.storeName, JSON.stringify(this.state.list));
		console.log('updated', this.state.list);
	}

	/**********************************************************
	Updating Items:
	copy state
	update copy
	push copy to state
	*/
	addItem = (item) => {
		const items = {...this.state.items};
		items[`item${Date.now()}`] = item;
		this.setState({items});
	}

	editItem = (key, item) =>{
		const items = {...this.state.items};
		items[key] = item;
		this.setState({items});
	}

	deleteItem = (key) => {
		const items = {...this.state.items};
		items[key] = null; //must set to null instead of delete due to firebase
		this.setState({items});
	}

	loadEssentials = () => {
		const items = { ...essentials, ...this.state.items};
		this.setState({items});
	}

	/**********************************************************
	copy state
	- add to list OR increment quantity of list item
	- decrease quantity OR remove list item
	push copy to state
	*/
	addToList = (key) => {
		const list = {...this.state.list};
		list[key] = list[key] + 1 || 1; 
		this.setState({list});
	}

	decreaseList = (key) => {
		const list = {...this.state.list};
		if(list[key] === 1){
			delete list[key];
		} else {
			list[key] = list[key] - 1;
		}
		this.setState({list});
	}

	removeFromList = (key) => {
		const list = {...this.state.list};
		delete list[key];
		this.setState({list});
	}

	render(){
		return (
			<React.Fragment>
			<div className="list-maker accord">
			
			<div className="all-items">
			<Header storeName={this.state.storeName} />
			<StoreItems 
			loadEssentials={this.loadEssentials} 
			addToList={this.addToList} 
			items={this.state.items} />
			</div>
			
			<StoreList
			addToList={this.addToList}
			decreaseList={this.decreaseList}
			removeFromList={this.removeFromList}
			storeName={this.state.storeName}
			list={this.state.list}
			items={this.state.items} />
			</div>
			
			<StoreInventory 
			storeName={this.state.storeName}
			addItem={this.addItem} 
			editItem={this.editItem}
			deleteItem={this.deleteItem}
			items={this.state.items} />

			<button
			className="back-button"
			onClick={()=> this.props.history.push('/')}
			>Back</button>
			</React.Fragment>
		)
	}
}

export default App;