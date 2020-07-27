import React from 'react';

const Movie = (props) => {

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-Light">
                    {
                        props.image == null ? <img src={`http`} alt="card image" style={{width : "100%",height : 350}}></img> : 
                        <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width : "100%",height : 350}} ></img>
                    }
                </div>
                <div className="card-content">
                    <p>
                        <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Movie;