import React from 'react';
import PropTypes from 'prop-types'; 

const Header = (props)=>(
	<h1>
		{props.storeName} Favorites
	</h1>
);

Header.propTypes = {
	storeName: PropTypes.string.isRequired
};

export default Header;