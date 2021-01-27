import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location }) => {
    return (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <div className="location__employeeCount">{location.employees.length} employees</div>
        <div className="location__animalCount">{location.animals.length} animals</div>
    </section>
)}


//<address className="location__address">{location.address}</address>