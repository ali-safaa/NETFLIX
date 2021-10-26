import React, { useState, useEffect } from 'react'
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer";
import axios from './axios';
function Row(props) {
    const {title, fetchUrl, LargeRow} = props;
    const [movies, setMovies] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData(){
            const responce = await axios.get(fetchUrl)
            setMovies(responce.data.results)
        }
        fetchData()
      },[fetchUrl])

      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
       };
       const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams (new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            }).catch((error) => console.log(error))
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies && movies.map(movie => (
               <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${LargeRow && "row__posterLarge"}`} src={`${base_url}${LargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
