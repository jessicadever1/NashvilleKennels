import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalCard } from "./AnimalCard"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const history = useHistory()
    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)

    }, [])


    return (
        <div className="animals">
            <h2>Animals</h2>
                <button onClick={() => {history.push("/animals/create")}}>
                    Add Animal
                </button>
                {animals.map(animal => {
                    const owner = customers.find(c => c.id === animal.customerId)
                    return <AnimalCard key={animal.id}
                                customer={owner}
                                animal={animal} />
                })
    }</div>
    )
}