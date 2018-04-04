import React from 'react';
import PropTypes from 'prop-types'; 

class AddItemForm extends React.Component{
	static propTypes = {
		addItem: PropTypes.func
	}

	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	imageRef = React.createRef();
	sizeRef = React.createRef();

	createItem = (event) => {
		event.preventDefault();
		const item = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status: this.statusRef.current.value,
			image: this.imageRef.current.value
		}
		this.props.addItem(item);
		event.currentTarget.reset();
	}

	render(){
		return (
			<form className="add-item-form" onSubmit={this.createItem}>
			<label>Item Name
			<input name="name" ref={this.nameRef} type="text" placeholder="name" />
			</label>
			<label>Price
			<input name="price" ref={this.priceRef} type="number" step="0.01" placeholder="price" />
			</label>
			<label>Size
			<input name="size" ref={this.sizeRef} type="text" />
			</label>
			<label>Status
			<select name="status" ref={this.statusRef}>
			<option value="need">Need it! Buy away</option>
			<option value="have">Have it! No need to buy</option>
			</select>
			</label>
			<label>Image Source
			<input name="image" ref={this.imageRef} type="text" placeholder="URL to image" />
			</label>
			<button className="btn" type="submit">Add Item</button>
			</form>
			)
		}
	}

export default AddItemForm;