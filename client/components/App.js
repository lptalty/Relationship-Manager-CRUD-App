import React, { Component } from 'react';
import Row from './Row';
import GameList from './GameList';
import Leaders from './Leaders';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        friendName: '',
        friendBirthday: '',
        friendFavoriteColor: ''
    }
  }
  
  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  //async
   handleSubmit = async (event) => {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    event.preventDefault();
    console.log(this.state)
    await axios({
        method: 'post',
        url: 'http://localhost:3000/newFriend',
        data: {
            friendName: this.state.friendName,
            friendBirthday: this.state.friendBirthday,
            friendFavoriteColor: this.state.friendFavoriteColor
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
    const {friendName, friendBirthday, friendFavoriteColor} = this.state
    return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <div>
                        <input type="text" 
                        name="friendName" 
                        value={friendName} 
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" 
                        name="friendBirthday" 
                        value={friendBirthday}
                        onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" 
                        name="friendFavoriteColor" 
                        value={friendFavoriteColor}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type ='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
export default App;
