import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Labex from "../../assets/labex.png"
import "./ListTrips.css"





export const ListTripsPage = () => {

    const [travels, setTravels] = useState([]);

    useEffect(()=> {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:danilo-silverio-moreira/trips"
        axios.get(url)
        .then(res => {
          setTravels(res.data.trips)
        })
        .catch(error => {
            console.log(error.data);
        })
    })
  
    const navigate = useNavigate() 
        const backToHome = ()=> {
            navigate("/")
        }
        const goToLogin = ()=> {
            navigate("/login")
        }
    
    const listOfTravels = travels.map((itens) => {
        return (
            <div>
                <div className="trip-container" key={itens.id}>
                    <div className="card-title">
                        <h1>Name:</h1>
                        <p>{itens.name}</p>
                    </div>
                    <div className="card-description">
                        <h2>Description:</h2>
                        <p>{itens.description}.</p>
                    </div>
                    <div className="trip-info">
                        <div className="card-info">
                            <h3>🪐 Planet:</h3>
                            <p>{itens.planet}</p>
                        </div>
                        <div className="card-info">
                            <h3>🕒 Duration:</h3>
                            <p>{itens.durationInDays} days</p>    
                        </div>
                        <div className="card-info">
                            <h3>📅 Date:</h3>
                            <p>{itens.date}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    })



    return (
        <div className="page-container">
            <header className="list-trip-header">
                <img className="logo" onClick={backToHome} src={Labex} alt="Site logo"/>
                <div>
                    <button className="button-go-back-to-home" onClick={goToLogin}>Login</button>
                </div>
            </header>
            <div  className="trips-display">{listOfTravels}</div>
        </div>
    )

}