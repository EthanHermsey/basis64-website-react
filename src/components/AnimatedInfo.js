import React from "react";
import { ButtonGrid } from "./ButtonGrid";
import '../styles/AnimatedInfo.scss';

//returns a information panel
//acepts title, description, video, link
class Info extends React.Component{

    constructor( props ){
        
        super(props);
        this.infoBox = React.createRef();
        this.state = {
            show: false
        };

    }

    componentDidUpdate( prevProps ){

        if ( prevProps.scrollUpdate !== this.props.scrollUpdate ){

            if ( this.infoBox.current && window.innerWidth < 992){
                
                const rect = this.infoBox.current.getBoundingClientRect();
                if ( rect.top < window.innerHeight && rect.bottom < window.innerHeight && rect.bottom > 0){

                    this.toggleShow( true );

                } else {

                    this.toggleShow( false );

                }
                
            }

        }

    }

    toggleShow = ( v )=>{

        this.props.panelImg.current.classList.toggle( 'blip', v );
        this.setState( {...this.state, show: v } );

    }
    
    render(){

        //adaptive class for infobox
        const boxClass = "text-white h-100 " + ( ( this.props.toLeft ) ? 'place-right' : 'place-left') + ((this.state.show) ? ' shown' : '');

        return (
            <div id="info-box" ref={this.infoBox} className={boxClass} onMouseEnter={()=>{this.toggleShow(true)}} onMouseLeave={()=>{this.toggleShow(false)}}>
                <div className="sizer"></div>
                <h1 className='w-100 text-white eunomia m-0 py-1'>{this.props.title}</h1>
                <div className="info-card bg-main">
                    <p className="card-text container-wide text-left">{this.props.description}</p>
                    <ButtonGrid {...this.props} />
                </div>
            </div>
        )

    }

}


export { Info };