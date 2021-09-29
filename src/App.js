import React from 'react'
import Row from "./Row";
import req from './requests';
import Banner from './Banner';
import Nav from './Nav';
import "./App.css"
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGNALS"
      fetchUrl={req.fetchNetflixOriginals}
      LargeRow
      />
      <Row
      title="Trending Now"
      fetchUrl={req.fetchTrending}
      />
      <Row
      title="TopRated"
      fetchUrl={req.fetchTopRated}
      />
      <Row
      title="ActionMovies"
      fetchUrl={req.fetchActionMovies}
      />
      <Row
      title="ComedyMovies"
      fetchUrl={req.fetchComedyMovies}
      />
      <Row
      title="RomaceMovies"
      fetchUrl={req.fetchRomaceMovies}
      />
      <Row
      title="HorrorMovies"
      fetchUrl={req.fetchHorrorMovies}
      />
      <Row
      title="Documentaries"
      fetchUrl={req.fetchDocumentaries}
      />
    </div>
  )
}

export default App
