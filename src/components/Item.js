import React from 'react';

class Item extends React.Component{

	render(){
		const {image, name, price, status} = this.props.details;
		const needIt = status === 'need'
		return (
			<li className="item">
				<img src={image} alt={name} />
				<div>
				<h3>{name} : {status}</h3>
				<p>Avg price: {price}</p>
				<button type="button" 
				disabled={!needIt} 
				onClick={()=> this.props.addToList(this.props.index)}
				>
				{needIt ? "Add to List" : "No Shopping 🙅"}
				</button>
				</div>
			</li>
		)
	}
}

export default Item;