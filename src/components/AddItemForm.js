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
			name: this.nameRef.current ? this.nameRef.current.value : event.target.name.value,
			price: parseFloat(this.priceRef.current ? this.priceRef.current.value : event.target.price.value),
			status: this.statusRef.current ? this.statusRef.current.value : event.target.status.value,
			image: this.imageRef.current ? this.imageRef.current.value : event.target.image.value
		}
		this.props.addItem(item);
		event.target.reset();
	}

	render(){
		return (
			<form className="add-item-form" onSubmit={this.createItem}>
			<label>Item Name
			<input name="name" ref={this.nameRef} type="text" placeholder="Item Name" />
			</label>
			<label>Price
			<input name="price" ref={this.priceRef} type="number" step="0.01" placeholder="0.01" />
			</label>
			<label>Size
			<input name="size" ref={this.sizeRef} type="text" />
			</label>
			<label>Status
			<select name="status" ref={this.statusRef}>
			<option value="need" selected="true">Need it! Buy away</option>
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