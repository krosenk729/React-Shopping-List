import React from 'react';
import PropTypes from 'prop-types'; 

class EditItemForm extends React.Component{
	static propTypes = {
		item: PropTypes.shape({
			name: PropTypes.string,
			price: PropTypes.number,
			image: PropTypes.string,
			status: PropTypes.string
		}),
		index: PropTypes.string,
		editItem: PropTypes.func,
		deleteItem: PropTypes.func
	}

	handleChange = (event) => {
		const updatedItem = {...this.props.item};
		updatedItem[event.currentTarget.name] = event.currentTarget.value;
		this.props.editItem(this.props.index, updatedItem);
	}

	render(){
		return (
			<div className="edit-item-form">
			<label>Item Name
			<input name="name" value={this.props.item.name} onChange={this.handleChange} type="text" placeholder="name" />
			</label>
			<label>What is a good price?
			<input name="price" value={this.props.item.price} onChange={this.handleChange} type="number" placeholder="price" />
			</label>
			<label>Status
			<select name="status" value={this.props.item.status} onChange={this.handleChange}>
			<option value="need">Need it! Buy away</option>
			<option value="have">Have it! No need to buy</option>
			</select>
			</label>
			<label>Image Source
			<input name="image" value={this.props.item.image} onChange={this.handleChange} type="text" placeholder="img" />
			</label>
			<button type="button" className="delete-bttn" onClick={()=>this.props.deleteItem(this.props.index)}>Remove</button>
			</div>
			)
		}
	}

	export default EditItemForm;