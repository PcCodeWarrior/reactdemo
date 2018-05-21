import React, {Component} from 'react';
import './App.css';
import Panels from './components/Panels';
import axios from "axios/index";


class App extends Component {

    state = {panels: [
            {id: 'Left', name:'Left'},
            {id: 'Middle', name:'Middle'},
            {id: 'Right',name:'Right'},
            {id: 'Bottom',name:'Bottom'}
    ]};


    changeVal = (index) => {
        const current =this.state.panels[index];
        axios.get("https://talaikis.com/api/quotes/random/ ")
            .then(response => {
                current.name=response.data.author;
                this.setState(this.state.panels);
            })
            .catch(error =>{console.log(error);
            });
    };

render()
{
    return (
        <div className="App">
            <Panels p={this.state.panels} cv={this.changeVal}/>
        </div>
    );
}
}

export default App;
