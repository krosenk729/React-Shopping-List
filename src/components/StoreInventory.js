import React from 'react';
import AddItemForm from './AddItemForm';

class StoreInventory extends React.Component{

	render(){
		return (
			<div className="store-items">
			<AddItemForm addItem={this.props.addItem} />
			</div>
		)
	}
}

export default StoreInventory;