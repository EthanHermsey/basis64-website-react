import React from 'react';
import { connect } from 'react-redux';
import { Panel } from './components/Panel';
import './styles/App.css';

//gets props from store
//loads a panel for each item
//capture scroll event, for auto animation. Pass to panel in props
//renders it to screen
class App extends React.Component {

    constructor( props ){
        
        super( props );
        this.appDiv = React.createRef();
        this.state = {
            scrollUpdate: true
        };
        
    }

    componentDidMount(){
        
        //scroll event, to check if animatedInfo needs to show when in view
        this.appDiv.current.addEventListener('scroll', ()=>{

            this.setState( { scrollUpdate: !this.state.scrollUpdate } );

        })

    }

    getPanels = () => {

        return this.props.items.map( ( item, index )=>{

            return (
                <Panel { ...{ ...item, toLeft: ( index%2===1 ), scrollUpdate: this.state.scrollUpdate } } key={index} />
            )

        })
    }

	render(){

	    const itemPanels = this.getPanels();

		return (		 
			<div className="App bg-main" ref={this.appDiv}>
                <h1 className=" text-white eunomia text-center mt-4 mb-0">BASIS64</h1>
				<div className="container-small mt-0">
                    <div className="row gy-5 mt-2">
					    { itemPanels }
                    </div>
				</div>
                <footer>
                    <a href="mailto:ethan@basis64.nl" target="_blank" rel="noreferrer">
                        <div id="email" className="bg-button text-black text-end pe-1">ethan@basis64.nl</div>
                    </a>
                    <a href="https://github.com/EthanHermsey?tab=repositories" target="_blank" rel="noreferrer">
                        <div id="git" className="bg-button text-black text-end pe-1">EthanHermsey</div>
                    </a>
                </footer>
			</div>
		);

	}

};

const mapStateToProps = ( state )=>{
	return{
        items: state.items
	};
}

export default connect( mapStateToProps )( App );
