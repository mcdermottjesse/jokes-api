import axios from 'axios'

import { useState } from "react";

const GetJoke = () => { //this is the class component? use this for guitar api

  const [joke, setJokeOne] = useState("");

const renderJoke = () => {
  axios.get("https://api.chucknorris.io/jokes/random").then(
    (response) => {
  setJokeOne(response.data.value)

  })
}

  return (
    <div>
      <button onClick={renderJoke}>Get Joke</button>
      {joke}
    </div>
  )
}

export default GetJoke