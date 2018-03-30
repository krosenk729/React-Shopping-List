import React from 'react';
import Item from './Item';

class StoreItems extends React.Component{

	render(){
		return (
			<React.Fragment>
			<button className="btn" onClick={this.props.loadStoreItems}>Load Store's Past Items</button>
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