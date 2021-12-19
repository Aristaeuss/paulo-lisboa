import React from 'react';
import { Component } from 'react/cjs/react.development';

class Language extends Component {

    constructor(props){
        super(props)

        this.state = {
            language: 'pt'
        }
    }

    clickHandler() {
        if(this.state.language === 'pt'){
            this.setState({
                language: 'en'                
            }) 
        } else {
            this.setState({
                language: 'pt'                
            })
        }    
    }

    render() {
        return (
            <>
            <div className="third-button">
                <button onClick={() => this.clickHandler()}>{this.state.language}</button>
            </div>
            </>
        )
    }
}

export default Language
