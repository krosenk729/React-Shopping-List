import React from 'react';
import { render } from 'react-dom';

import './css/style-archive.css';
import './css/style.css';
import ListPicker from './components/ListPicker';
import App from './components/App';

render(
	<App />, 
	document.querySelector('#main')
	);