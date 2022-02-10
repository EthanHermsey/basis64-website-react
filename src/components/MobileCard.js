import { ButtonGrid } from './ButtonGrid';

//Return a card form for mobile platform
const MobileCard = ( props )=>{

    return (
        <div className="card border-cust bg-main">
            <h1 className='text-white eunomia ms-1 mt-2'>{props.title}</h1>
            <img className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${props.img}`} alt=""/>
            <p className='text-white ms-2 py-2'>{props.description}</p>
            < ButtonGrid {...props}/>
        </div>
    )

}

export { MobileCard };