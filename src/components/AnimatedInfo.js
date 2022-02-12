import React from "react";
import PropTypes from "prop-types";
import { ButtonGrid } from "./ButtonGrid";
import { useElementInView } from "../hooks/useElementInView";

import '../styles/AnimatedInfo.scss';
import { useEffect } from "react";

//returns an animated information panel
export const Info = ( props ) => {

	const [ show, setShow, viewElement ] = useElementInView( props.scrollUpdate );

	//also add animation class to panelImage passed in props..
	useEffect( ()=>{

		props.panelImg.current.classList.toggle( 'blip', show );

	}, [ show ] );

	//adaptive class for infobox
	const boxClass = "text-white h-100 " + ( ( props.toLeft ) ? 'place-right' : 'place-left' ) + ( ( show ) ? ' shown' : '' );

	return (
		<div id="info-box" ref={viewElement} className={boxClass} onMouseEnter={()=>{

			setShow( true );

		}} onMouseLeave={()=>{

			setShow( false );

		}}>
			<div className="sizer"></div>
			<h1 className='w-100 text-white eunomia m-0 py-1'>{props.title}</h1>
			<div className="info-card bg-main">
				<p className="card-text container-wide text-left">{props.description}</p>
				<ButtonGrid {...props} />
			</div>
		</div>
	);

};

Info.propTypes = {
	scrollUpdate: PropTypes.bool,
	toLeft: PropTypes.bool,
	panelImg: PropTypes.any,
	title: PropTypes.string,
	description: PropTypes.string,
};
