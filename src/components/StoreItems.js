import React from 'react';
import AddItemForm from './AddItemForm';

class StoreItems extends React.Component{

	render(){
		return (
			<React.Fragment>
			<button className="btn" onClick={this.props.loadStoreItems}>Load Store's Past Items</button>
			<ul>
				<li>This is an item</li>
			</ul>
			</React.Fragment>
		)
	}
}

export default StoreItems;