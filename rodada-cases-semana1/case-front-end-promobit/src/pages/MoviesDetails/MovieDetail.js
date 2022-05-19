import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headers from "../../components/Header/Header";
import { getMovieDetail } from "../../services/getMovieById";


const MovieDetail = () => {

    let params = useParams()
    
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
      const getApiDetail = async () => {
        setMovieInfo( await getMovieDetail(params.id));
      };
      
      getApiDetail();
    }, [params.id]);


    console.log(movieInfo)
    return (
        <div>
            <Headers/>
            Oi, sou o detalhe do filme que escolheu!
        </div>
    )
};

export default MovieDetail;