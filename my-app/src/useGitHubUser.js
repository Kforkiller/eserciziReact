import { useEffect, useState } from "react"

export function useGitHubUser(username){
let[info, setInfo] = useState({})

async function getApi (username) {
    const result = await fetch(`https://api.github.com/users/${username}`)
    if (result.status === 200){
        const json = await result.json()
    setInfo(json) 
    }
}

useEffect(() => {
    getApi(username)
}, [username])

return info
}