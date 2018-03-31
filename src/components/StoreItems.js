import React from 'react';
import Item from './Item';

class StoreItems extends React.Component{

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
			<button className="btn" onClick={this.props.loadStoreItems}>Load Some Essentials</button>
			</React.Fragment>
		)
	}
}

export default StoreItems;