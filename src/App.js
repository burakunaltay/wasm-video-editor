import React, { useEffect, useState } from 'react';
import init, { add } from 'video-edit';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(11231, 1));
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Agalar bu normal mi</h1>
      <h1>Sum: {ans}</h1>
      <div className="mt-8">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
