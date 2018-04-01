import React from 'react';
import base from '../base';
import { getStoreName } from '../helpers';

class StoreChooser extends React.Component{
	myInput = React.createRef();
	state = {
		stores: {}
	}

	/**********************************************************
	Save / sync with firebase
	*/
	componentDidMount(){
		this.dbRef = base.syncState('/', {
			context: this,
			state: 'stores'
		});
	}

	componentWillUnmount(){
		base.removeBinding(this.dbRef);
	}

	/**********************************************************
	Navigate based on button click
	*/
	goToStore = (storeName) => {
		this.props.history.push(`/store/${storeName}`)
	}

	render(){
		return (
			<main className="store-chooser">
			{ /* comment without error */}
			<h1>What Shopping List are You Listing?</h1>
			
			<div className="stores-list">
			{Object.keys(this.state.stores).map(store => (
				<button key={store} onClick={() => this.goToStore(store)}>{store}</button>
			))}
			</div>
			</main>
		)
	}
}

export default StoreChooser;