import React from "react"
import { AnimalList } from "../animal/AnimalList"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__employeeCount">{location.employees.length} employees</div>
        <div className="location__animalCount">{location.animals.length} animals</div>
    </section>
)


//<address className="location__address">{location.address}</address>