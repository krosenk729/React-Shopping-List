import React from 'react';
import PropTypes from 'prop-types'; 
import Item from './Item';

class StoreItems extends React.Component{
	static propTypes = {
		items: PropTypes.object.isRequired,
		addToList: PropTypes.func.isRequired
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
			</React.Fragment>
		)
	}
}

export default StoreItems;