import React from 'react';
import { render } from 'react-dom';

import './css/normalize.css';
import './css/style.css';
import Router from './components/Router';

render(
	<Router />, 
	document.querySelector('#main')
	);