import React from 'react';
import { getStoreName } from '../helpers';

class StoreChooser extends React.Component{
	myInput = React.createRef();

	goToStore = (event) => {
		event.preventDefault();
		const storeName = this.myInput.current.value;
		this.props.history.push(`/store/${storeName}`)
	}

	render(){
		return (
			<React.Fragment>
			{ /* comment without error */}
			<h1>What Shopping List are You Listing?</h1>
			<form onSubmit={this.goToStore}>
			<input type="text" ref={this.myInput} required defaultValue={getStoreName()} />
			<button>Go To Store List</button>
			</form>
			</React.Fragment>
		)
	}
}

export default StoreChooser;