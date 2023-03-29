import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGitUser } from "./ShowGitUser";

export function App() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users/Kforkiller">User</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Antonio" age={24} />} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/users/:username" element={<ShowGitUser/>} />
            </Routes>
        </div>
    )
}