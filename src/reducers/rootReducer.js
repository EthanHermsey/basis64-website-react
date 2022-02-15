
const initState = {
	items: []
};

const rootReducer = ( state = initState, action ) => {

	switch ( action.type ) {

		case 'LOAD_DATA':

			return { items: action.data };

		default:
			return state;

	}

};

export { rootReducer };
