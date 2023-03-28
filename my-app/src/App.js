import React from "react";
import { CarDetails } from "./CarDetails";

export default class App extends React.Component {

  render() {
    return (
    <div>
        <CarDetails initialInfo={
                    {
                        model: "Mercedes",
                        year: 2022,
                        color: "Black Opaque"
                    }
                } />
    </div>
    )
  }
}
