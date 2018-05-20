import React, {Component} from 'react';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';
import Middle from './components/Middle';
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
            <Left location={this.state.l} cv={this.chargeVal}/>
            <Middle location={this.state.m}  cv={this.chargeVal}/>
            <Right location={this.state.r}  cv={this.chargeVal}/>
        </div>
    );
}
}

export default App;
