import React, { Component } from 'react';
import axios from 'axios'

class SingleArtistView extends Component {
    state = {
    artists: []
}

componentDidMount () {

//inititiate API call to RAILS 
// When succesfful, update the state
}
getAllArtists = async ()=> {
 const response = await axios.get('/api/artists')
 this.setState({artists: response.data.artists})

}
render() {
    return (
        <div>
          
            {this.state.artists.map(artist =>{
                return (
                    <div key={artist.id}>
                    {artist.name}
                    </div>
                )
            })}
        </div>
    );
}
}
export default SingleArtistView;


//get all artists from the rails api 
// want to show all the artists once its fetched
//  users soudl be able to click on the artist and visit the single user artist page. 