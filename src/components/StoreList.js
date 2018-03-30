import React from 'react';
import { formatPrice } from '../helpers';

class StoreList extends React.Component{
	renderListItem = (item) => (
		<li>{item}</li>
		)

	render(){
		const itemIds = Object.keys(this.props.list);
		const total = itemIds.reduce((t, i)=>{
			const item = this.props.items[i];
			const qty = this.props.list[i];
			if(item && item.status === 'need'){
				return t + (qty * item.price);
			} else {
				return t;
			}
		}, 0);
		return (
			<div className="store-list">
			<h2>Shopping List</h2>
			<ul>
			{itemIds.map(this.renderListItem)}
			</ul>
			<p>{formatPrice(total)}</p>
			</div>
		)
	}
}

export default StoreList;