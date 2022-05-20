import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Headers from "../../components/Header/Header";
import { FeedButton, Details, HeadInfo, InfoCard, MovieGenre, Overview, Poster, MovieInfos } from "../../assets/styles/MovieInfo/MovieInfo"
import { IMG_API } from "../../constants/url";
import { getMovieDetail } from "../../services/getMovieById";
import FeedLogo from "../../assets/images/feed-logo.png";
import { getCast } from "../../services/getMovieCast";
import { CastCard, CastContainer, CastContent, CastTitle } from "../../assets/styles/MovieInfo/CastInfo";

const MovieDetail = () => {

  let params = useParams();
  const navigate = useNavigate();

  const [movieInfo, setMovieInfo] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getApiDetail = async () => {
      setMovieInfo(await getMovieDetail(params.id));
      setCast(await getCast(params.id));
    };

    getApiDetail();
  }, [params.id]);

  const information = movieInfo.map((item) => {
    const splitDate = item.release_date.split("-", 3);

    const year = splitDate[0];

    const mounth = splitDate[1];

    const day = splitDate[2];

    const genres = item.genres.map((gen) => {
      return <p key={gen.id}>{gen.name}</p>;
    });

    return (
      <InfoCard key={item.id}>
        <Poster>
          <img src={IMG_API + item.poster_path} alt="" />
        </Poster>
        <Details>
          <HeadInfo>
            <h1>{item.title} ({year})</h1>
            <MovieGenre>
              <p>{day}/{mounth}/{year} (BR){" "}</p>
              {genres}
            </MovieGenre>
            <p><span>{item.vote_average}</span> Avaliação dos usuários</p>
          </HeadInfo>
          <Overview>
            <h2>Sinopse</h2>
            <p>{item.overview}</p>
          </Overview>
          <div></div>
        </Details>
      </InfoCard>
    );
  });

  const castFilm = cast.slice(0, 8).map((c, i) => {
    return (
      <CastCard key={i}>
        <img src={IMG_API + c.profile_path} alt={c.name} />
        <h1>{c.name}</h1>
        <h2>{c.character}</h2>
      </CastCard>
    )
  });



  return (
    <div>
      <Headers />
        <FeedButton onClick={() => navigate("/")}>
          <img src={FeedLogo} alt="Button to go back to the feed" />
        </FeedButton>
        <main>
          <MovieInfos>
            {information}
          </MovieInfos>
          <CastContent>
            <CastTitle>
              <h1>Elenco original</h1>
            </CastTitle>
            <CastContainer>
              {castFilm}
            </CastContainer>
          </CastContent>
          <div></div>
          <div></div>
        </main>
    </div>
  );
};

export default MovieDetail;
