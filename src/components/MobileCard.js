import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonGrid } from './ButtonGrid';
import { useGetItem } from '../hooks/useGetItem';
import { useElementInView } from '../hooks/useElementInView';
import { ScrollContext } from '../providers/ScrollUpdateProvider';

//Return a card form for mobile platform
const MobileCard = ( props )=>{

	const item = useGetItem( props.dataKey );
	const blipDiv = useRef();
	const scrollUpdate = useContext( ScrollContext );
	const [ show,, panelImg ] = useElementInView( scrollUpdate );

	//also add animation class to panelImage passed in props..
	useEffect( ()=>{

		blipDiv.current.classList.toggle( 'blip', show );

	}, [ show ] );

	return (
		<div className="card border-cust bg-main" ref={blipDiv}>
			<h1 className='text-white eunomia ms-1 mt-2'>{item.title}</h1>
			<img className="img-fluid img-thumbnail bg-main" ref={ panelImg } src={`${process.env.PUBLIC_URL}/resources/${item.img}`} alt=""/>
			<p className='text-white ms-2 py-2'>{item.description}</p>
			< ButtonGrid {...item}/>
		</div>
	);

};

MobileCard.propTypes = {
	dataKey: PropTypes.number
};

export { MobileCard };
