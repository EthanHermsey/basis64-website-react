import React from "react";
import PropTypes from 'prop-types';
import { useScrollUpdate } from "../hooks/useScrollUpdate";

export const ScrollContext = React.createContext( { scrollUpdate: false } );

export const ScrollUpdateProvider = ( { children, scrollRef } )=>{

	const [ scrollUpdate ] = useScrollUpdate( scrollRef );

	return (
		<ScrollContext.Provider value={{ scrollUpdate: scrollUpdate }}>
			{ children }
		</ScrollContext.Provider>
	);

};

ScrollUpdateProvider.propTypes = {
	children: PropTypes.object,
	scrollRef: PropTypes.any
};
