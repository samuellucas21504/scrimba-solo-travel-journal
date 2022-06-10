import React from "react";
import "./styles.css";
import pin from "../../../images/pin.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="Location" className="card--picture" />
            <p className="card--information">
                <p className="card--information_details">
                    <img src={pin} alt="" />{props.location.toUpperCase()} <a href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <p className="card--information_text">
                    <h1>{props.title}</h1>
                    <div className="card--information_text_date bold">{props.startDate} - {props.endDate}</div>
                    <article>
                        {props.description}
                    </article>
                </p>
            </p>
        </div>
    )
}