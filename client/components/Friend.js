import React, { Component } from 'react';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class Friend extends Component {

  //good for establishing new property
  constructor(props) {
    super(props);
    
  };
  

  render() {
    return (
      <div style={styles.container}>
       <div>Name: {this.props.friendProfile.friendName}</div>
       <div>Birthday: {this.props.friendProfile.friendBirthday} </div>
       <div>Favorite Color: {this.props.friendProfile.friendFavoriteColor} </div>
       <div>Favorite Food: {this.props.friendProfile.friendFavoriteFood} </div>
       <div>Current City: {this.props.friendProfile.friendCurrentCity} </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    height: '100%',
    width: '100%',
    flex: 1,
    padding: '20px'
  },
};

export default Friend;
