
import { useRef } from 'react';
import { Info } from './AnimatedInfo';

//return card form for larger devices
const NormalCard = ( props )=>{
    const panelImage = useRef();
    return (
        <div className="card bg-main">
            <img ref={panelImage} className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${props.img}`} alt=""/>
            <Info {...props} panelImg={panelImage}/>
        </div>
    )

}

export { NormalCard };