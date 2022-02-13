import { useRef, useState, useEffect } from 'react';

//Hook that checks if element is in view, depends on an update, in this case scroll event callback
export const useElementInView = ( updater )=>{

	const viewElt = useRef();
	const [ show, setShow ] = useState( false );

	useEffect( ()=>{

		if ( viewElt.current && window.innerWidth < 992 ) {

			const rect = viewElt.current.getBoundingClientRect();
			const inView = rect.top < window.innerHeight && rect.bottom < window.innerHeight && rect.bottom > 0;
			setShow( inView );

		}

	}, [ updater ] );

	return [ show, setShow, viewElt ];

};
