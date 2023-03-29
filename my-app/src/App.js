import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Antonio" age={24} />} />
                <Route path="/counter" element={<Counter/>} />
            </Routes>
        </div>
    )
}