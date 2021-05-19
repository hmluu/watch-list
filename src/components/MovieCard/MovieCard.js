import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        console.log('HOA', this.props)
        return(
            <h1 className='movieCard'>{this.props.original_title}</h1>
        )
    }
}

export default MovieCard;