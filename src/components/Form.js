import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {
           name: '',
           URL: ''
       }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        const {name, URL} = this.state;
        this.props.handleSubmit({name, URL});
        this.setState({name: '', URL: ''});
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <fieldset>
                    <label>
                    <p>Name</p>
                    <input type="text" onChange={
                        event => {this.setState({ name: event.target.value })}
                        }
                        value = {this.state.name}
                    />
                    <p>URL</p>
                    <input type="text" onChange={
                        event => {this.setState({ URL: event.target.value })}
                        }
                        value = {this.state.URL}
                    />
                    </label>
                </fieldset>

                <button 
                    type="submit"
                    onClick={event => this.onFormSubmit(event) }>
                        Submit
                </button>
            </form>
        )
    
    }
}

export default Form;
