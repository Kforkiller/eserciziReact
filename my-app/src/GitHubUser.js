import React, { useEffect, useState } from 'react'

export default function GitHubUser({username}) {
    let[info, setInfo] = useState({})

    async function getApi (username) {
        const result = await fetch(`https://api.github.com/users/${username}`)
        if (result.status === 200){
            const json = await result.json()
        setInfo(json) 
        console.log(json)}
    }

    useEffect(() => {
        getApi(username)
    }, [username])

  return (
    <div>
        <h1>The name is: {info.login}</h1>
        <p>ID: {info.id}</p>
    </div>
  )
}
