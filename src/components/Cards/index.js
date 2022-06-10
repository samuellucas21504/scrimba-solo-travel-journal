import React from "react";
import "./styles.css";
import Card from "./Card";
import data from "../../mockups/data.js";


export default function Cards() {
    const cards = data.map((data, index) => {
        return (
            <>
                <Card
                    id={index}
                    {...data}
                />
                <hr className="cards--separation_line" />
            </>
        )
    })

    return (
        <div className="cards">
            {cards}
        </div>
    )
}