import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGitUser(){
    const { username } = useParams()
    return (
        <GitHubUser username={username} />
    )
}