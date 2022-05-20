import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL, IMG_API } from "../../constants/url";
import { GuideContainer, FilterGuide, GenreNavigation } from "../../assets/styles/Guide/GuideNavigation";
import { Catalog, MovieCard } from "../../assets/styles/Catalog/Catalog";
import Headers from "../../components/Header/Header";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { Footer } from "../../assets/styles/Pagination/Pagination";
import { useNavigate } from "react-router-dom";


const MovieFeed = () => {

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

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
    return <button key={genre.id}>{genre.name}</button>
  });
  const movieCatalog = movies.map((movie) => {
    return (
      <MovieCard key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
          <img src={IMG_API + movie.poster_path} alt={movie.title}/>
          <p>{movie.vote_average}</p>
          <h3>{movie.title}</h3>
          <h4>{movie.release_date}</h4>
      </MovieCard>
    )
    });

  return (
    <div>
      <Headers/>
      <main>
        <GuideContainer>
          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já</h1>
          <FilterGuide>
            <h2>Filtre por:</h2>
            <GenreNavigation>
              {movieGenres}
            </GenreNavigation>
          </FilterGuide>
        </GuideContainer>
        <Catalog>
          {movieCatalog}
        </Catalog>
      </main>
      <Footer>
        <CustomPagination setPage={setPage}/>
      </Footer>
    </div>
  )
};

export default MovieFeed;