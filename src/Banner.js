import React, { useState, useEffect } from 'react'
import "./Banner.css"
import axios from './axios';
import req from './requests';

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        async function fetchData(){
            const responce = await axios.get(req.fetchNetflixOriginals)
            setMovie(responce.data.results [
                Math.floor(Math.random() * responce.data.results.length)
            ])
        }
        fetchData()
      },[])
      console.log(movie)
      function truncate(str, n) {
          return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    return (
        <header className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_title}</h1>
                <button className="banner__buttons">Play</button>
                <button className="banner__buttons">My List</button>
                <p className="banner__descrpition">{truncate(movie?.overview, 150)}</p>
            </div>
            <div className="benner__fadeBottom"/>
        </header>
    )
}

export default Banner
