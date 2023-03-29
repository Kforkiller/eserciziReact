import { useEffect, useState } from "react"

export function useGitHubUser(username){
let[info, setInfo] = useState({})
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

async function getApi (username) {
        setLoading(true)
        setError(null)
        try{
    const result = await fetch(`https://api.github.com/users/${username}`)
    const json = await result.json()
    if (result.status !== 200){
        setError("Invalid name or not found !")
    }
    setInfo(json) 
    }

    catch (error){
        setError("error found please retry")
        setInfo({})
    } 
    finally {
        setLoading(false)
    }
}

return { info, loading, error, getApi}
}