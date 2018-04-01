import React from 'react';
import PropTypes from 'prop-types'; 

class Item extends React.Component{
	static propTypes = {
		details: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.isRequired,
			status: PropTypes.string
		}),
		addToList: PropTypes.func
	}

	render(){
		const {image, name, price, status} = this.props.details;
		const needIt = status === 'need'
		return (
			<li className="item">
				<button type="button" 
				className="add-item-button" 
				disabled={!needIt} 
				onClick={()=> this.props.addToList(this.props.index)}
				>
				<img src={image} alt={name} />
				{needIt ? "Add to List" : "Already Have It 🙅"}
				</button>
				<div className="item-desc">
				<h3>{name} : {status}</h3>
				<p>Avg price: {price}</p>
				</div>
			</li>
		)
	}
}

export default Item;