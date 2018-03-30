import React from 'react';

class AddItemForm extends React.Component{
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	imgRef = React.createRef();

	createItem = (event) => {
		event.preventDefault();
		const item = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status: this.statusRef.current.value,
			img: this.imgRef.current.value
		}
		this.props.addItem(item);
		event.currentTarget.reset();
	}

	render(){
		return (
			<form className="add-item-form" onSubmit={this.createItem}>
			<label>Name
			<input name="name" ref={this.nameRef} type="text" placeholder="name" />
			</label>
			<label>Price
			<input name="price" ref={this.priceRef} type="number" placeholder="price" />
			</label>
			<label>Status
			<select name="status" ref={this.statusRef}>
			<option value="need">Need it! Buy away</option>
			<option value="have">Have it! No need to buy</option>
			</select>
			</label>
			<label>Image Source
			<input name="img" ref={this.imgRef} type="text" placeholder="img" />
			</label>
			<button className="btn" type="submit">Add Item</button>
			</form>
			)
		}
	}

export default AddItemForm;