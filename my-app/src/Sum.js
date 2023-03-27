import React from 'react'

export default function Sum({array = [10,5]}) {
  return (
    <div>
        <h1>{array.reduce((a, b) => a + b)}</h1>
    </div>
  )
}
