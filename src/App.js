import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from './components/Panel';
import { ScrollUpdateProvider } from './providers/ScrollUpdateProvider';

import './styles/App.scss';



//gets props from store
//loads a panel for each item
//capture scroll event in provider, for auto animation.
//renders it to screen
const App = ( { itemAmount } ) => {

	const scrollDiv = useRef();
	const panels = [];
	for ( let index = 0; index < itemAmount; index ++ ) {

		panels.push( <Panel key={ index } dataKey={ index } /> );

	}

	return (
		<ScrollUpdateProvider scrollRef={scrollDiv}>
			<div className="App bg-back" ref={scrollDiv}>
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
		</ScrollUpdateProvider>
	);

};

App.propTypes = {
	itemAmount: PropTypes.number
};

const mapStateToProps = ( state ) => {

	return { itemAmount: state.items.length };

};

export default connect( mapStateToProps )( App );
