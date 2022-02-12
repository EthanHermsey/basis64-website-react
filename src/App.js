import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from './components/Panel';
import { useScrollUpdate } from './hooks/useScrollUpdate';

import './styles/App.scss';



//gets props from store
//loads a panel for each item
//capture scroll event, for auto animation. Pass to panel in props
//renders it to screen
const App = ( { itemAmount } ) => {

	const [ scrollUpdate, appDiv ] = useScrollUpdate();

	const panels = [];
	for ( let index = 0; index < itemAmount; index ++ ) {

		panels.push( <Panel key={index} { ...{ index, toLeft: ( index % 2 === 1 ), scrollUpdate: scrollUpdate } } /> );

	}

	return (
		<div className="App bg-back" ref={appDiv}>
			<h1 className=" text-white eunomia text-center mt-4 mb-0">BASIS64</h1>
			<div className="container-small mt-0">
				<div className="row gy-5 mt-2">
					{ panels }
				</div>
			</div>
			<footer>
				<a href="mailto:ethan@basis64.nl" target="_blank" rel="noreferrer">
					<div id="email" className="bg-button text-black text-end pe-1">ethan@basis64.nl</div>
				</a>
				<a href="https://github.com/EthanHermsey?tab=repositories" target="_blank" rel="noreferrer">
					<div id="git" className="bg-button text-black text-end pe-1">EthanHermsey</div>
				</a>
			</footer>
		</div>
	);

};

App.propTypes = {
	itemAmount: PropTypes.number
};

const mapStateToProps = ( state ) => {

	return { itemAmount: state.items.length };

};

export default connect( mapStateToProps )( App );
