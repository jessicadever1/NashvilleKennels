import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    // const [ employees, getEmployees ] = useContext(EmployeeContext)
    // const [ animals, getAnimals ] = useContext(AnimalContext)

    const history = useHistory()
    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
        // .then(getEmployees)
        // .then(getAnimals)
    }, [])


    return (
        <div className="locations">
            <h2>Locations</h2>
                <button onClick={() => {history.push("/locations/create")}}>
                    Add Location
                </button>
                {console.log("LocationList: Render", locations)}
                {
                    locations.map(location => {
                    // const copyOfEmployeeList = [ ...employees ]
                    // const copyOfAnimalList = [ ...animals ]
                    return <LocationCard key={location.id} location={location}  />
                    })
                }
        </div>
    )
}