import React from 'react';
import { MobileCard } from './MobileCard';
import { NormalCard } from './NormalCard';
import '../styles/Panel.scss';

//returns a panel for an item
//props pass through to Cards
const Panel = ( props ) => {

	const getCard = ( window.innerWidth < 768 ) ? (
		<MobileCard {...props}/>
	) : (
		<NormalCard {...props}/>
	);

	return (
		<div className="col-lg-6 col-md-8 col-sm-12 px-2 user-select-none mb-2">
			{ getCard }
		</div>
	);

};

export { Panel };
