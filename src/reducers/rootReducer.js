
const initState = {
    items: []
}

const rootReducer = ( state = initState, action ) => {
    switch ( action.type ){

        case 'LOAD_DATA':
            
            const flatData = action.data.map( item =>{
                return item.children;
            }).flat(1);

            return {
                items: flatData
            }

        default:
            return state;
            
    }
}

export { rootReducer };