
import '../styles/ButtonGrid.scss';

//Returns a grid with a link and optional video
const ButtonGrid = ( props )=>{
    
    return ( props.video ) ? (
        <div className="btn-grid container-wide">
            <a href={`.${props.link}`} className="fs-5 py-1 text-white btn-cust bg-button text-center" rel="noopener noreferrer external">Play</a>
            <a href={`${props.video}`} className="fs-5 py-1 text-white btn-cust bg-button text-center" target="_blank" rel="noreferrer external">Video</a>
        </div>
    ) : (
        <div className="btn-grid container-wide">
            <a href={`.${props.link}`} className="fs-5 py-1 text-white btn-cust-fw bg-button text-center" rel="noopener noreferrer external">Play</a>
        </div>
    )

}

export { ButtonGrid };