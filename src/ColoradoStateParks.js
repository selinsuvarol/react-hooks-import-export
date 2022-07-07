import React from "react";
import howManyParks from "./parks/howManyParks";

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
