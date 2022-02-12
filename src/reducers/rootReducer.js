
const initState = {
	items: []
};

const rootReducer = ( state = initState, action ) => {

	switch ( action.type ) {

		case 'LOAD_DATA':

			return {
				items: action.data.map( item =>{

					return item.children;

				} ).flat( 1 )
			};

		default:
			return state;

	}

};

export { rootReducer };
