import React from "react";
import { useNavigate } from "react-router-dom";
import Labex from "../../assets/labex.png"
import "./CreateTrip.css"
import { useState } from "react";
import axios from "axios";



export const CreateTripPage = () => {


    const [tripName, setTripName] = useState("");
    const [tripPlanet, setTripPlanet] = useState("");
    const [tripDate, setTripDate] = useState("");
    const [tripDescription, setTripDescription] = useState("");
    const [tripDuration, setTripDuration] = useState("");


    const createTrips=(()=> {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:danilo-silverio-moreira/trips"
        
        const body = {
            "name": tripName,
            "planet": tripPlanet,
            "date": tripDate,
            "description": tripDescription,
            "durationInDays": Number(tripDuration)
        }

        const headers = {
            headers:{
                "Content-Type":"application/json",
                auth: localStorage.getItem("token")
            }
        }    
        
        axios.post(url, body, headers)
        .then(res => {
            console.log(res.data)
          /* setTripName("res")
          setTripPlanet("")
          setTripDate("")
          setTripDescription("")
          setTripDuration("") */
            
        })
        .catch(error => {
            console.log(error.response);
        })
    }) 

    


    const navigate = useNavigate();

    const goToAdminListTrip = () => {
        navigate("/admin/trips/list")
    };

    const onChangeTripName = (event) => {
        setTripName(event.target.value)
    };

    const onChangeTripPlanet = (event) => {
        setTripPlanet(event.target.value)
    };

    const onChangeTripDate = (event) => {
        setTripDate(event.target.value)
    };

    const onChangeTripDescription = (event) => {
        setTripDescription(event.target.value)
    };

    const onChangeTripDuration = (event) => {
        setTripDuration(event.target.value)
    };

    return (
        <div className="create-page-container">
            <header className="create-page-header">
                <img className="logo" src={Labex} alt="Site logo"/>
                <button className="button-header-back" onClick={goToAdminListTrip}>Back</button>
            </header>
            <fieldset className="fieldset-create-trip">
                <form>
                    <div className="fieldset-header-create-trip">
                        <h1>Create</h1>
                        <p className="create-trip-description">
                            Our services are designed to give you a <span>unique experience</span> and the best way 
                            for this to happen is to create the trip that suits you best.</p>
                    </div>
                    <div className="create-trip-fields">
                        <label>Name</label>
                        <input 
                            type="text" 
                            placeholder="Type your trip's name"
                            value={tripName}
                            onChange={onChangeTripName}
                            pattern={".{5,}"}
                            title={"The name of your trip must have at least 5 letters"}
                        />
                        <label>Planet</label>
                        <select value={tripPlanet} onChange={onChangeTripPlanet}>
                        <option disabled value="">Choose the planet...</option>
                            <option>Mercury</option>
                            <option>Venus</option>
                            <option>Earth</option>
                            <option>Mars</option>
                            <option>Jupiter</option>
                            <option>Saturn</option>
                            <option>Uranus</option>
                            <option>Neptune</option>
                        </select>
                        <label>Date</label>
                        <input 
                            type="date" 
                            placeholder="Type your trip's name"
                            value={tripDate}
                            onChange={onChangeTripDate}
                        />
                        <label>Description</label>
                        <input 
                            type="text"
                            placeholder="Describe your trip"
                            value={tripDescription}
                            onChange={onChangeTripDescription}
                            pattern={".{30,}"}
                            title={"The trip description must have at least 30 letters"}
                        />
                        <label>Duration</label>
                        <input 
                            type="number"
                            placeholder="Enter the duration of your trip (days)"
                            value={tripDuration}
                            onChange={onChangeTripDuration}
                        />
                        <button onClick={createTrips}>Create</button>
                    </div>
                </form>
            </fieldset>
        </div>
    )

}