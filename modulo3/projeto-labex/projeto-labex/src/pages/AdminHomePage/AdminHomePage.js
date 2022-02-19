import React from "react";
import { useNavigate } from "react-router-dom";
import Labex from "../../assets/labex.png"
import axios from "axios";
import { useState, useEffect } from "react";
import "./ListTripsAdmin.css"




export const AdminHomePage = () => {


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

    const deleteTrip = (id) => {
        const headers = { auth: localStorage.getItem("token")}
            
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:danilo-silverio-moreira/trips/:${id}`, headers)
        .then((res)=> {
            setTravels(res.data)
            alert(`Your trip called ${travels.name} has been successfully created!`)
        })
        .catch((error)=> {
            console.log(error.response)
        })
    }


    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate("/login")
    };

    const backToHome = ()=> {
        navigate("/")
    }

    const goToTripDetails = ()=> {
        navigate("/admin/trips/details")
    }

    const createTrip = ()=> {
        navigate("/admin/trips/create")
    }
    
    const listOfTravels = travels.map((itens) => {
        return (
            <div key={itens.id}>
                <div className="admin-trip-container">
                    <div className="admin-card-title">
                        <h1>Name:</h1>
                        <p>{itens.name}</p>
                    </div>
                    <div className="admin-card-description">
                        <h2>Description:</h2>
                        <p>{itens.description}.</p>
                    </div>
                    <div className="admin-trip-info">
                        <div className="admin-card-info">
                            <h3>🪐 Planet:</h3>
                            <p>{itens.planet}</p>
                        </div>
                        <div className="admin-card-info">
                            <h3>🕒 Duration:</h3>
                            <p>{itens.durationInDays} days</p>    
                        </div>
                        <div className="admin-card-info">
                            <h3>📅 Date:</h3>
                            <p>{itens.date}</p>
                        </div>
                    </div>
                    <div className="go-to-details" >
                        <button type="button" onClick={goToTripDetails}> ➕ See more</button>
                        <button type="button" onClick={deleteTrip}> 🗑 Delete</button>
                    </div>     
                </div>
            </div>
            
        )
    })

    return (
        <div className="admin-page-container">
            <header className="admin-list-trip-header">
                <img className="logo" onClick={backToHome} src={Labex} alt="Site logo"/>
                <div>
                    <button className="button-header-create" onClick={createTrip}>Create Trip</button>
                    <button className="button-header" onClick={goToLoginPage}>Log Out</button>
                </div>
            </header>
            <div className="admin-trips-display">{listOfTravels}</div>
        </div>
    )

}