import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types'; 

class StoreItems extends React.Component{
	static propTypes = {
		items: PropTypes.object.isRequired,
		addToList: PropTypes.func.isRequired,
		loadEssentials: PropTypes.func.isRequired
	}

	render(){
		return (
			<React.Fragment>
			<ul className="store-items">
			{Object.keys(this.props.items).map(key =>(
				<Item 
					key={key} 
					index={key}
					details={this.props.items[key]}  
					addToList={this.props.addToList}
				/>
				))}
			</ul>
			<button className="essentials-button" onClick={this.props.loadEssentials}>Load Some Essentials</button>
			</React.Fragment>
		)
	}
}

export default StoreItems;