import React, { Component } from 'react';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class Friend extends Component {

  //good for establishing new property
  constructor(props) {
    super(props);
    
  };
  

  render() {
    return (
      <div style={styles.container} class = 'FeedItem'>
       <div>Name: {this.props.friendProfile.friendName}</div>
       <div>Birthday: {this.props.friendProfile.friendBirthday} </div>
       <div>Favorite Color: {this.props.friendProfile.friendFavoriteColor} </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black',
    height: '100%',
    width: '100%',
    flex: 1,
  },
};

export default Friend;
