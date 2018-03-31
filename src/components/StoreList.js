import React from 'react';
import { formatPrice } from '../helpers';

class StoreList extends React.Component{
	renderListItem = (i) => {
		const item = this.props.items[i];
		if(!item) return null; 

		const qty = this.props.list[i];
		const isNeeded = item.status === 'need';
		if(!isNeeded){
			return(
				<li key={i}>
					<h4>{item ? item.name : 'Deleted item'}</h4>
					<p>shop for 0! </p>
					<div>
					<button className="del" onClick={()=> this.props.removeFromList(i)}>⛔</button>
					</div>
				</li>
				)
		} else {
			return(
				<li key={i}>
					<h4>{item.name}</h4>
					<p>shop for {qty}</p>
					<div>
					<button className="up" onClick={()=> this.props.addToList(i)}>🔺</button>
					<button className="down" onClick={()=> this.props.decreaseList(i)}>🔻</button>
					<button className="del" onClick={()=> this.props.removeFromList(i)}>⛔</button>
					</div>
				</li>
				)
		}
	}

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
			<h2>Shopping List for {this.props.storeName}</h2>
			<ul>
			{itemIds.map(this.renderListItem)}
			</ul>
			<p>{formatPrice(total)}</p>
			</div>
		)
	}
}

export default StoreList;