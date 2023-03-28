import React, { useEffect, useState } from 'react'
import { useGitHubUser } from './useGitHubUser'

export default function GitHubUser({username}) {
    const {info, loading, error, getApi} = useGitHubUser(username)
    
    function handleFetch(){
      getApi(username)
  }

  return (
    <div>
      <button onClick={handleFetch}>Request!</button>
        <h1>The name is: {info && info.login}</h1>
        <p>ID: {info.id}</p>
        <h1>{loading && "Loading..."}</h1>
            <h1>{error}</h1>
    </div>
  )
}