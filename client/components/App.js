import React, { Component } from 'react';
// import Row from './Row';
// import GameList from './GameList';
import Friend from './Friend';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        friendName: '',
        friendBirthday: '',
        friendFavoriteColor: '',
        friendFavoriteFood: '',
        friendCurrentCity: '',
        contacts: []
    }
  }
  
  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

   handleSubmit = async (event) => {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    // event.preventDefault();
    console.log(this.state)
    try {
        console.log('attempting to post with axios')
        await axios({
            method: 'post',
            url: 'http://localhost:3000/newFriend',
            data: {
                friendName: this.state.friendName,
                friendBirthday: this.state.friendBirthday,
                friendFavoriteColor: this.state.friendFavoriteColor,
                friendFavoriteFood: this.state.friendFavoriteFood,
                friendCurrentCity: this.state.friendCurrentCity
            }
        })    
    } catch (error) {
        console.log(error)
    }
  }

  componentDidMount = async () => {

    console.log('trying to render friends on mount')
    try {
        const allFriends = await axios.get('http://localhost:3000/data');
    
        console.log('entered into the allFriends await call')
        this.setState({contacts: []})
        const {contacts} = this.state

        allFriends.data.map(friend => {
            let newFriend = {
                friendName: `${friend.friendName}`,
                friendBirthday: `${friend.friendBirthday}`,
                friendFavoriteColor: `${friend.friendFavoriteColor}`,
                friendFavoriteFood: `${friend.friendFavoriteFood}`,
                friendCurrentCity: `${friend.friendCurrentCity}`,
            }
            contacts.push(newFriend)
        })
        
        this.setState({contacts: contacts})
        console.log(this.state)

    } catch (error) {
        console.log(error)
    }
  }
  handleSeeAllFriends = async (event) => {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    console.log('handleSeeAllFriends accessed')
    event.preventDefault();
    try {
        const allFriends = await axios.get('http://localhost:3000/data');
    
        console.log('entered into the allFriends await call')
        this.setState({contacts: []})
        const {contacts} = this.state

        allFriends.data.map(friend => {
            let newFriend = {
                friendName: `${friend.friendName}`,
                friendBirthday: `${friend.friendBirthday}`,
                friendFavoriteColor: `${friend.friendFavoriteColor}`,
                friendFavoriteFood: `${friend.friendFavoriteFood}`,
                friendCurrentCity: `${friend.friendCurrentCity}`,
            }
            contacts.push(newFriend)
        })
        
        this.setState({contacts: contacts})
        console.log(this.state)

    } catch (error) {
        console.log(error)
    }
  }

  render() {
    const {friendName, friendBirthday, friendFavoriteColor, friendFavoriteFood, friendCurrentCity} = this.state
    const friendProfiles = []

    for (let i = 0; i < this.state.contacts.length; i++) {
        friendProfiles.push(<Friend key = {i} friendProfile={this.state.contacts[i]} />)
    }
    return (
            <div id = 'maincontainer'>
                <h1>Friendship Manager</h1>
                <div id="submitBtns">
                <form onSubmit ={this.handleSubmit}>
                    <div>
                        <input type="text" 
                        name="friendName" 
                        value={friendName} 
                        placeholder="Name"
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" 
                        name="friendBirthday" 
                        value={friendBirthday}
                        placeholder="Birthday"
                        onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" 
                        name="friendFavoriteColor" 
                        value={friendFavoriteColor}
                        placeholder="Favorite Color"
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" 
                        name="friendFavoriteFood" 
                        value={friendFavoriteFood}
                        placeholder="Favorite Food"
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" 
                        name="friendCurrentCity" 
                        value={friendCurrentCity}
                        placeholder="Current City"
                        onChange={this.changeHandler}/>
                    </div>
                    <button type ='submit'>Submit</button>
                </form>
                </div>
                <div id = 'seeFriendsBtn'>
                    <form onSubmit ={this.handleSeeAllFriends}>
                        <button type ='submit'>See All Friends</button>
                    </form>
                </div>
                <div style={styles.container} id="feed">
                    {friendProfiles}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
    //   border: '1px black solid',
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    //   padding: '10px',
      justifyContent: 'center',
    //   position: 'absolute'
    },
  };
  
export default App;
