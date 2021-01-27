import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {

    const { getLocationById } = useContext(LocationContext)
    const [ location, setLocation ] = useState({
        employees: [],
        animals: []
    })
    const {locationId} = useParams()
    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
            setLocation(response)
        })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <div className="location__employees">Employees: {location.employees.map(employee => employee.name).join(", ")}</div>
            <div className="location__animals">Pets: {location.animals.map(animal => animal.name).join(", ")}</div>
        </section>
    )
}


/*

<div className="location__animals">Pets: {location.animal?.name}</div>
*/