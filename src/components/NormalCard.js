
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Info } from './AnimatedInfo';
import { useGetItem } from '../hooks/useGetItem';

//return card form for larger devices
const NormalCard = ( props )=>{

	const panelImage = useRef();
	const item = useGetItem( props.index );

	return (
		<div className="card bg-main">
			<img ref={panelImage} className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${item.img}`} alt=""/>
			<Info {...item} panelImg={panelImage} toLeft={props.toLeft} scrollUpdate={props.scrollUpdate}/>
		</div>
	);

};

NormalCard.propTypes = {
	index: PropTypes.number,
	toLeft: PropTypes.bool,
	scrollUpdate: PropTypes.bool
};

export { NormalCard };
