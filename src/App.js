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

    chargeLeft = () => {
        axios.get("https://talaikis.com/api/quotes/random/ ")
            .then(response => {
                // alert(response);
                this.setState({l: response.data.author})
            })
            .catch(error =>{console.log(error);
            });


    };

    chargeMiddle = () => {
        axios.get("https://talaikis.com/api/quotes/random/ ")
            .then(response => {
                // alert(response);
                this.setState({m: response.data.author})
            })
            .catch(error =>{console.log(error);
            });
    };

    chargeRight = () => {
        axios.get("https://talaikis.com/api/quotes/random/ ")
            .then(response => {
                // alert(response);
                this.setState({r: response.data.author})
            })
            .catch(error =>{console.log(error);
            });
    };




render()
{
    return (
        <div className="App">
            <Left location={this.state.l} cv={this.chargeLeft}/>
            <Middle location={this.state.m}  cv={this.chargeMiddle}/>
            <Right location={this.state.r}  cv={this.chargeRight}/>
        </div>
    );
}
}

export default App;
