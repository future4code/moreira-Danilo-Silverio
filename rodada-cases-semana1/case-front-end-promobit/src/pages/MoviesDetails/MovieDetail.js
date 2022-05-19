import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Details,
  FeedButton,
  HeadInfo,
  InfoCard,
  InformationField,
  MovieGenre,
  MovieInformation,
  Overview,
  Poster,
} from "../../assets/styles/MovieInfo/MovieInfo";
import Headers from "../../components/Header/Header";
import { IMG_API } from "../../constants/url";
import { getMovieDetail } from "../../services/getMovieById";
import FeedLogo from "../../assets/images/feed-logo.png"

const MovieDetail = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const getApiDetail = async () => {
      setMovieInfo(await getMovieDetail(params.id));
    };

    getApiDetail();
  }, [params.id]);

  console.log(movieInfo);

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
            <h1>
              {item.title} ({year})
            </h1>
            <MovieGenre>
              <p>
                {day}/{mounth}/{year} (BR){" "}
              </p>
              {genres}
            </MovieGenre>
            <p>
              <span>{item.vote_average}</span> Avaliação dos usuários
            </p>
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

  return (
    <div>
      <Headers />
      <FeedButton onClick={() => navigate("/")}>
        <img src={FeedLogo} alt="Button to go back to the feed" />
      </FeedButton>
      <InformationField>
        <MovieInformation>{information}</MovieInformation>
      </InformationField>
    </div>
  );
};

export default MovieDetail;
