import React from 'react';

class ListPicker extends React.Component{
	render(){
		return (
			<React.Fragment>
			{ /* comment without error */}
			<h1>What Shopping List are You Listing?</h1>
			<input type="text" required placeholder="Katherine's" />
			<button type="submt">This List</button>
			</React.Fragment>
		)
	}
}

export default ListPicker;