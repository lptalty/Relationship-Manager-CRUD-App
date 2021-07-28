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
        friendFavoriteColor: '',
        isLoading: true,
        contacts: []
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

  handleSeeAllFriends = async (event) => {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    event.preventDefault();
    try {
        const allFriends = await axios.get('http://localhost:3000/data');
        // console.log(allFriends.data)
        console.log('entered into the allFriends await call')
        // console.log(this.state)
        const {contacts} = this.state
        allFriends.data.map(friend => {

            // console.log(friend.friendName)
            // console.log(friend.friendBirthday)
            // console.log(friend.friendFavoriteColor)
            let newFriend = {
                friendName: `${friend.friendName}`,
                friendBirthday: `${friend.friendBirthday}`,
                friendFavoriteColor: `${friend.friendFavoriteColor}`,
            }
            contacts.push(newFriend)
        })
        this.setState({contacts: contacts})
        console.log(this.state)
        // const final = allFriends.json()
        // console.log(final)
    } catch (error) {
        console.log(error)
    }
  }

  render() {
    const {friendName, friendBirthday, friendFavoriteColor} = this.state
    const {isLoading} = this.state;
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
                <form onSubmit ={this.handleSeeAllFriends}>
                    <button type ='submit'>See All Friends</button>
                </form>
                <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className='loader'></div>
                    <div className='icon'></div>

                </div>
            </div>
        );
    }
}
export default App;
