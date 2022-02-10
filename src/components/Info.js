import { useRef, useState } from "react";

//returns a information panel
//acepts title, description, video, link
const Info = ( props )=>{

    const infoBox = useRef();
    const [ show, setShow ] = useState(false);
    const toggleShow = ( v )=>{
        props.panelImg.current.classList.toggle( 'blip', v );
        setShow( v );
    }
    

    //buttongrid, show both or one (fullwidth) button
    const buttonGrid = ( props.video ) ? (
        <div className="btn-grid container-wide">
            <a href={`.${props.link}`} className="fs-5 text-white btn-cust bg-button text-center" rel="noopener noreferrer external">Play</a>
            <a href={`${props.video}`} className="fs-5 text-white btn-cust bg-button text-center" target="_blank" rel="noreferrer external">Video</a>
        </div>
    ) : (
        <div className="btn-grid container-wide">
            <a href={`.${props.link}`} className="fs-5 text-white btn-cust-fw bg-button text-center" rel="noopener noreferrer external">Play</a>
        </div>
    )

    //adaptive class for infobox
    const boxClass = "text-white h-100 " + ( ( props.toLeft ) ? 'place-right' : 'place-left') + ((show) ? ' shown' : '');

    //check if info needs to show when in view
    document.querySelector('.App').addEventListener('scroll', ()=>{
        if ( infoBox.current && window.innerWidth < 992 && window.innerWidth > 768 ){
            try{
                var rect = infoBox.current.getBoundingClientRect();
                if ( rect.top < window.innerHeight && rect.bottom < window.innerHeight && rect.bottom > 0){
                    toggleShow( true );
                } else {
                    toggleShow( false );
                }
            } catch {
                console.log( 'Scroll error. Do not do anything');
            }
            
        }
    })


    return (
        <div id="info-box" ref={infoBox} className={boxClass} onMouseEnter={()=>{toggleShow(true)}} onMouseLeave={()=>{toggleShow(false)}}>
            <div className="sizer"></div>
            <h1 className='w-100 text-white eunomia m-0 py-1'>{props.title}</h1>
            <div className="info-card bg-main">
                <p className="card-text container-wide text-left">{props.description}</p>
                { buttonGrid }
            </div>
        </div>
    )
}

export { Info };