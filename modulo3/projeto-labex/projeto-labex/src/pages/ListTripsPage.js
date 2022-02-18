import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





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
    
    const listOfTravels = travels.map((itens) => {
        return (
            <div key={itens.id}>
                <h1>{itens.name}</h1>
                <h2>{itens.description}</h2>
                <h3>{itens.planet}</h3>
                <h3>{itens.durationInDays}</h3>
                <h3>{itens.date}</h3>
            </div>
        )
    })



    return (
        <div>
            <p>ListTripsPage</p>
            <div>{listOfTravels}</div>
            <button onClick={backToHome}>Back</button>
        </div>
    )

}