import { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from './components/Panel';

class App extends Component {
	render(){
		const itemPanels = this.props.items.map( ( item, index )=>{
            return (
                <Panel {...item} key={index} toLeft={!(index%2===0)} />
            )
        })

		return (		 
			<div className="App bg-main">
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

export default connect( mapStateToProps )(App);
