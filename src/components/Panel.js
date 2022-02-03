
const Panel = ( props )=>{
    const buttonGrid = ( props.video ) ? (
        <div className="btn-grid">
            <a href={`.${props.link}`} className="fs-5 text-white btn-cust bg-button text-center" rel="noopener noreferrer external">Play</a>
            <a href={`${props.video}`} className="fs-5 text-white btn-cust bg-button text-center" target="_blank" rel="noreferrer external">Video</a>
        </div>
    ) : (
        <a href={`.${props.link}`} className="fs-5 text-white btn-cust bg-button text-center" rel="noopener noreferrer external">Play</a>
    )
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 px-2 user-select-none">
            <div className="card bg-main blip">
                <h1 className="card-title text-white eunomia m-1 py-1">{props.title}</h1>
                <img className="img-fluid img-thumbnail bg-main" src={`${process.env.PUBLIC_URL}/resources/${props.img}`} alt=""/>

                <div className="card info-card text-white bg-main h-50 container-wide position-absolute bottom-0 p-2 mb-2 border-0">
                    <p className="card-text">{props.description}</p>
                    { buttonGrid }
                </div>
            </div>
        </div>
    )
}

export { Panel };