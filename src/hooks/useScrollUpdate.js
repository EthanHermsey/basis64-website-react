import { useRef, useState, useLayoutEffect } from 'react';

//hook that return a reactive value that changes when the page is scrolled
export const useScrollUpdate = ()=>{

	const eltRef = useRef();
	const [ scrollUpdate, setScrollUpdate ] = useState( false );

	useLayoutEffect( ()=>{

		eltRef.current.addEventListener( 'scroll', ()=>{

			setScrollUpdate( c => ! c );

		} );

	}, [ eltRef ] );

	return [ scrollUpdate, eltRef ];

};
