import React from 'react';
import PropTypes from 'prop-types'; 

class EditItemForm extends React.Component{
	static propTypes = {
		item: PropTypes.shape({
			name: PropTypes.string,
			price: PropTypes.isRequired,
			image: PropTypes.string,
			status: PropTypes.string,
			size: PropTypes.string
		}),
		index: PropTypes.string.isRequired,
		editItem: PropTypes.func.isRequired,
		deleteItem: PropTypes.func.isRequired
	}

	handleChange = (event) => {
		const updatedItem = {...this.props.item};
		const eventItem = event.currentTarget ? event.currentTarget : event.target;
		updatedItem[eventItem.name] = eventItem.value;
		this.props.editItem(this.props.index, updatedItem);
	}

	render(){
		return (
			<React.Fragment>

			<div className="edit-item-form">
			<label>Item Name
			<input name="name" value={this.props.item.name} onChange={this.handleChange} type="text" placeholder="name" />
			</label>
			<label>Price
			<input name="price" value={this.props.item.price} onChange={this.handleChange} type="number" step="0.01" placeholder="price" />
			</label>
			<label>Size
			<input name="size" value={this.props.item.size} onChange={this.handleChange} type="text" />
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
			</div>
			
			<div className="div-row">
			<button type="button" className="deleter" onClick={()=>this.props.deleteItem(this.props.index)}><i className="fas fa-trash"></i></button>
			</div>

			</React.Fragment>
			)
		}
	}

	export default EditItemForm;