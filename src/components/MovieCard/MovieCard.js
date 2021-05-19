import React, { Component } from 'react';

class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=dd073e56f8e18f35e55f427502bbfabc')
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render(){
        return(
            <h1>
                Test
            </h1>
        )
    }
}

export default MovieCard;