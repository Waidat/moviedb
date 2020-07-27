import React from 'react';


const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{ cursor: 'pointer', paddingTop: 50 }}>
                <i className="fa fa-arrow-left">{}</i>
                <span style={{ marginLeft: 10 }}>Go back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    {
                        props.currentMovie.poster_path == null ?
                            <img src={"https://s3-ap-southease-1.amazonaws.com/upcode/start/default-image.jpg"} alt="Card image" style={{ width: "100%", height: 360 }}></img>
                            :
                            <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{ width: "100%", height: 360 }}></img>
                    }
                </div>
                <div className="col s12 m8">
                    <div className="container">
                        <p>{props.currentMovie.title}</p>
                        <p>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0,4)).join("/")}</p>
                        <p>{props.currentMovie.overview}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieInfo;