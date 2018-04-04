import React from 'react';
import PropTypes from 'prop-types'; 
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

		const haveIt = item.status === 'have';
		const transitionOptions = {
			classNames: "store-list-item", 
			key: i,
			timeout: {enter: 500, exit: 500}
		};

		if(haveIt){
			return(
				<CSSTransition {...transitionOptions}>
				<li key={i} className="store-list-item">
				<div className="store-item-title">
				<h3 className="strike">{item ? item.name : 'Deleted item'}</h3>
				<div className="img-wrap"><img src={item && item.image ? item.image : null} alt="{item.name}" /></div>
				</div>
				<div className="store-list-actions">
				<div className="qty">0</div>
				<button className="del" onClick={()=> this.props.removeFromList(i)}><i className="fas fa-minus" role="img" aria-label="remove from list"></i></button>
				</div>
				</li>
				</CSSTransition>
				)
		} else {
			const qty = this.props.list[i];
			return(
				<CSSTransition {...transitionOptions}>
				<li key={i} className="store-list-item">
				<div className="store-item-title">
				<h3>{item.name}</h3>
				<div className="img-wrap"><img src={item.image} alt={item.name} /></div>
				</div>
				<div className="store-list-actions">
				<div className="qty">{qty}</div>
				<div className="price">${item.price}ish</div>
				<button className="up" onClick={()=> this.props.addToList(i)}><i className="fas fa-chevron-up" role="img" aria-label="increase quantity"></i></button>
				<button className="down" onClick={()=> this.props.decreaseList(i)}><i className="fas fa-chevron-down" role="img" aria-label="decrease quantity"></i></button>
				<button className="del" onClick={()=> this.props.removeFromList(i)}><i className="fas fa-minus" role="img" aria-label="remove from list"></i></button>
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
			<h2 className="center">Shopping List <br /> for {this.props.storeName}</h2>
			<TransitionGroup component="ul">
			{itemIds.map(this.renderListItem)}
			</TransitionGroup>
			<h3 className="total">Total for trip: $<span className="fancy">{total}</span> ish</h3>
			</div>
			)
		}
	}

	export default StoreList;