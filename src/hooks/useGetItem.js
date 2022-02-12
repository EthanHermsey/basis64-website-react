import { useSelector } from 'react-redux';

export const useGetItem = ( index )=>{

	return useSelector( ( state ) => {

		return state.items[ index ];

	} );

};
