import React, { useEffect, useState } from 'react';
//import {add, init} from "video-edit"
import init, {add} from "video-edit"

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(11231, 1));
    })
  }, [])

  return (
    <div>
      <h1>Agalar bu normal mi</h1>
      <h1>Sum: {ans}</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;