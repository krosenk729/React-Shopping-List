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
		deleteItem: PropTypes.func.isRequired,
		loadEssentials: PropTypes.func.isRequired
	}

	render(){
		return (
			<React.Fragment>
			<input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
			<label htmlFor="drawer-toggle"></label>
			
			<div className="store-items drawer" id="drawer">
			
			<h4>New {this.props.storeName} item:</h4>
			<AddItemForm className="inventory-form" addItem={this.props.addItem} />
			
			<h4>Edit Favorite {this.props.storeName} Items:</h4>
			{Object.keys(this.props.items).map(i => (
				<EditItemForm 
				className="inventory-form"
				item={this.props.items[i]} 
				key={i}
				index={i}
				editItem={this.props.editItem}
				deleteItem={this.props.deleteItem}
				 />
			))}
			
			<h4>Pre-Load With The Basic Essentials</h4>
			<button className="essentials-button" onClick={this.props.loadEssentials}>Load Some Essentials</button>
			
			</div>
			
			</React.Fragment>
		)
	}
}

export default StoreInventory;