import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import PropTypes from 'prop-types'; 

class StoreInventory extends React.Component{
	static propTypes = {
		storeName: PropTypes.string.isRequired,
		items: PropTypes.object.isRequired,
		addItem: PropTypes.func.isRequired,
		editItem: PropTypes.func.isRequired,
		deleteItem: PropTypes.func.isRequired
	}

	render(){
		return (
			<React.Fragment>
			<input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
			<label for="drawer-toggle"></label>
			<div className="store-items drawer" id="drawer">
			<h4>New {this.props.storeName} item:</h4>
			<AddItemForm addItem={this.props.addItem} />
			<h4>Edit {this.props.storeName} items:</h4>
			{Object.keys(this.props.items).map(i => (
				<EditItemForm 
				item={this.props.items[i]} 
				key={i}
				index={i}
				editItem={this.props.editItem}
				deleteItem={this.props.deleteItem}
				 />
			))}
			</div>

			</React.Fragment>
		)
	}
}

export default StoreInventory;