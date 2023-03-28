import React, { useEffect, useState } from 'react'
import { useGitHubUser } from './useGitHubUser'

export default function GitHubUser({username}) {
    const info = useGitHubUser(username)

  return (
    <div>
        <h1>The name is: {info.login}</h1>
        <p>ID: {info.id}</p>
    </div>
  )
}