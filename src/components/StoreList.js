import React from 'react';
import PropTypes from 'prop-types'; 
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class StoreList extends React.Component{
	static propTypes = {
		items: PropTypes.object.isRequired,
		list: PropTypes.object.isRequired,
		addToList: PropTypes.func.isRequired,
		decreaseList: PropTypes.func.isRequired,
		removeFromList: PropTypes.func.isRequired
	}

	renderListItem = (i) => {
		const item = this.props.items[i];
		if(!item) return null; 

		const qty = this.props.list[i];
		const isNeeded = item.status === 'need';

		const transitionOptions = {
			classNames: "store-list-item", 
			key: i,
			timeout: {enter: 500, exit: 500}
		};

		if(!isNeeded){
			return(
				<CSSTransition {...transitionOptions}>
				<li key={i} className="store-list-item">
				<div className="list-title-group">
				<h4>{item ? item.name : 'Deleted item'}</h4>
				<p>shop for 0!</p>
				</div>
				<div className="list-button-group">
				<button className="del" onClick={()=> this.props.removeFromList(i)}><span role="img" aria-label="change quantity">⛔</span></button>
				</div>
				</li>
				</CSSTransition>
				)
			} else {
				return(
				<CSSTransition {...transitionOptions}>
				<li key={i} className="store-list-item">
				<div className="list-title-group">
				<h3>{item.name}</h3>
				<p>shop for {qty}</p>
				</div>
				<div className="list-button-group">
				<div><img src={item.image} /></div>
				<button className="up" onClick={()=> this.props.addToList(i)}><span role="img" aria-label="change quantity">🔺</span></button>
				<button className="down" onClick={()=> this.props.decreaseList(i)}><span role="img" aria-label="change quantity">🔻</span></button>
				<button className="del" onClick={()=> this.props.removeFromList(i)}><span role="img" aria-label="change quantity">⛔</span></button>
				</div>
				</li>
				</CSSTransition>
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
			<TransitionGroup component="ul">
			{itemIds.map(this.renderListItem)}
			</TransitionGroup>
			<p>Expect to pay {formatPrice(total)} ish</p>
			</div>
			)
		}
	}

	export default StoreList;