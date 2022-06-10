import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";


export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Cards />
        </div>
    )
}