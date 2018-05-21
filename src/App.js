import React, {Component} from 'react';
import './App.css';
import Panel from './components/Panel';

import axios from "axios/index";


class App extends Component {

    state = {
        l: 'Left',
        m: 'Middle',
        r: 'Right'
    };


    chargeVal = (val) => {
        axios.get("https://talaikis.com/api/quotes/random/ ")
            .then(response => {
                this.setState({[val]:response.data.author})
            })
            .catch(error =>{console.log(error);
            });
    };



render()
{
    return (
        <div className="App">
            <Panel location={this.state.l} cname={'Left'} cv={this.chargeVal}/>
            <Panel location={this.state.m} cname={'Middle'} cv={this.chargeVal}/>
            <Panel location={this.state.r} cname={'Right'} cv={this.chargeVal}/>
        </div>
    );
}
}

export default App;
