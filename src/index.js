
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

import 'bootstrap/scss/bootstrap.scss';
import './styles/style.scss';

import { rootReducer } from './reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore( rootReducer );

axios.get( './resources/items.json' )
	.then( res =>{

		store.dispatch( { type: 'LOAD_DATA', data: res.data } );

	} );

ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById( 'root' )
);
