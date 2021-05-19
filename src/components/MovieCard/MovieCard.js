import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    } 

    render(){
        const { original_title, release_date, id } = this.props
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dd073e56f8e18f35e55f427502bbfabc`)
            .then(res => res.json())
            .then(res => console.log("DEETS",res))
        console.log('each movie', this.props, id)
        return(
            <h1 className='movieCard'>{original_title} ({release_date.slice(0,4)})</h1>
        )
    }
}

export default MovieCard;