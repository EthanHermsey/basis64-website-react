import { useRef, useState, useLayoutEffect } from 'react';

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
