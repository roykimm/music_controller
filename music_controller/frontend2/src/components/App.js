import React , { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props);
    } 

    render (){
        return (
            <div>
                <h1>hih i</h1>
                <h1>hih 2323i</h1>
                <h1>hih i</h1> 

            </div>
        )
    }
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);