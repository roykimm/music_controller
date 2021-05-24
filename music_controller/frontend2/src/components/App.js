import React , { Component } from 'react';
import { render } from 'react-dom';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
    } 

    render (){
        return (
            <div>
                <Alert dismissible variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p> 
                        Change this and that and try again. hi
                    </p>
                </Alert>
                <Button>hi2</Button>
            </div>
        )
    }
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);