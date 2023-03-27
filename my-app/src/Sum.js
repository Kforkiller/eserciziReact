import React from 'react'

export default function Sum({array}) {
  return (
    <div>
        <h1>{array.reduce((a, b) => a + b)}</h1>
    </div>
  )
}
