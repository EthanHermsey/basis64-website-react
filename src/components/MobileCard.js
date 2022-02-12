import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGrid } from './ButtonGrid';
import { useGetItem } from '../hooks/useGetItem';

//Return a card form for mobile platform
const MobileCard = ( props )=>{

	const item = useGetItem( props.index );
	return (
		<div className="card border-cust bg-main">
			<h1 className='text-white eunomia ms-1 mt-2'>{item.title}</h1>
			<img className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${item.img}`} alt=""/>
			<p className='text-white ms-2 py-2'>{item.description}</p>
			< ButtonGrid {...item}/>
		</div>
	);

};

MobileCard.propTypes = {
	index: PropTypes.number
};

export { MobileCard };
