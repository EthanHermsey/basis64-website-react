import { useSelector } from 'react-redux';

// Returns an item from the store's items..
export const useGetItem = ( index )=>{

	return useSelector( ( state ) => {

		return state.items[ index ];

	} );

};
