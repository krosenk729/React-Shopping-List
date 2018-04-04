import React from 'react';
import PropTypes from 'prop-types'; 

class Item extends React.Component{
	static propTypes = {
		details: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.isRequired,
			status: PropTypes.string,
			size: PropTypes.string
		}),
		addToList: PropTypes.func
	}

	render(){
		const {image, name, size, price, status} = this.props.details;
		const haveIt = status === 'have';
		const bgImage = image || "/images/placeholder.png";
		const buttonBg = {backgroundImage: `url(${bgImage})`}
		return (
			<li className="item">
				<button type="button" 
				className="add-item-button" 
				disabled={haveIt} 
				onClick={()=> this.props.addToList(this.props.index)}
				style={buttonBg}
				>
				<div>
				{haveIt ? "🙅" : <i className="fas fa-plus"></i>}
				</div>
				</button>
				<div className="item-desc">
				<h4>{name} <span className="fancy">{status}</span></h4>
				{price ? <p>Avg price: ${price}ish</p> : ""}
				{size ? <p>Size: ${size}</p> : ""}
				</div>
			</li>
		)
	}
}

export default Item;