import { useRef } from 'react';
import { Info } from './Info';

//returns a panel for an item
//accepts link, video, passthrough to Info
const Panel = ( props )=>{

    const panelImage = useRef();

    //pick mobile or bigger card
    let card;
    if ( window.innerWidth < 768) {
        
        //mobile card
        const buttonGrid = ( props.video ) ? (
            <div className="btn-grid container-wide">
                <a href={`.${props.link}`} className="fs-5 py-1 text-white btn-cust bg-button text-center" rel="noopener noreferrer external">Play</a>
                <a href={`${props.video}`} className="fs-5 py-1 text-white btn-cust bg-button text-center" target="_blank" rel="noreferrer external">Video</a>
            </div>
        ) : (
            <div className="btn-grid container-wide">
                <a href={`.${props.link}`} className="fs-5 py-1 text-white btn-cust-fw bg-button text-center" rel="noopener noreferrer external">Play</a>
            </div>
        )

        card = (
            <div className="card border-cust bg-main">
                <h1 className='text-white eunomia ms-1 mt-2'>{props.title}</h1>
                <img className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${props.img}`} alt=""/>
                <p className='text-white ms-2 py-2'>{props.description}</p>
                { buttonGrid }
            </div>
        ) 

    } else {

        //bigger card
        card = (
            <div className="card bg-main">
                <img ref={panelImage} className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${props.img}`} alt=""/>
                <Info {...props} panelImg={panelImage}/>
            </div>
        )
        
    }

    return (
        <div className="col-lg-6 col-md-8 col-sm-12 px-2 user-select-none mb-2">
            { card }
        </div>        
    )
}

export { Panel };