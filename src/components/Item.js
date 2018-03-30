import React from 'react';

class Item extends React.Component{

	render(){
		const {image, name, price, status} = this.props.details;
		const needIt = status === 'need'
		return (
			<li class="item">
				<img src={image} alt={name} />
				<h3>{name} : {status}</h3>
				<button type="button" 
				disabled={!needIt} 
				onClick={()=> this.props.addToList(this.props.index)}
				>
				{needIt ? "Add to List 🛍" : "No Shopping 🙅"}
				</button>
			</li>
		)
	}
}

export default Item;