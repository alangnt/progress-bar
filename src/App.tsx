import './App.css';
import ProgressBar from './components/ProgressBar';

import { useState } from "react";

function App() {
  const [progress, setProgress] = useState<number>(0)
  
  const updateProgress = () => {
    setProgress((prev: number): number => Math.min(prev + 10, 100));
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <button onClick={updateProgress}>Add Progress</button>
    </>
  )
}

export default App