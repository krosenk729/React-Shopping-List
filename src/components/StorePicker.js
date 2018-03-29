import React from 'react';

class StorePicker extends React.Component{
	render(){
		return (
			<React.Fragment>
			{ /* comment without error */}
			<h1>Are You Ready For Coffee?</h1>
			<input type="text" required placeholder="Yes" />
			<button type="submt">Caffinate</button>
			</React.Fragment>
		)
	}
}

export default StorePicker;