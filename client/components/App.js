import React, { Component } from 'react';
import Row from './Row';
import GameList from './GameList';
import Leaders from './Leaders';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    event.preventDefault();
    console.log(this.state.value)
    await axios({
        method: 'post',
        url: 'http://localhost:3000/newFriend',
        data: {
            name: this.state.value
        }
    })
    .then(function (message) {
        console.log(message)
    })
    .catch(function (err) {
        console.log(err)
    })

    
  }

  render() {
    
    return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        );
    }
}
export default App;
