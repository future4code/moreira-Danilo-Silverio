import React, { useEffect, useState } from "react";
import axios from "axios";
import { GuideContainer, NavigationGenre, Title } from "../../assets/styles/Movies/Guide/GuideNavigation";
import Headers from "../../components/Header/Headers";
import { API_KEY, BASE_URL, IMG_API } from "../../constants/url";
import { Catalog, MovieCard, Vote } from "../../assets/styles/Movies/Catalog/Catalog";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { PaginationField } from "../../assets/styles/Movies/Pagination/Pagination";

const MovieFeed = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getGenres = () => {
    axios
      .get(`${BASE_URL}genre/movie/list${API_KEY}&language=pt-BR&page=${page}`)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const getMovies = () => {
    axios.get(`${BASE_URL}movie/popular${API_KEY}&language=pt-BR&page=${page}`)
    .then((response) => {
      setMovies(response.data.results)
      console.log(response.data)
    })
    .catch((error) => {
      alert(error.message)
    })
  };

  useEffect(() => {
    getGenres();
    getMovies();
  }, [page]);

  const movieGenres = genres.map((genre) => {
    return <button key={genre.id}>{genre.name}</button>;
  });

  const movieCatalog = movies.map((movie) => {
    return (
      <MovieCard key={movie.id}>
           <img src={IMG_API + movie.poster_path} alt={movie.title} />
        <Vote>
            <p>{movie.vote_average}</p>
        </Vote>
        <div>
          <h3>{movie.title}</h3>
          <h4>{movie.release_date}</h4>
        </div>
      </MovieCard>
    )
  });

  return (
    <div>
      <Headers />
      <GuideContainer>
        <Title>
          <h1>
            Milhões de filmes, séries e pessoas para descobrir. Explore já!
          </h1>
        </Title>
        <NavigationGenre>
          <h2>Filtre por:</h2>
          {movieGenres}
        </NavigationGenre>
      </GuideContainer>
      <Catalog>
        {movieCatalog}
      </Catalog>
      <PaginationField>
        <CustomPagination setPage={setPage}/>
      </PaginationField>
    </div>
  );
};

export default MovieFeed;
