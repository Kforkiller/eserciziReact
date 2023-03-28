import React from "react";
import { FilteredList } from "./FilteredList";

export default function App () {
  const objs = [
    {
        name: "Arianna",
        id: 1,
        age: 31
    },
    {
        name: "Franco",
        id: 2,
        age: 0.5
    },

    {
        name: "Aristotele",
        id: 3,
        age: 19
    },
    {
        name: "Ermenegildo",
        id: 4,
        age: 20
    },
    {
        name: "Ponzio",
        id: 5,
        age: 12
    }
]
    return (
    <div>
        <FilteredList objs={objs}/>
    </div>
    )
  }
