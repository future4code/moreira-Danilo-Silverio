import React, { useEffect, useState } from "react";
import axios from "axios";
import Headers from "../../components/Headers/Headers";
import { API_KEY, BASE_URL, IMG_API } from "../../constants/url";
import { Catalog, GuideContainer, MovieCard, NavigationGenre, Title } from "../../assets/style/Home/HomeStyle";




const HomePage = () => {

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);


  const getGenres = () => {
    axios.get(`${BASE_URL}genre/movie/list${API_KEY}&language=pt-BR`)
    .then((response) => {
      console.log(response.data.genres)
      setGenres(response.data.genres)
    })
    .catch((error) => {
      alert(error.message)
    })
  };

  const getMovies = () => {
    axios.get(`${BASE_URL}movie/popular${API_KEY}&language=pt-BR`)
    .then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
    })
    .catch((error) => {
      console.log(error.message)
    })
  };

  useEffect(() => {
    getGenres();
    getMovies();
  }, [])

  const movieGenres = genres.map((genre) => {
    return <button key={genre.id}>{genre.name}</button>  
  });

  const movieCatalog = movies.map((movie) => {
    return (
      <MovieCard key={movie.id}>
        <img src={IMG_API + movie.poster_path} alt="asdas" />
        <>
          <h3>{movie.title}</h3>
          <h4>{movie.release_date}</h4>
        </>
      </MovieCard>
    )
  });
  
  return(
    <div>
      <Headers/>
      <GuideContainer>
        <Title>
          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</h1>
        </Title>
        <NavigationGenre>
          <h2>Filtre por:</h2>
          {movieGenres}
        </NavigationGenre>
      </GuideContainer>
      <Catalog>
        {movieCatalog}
      </Catalog>
    </div>
  )
};

export default HomePage;