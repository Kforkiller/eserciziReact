import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGitUser } from "./ShowGitUser";
import { NotFound } from "./NotFound";
import { GithubUserList } from "./GitHubUserList";

export function App() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users/Kforkiller">User</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Antonio" age={24} />} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/users" element={<GithubUserList />}>
                  <Route index element={<h2>Add a user and select it</h2>} />
                    <Route path=":username" element={<ShowGitUser />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}