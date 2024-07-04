import './App.css'
import MaskImage from './components/MaskImage';
import { useState } from 'react';
import truck from './assets/truck.png'
function App() {
 
  const [percentage,setPercentage] = useState(0);







  return (
    <>
      {/* <div style={{width:'30%', height:'200px'}}>
      <MaskImage maskSource={truck} percentage={percentage} fillColor='skyblue' siluetheColor='#e0e0e0' />
      </div> */}

      <button style={{'padding': '10px'}}  onClick={() => setPercentage(percentage => percentage + 10)}></button>

      <div style={{width:'1000px',height:'400px'}}>
        <MaskImage maskSource={truck} percentage={'50%'} fillColor='red' siluetheColor='#e0e0e0'></MaskImage>
      </div>



    </>
  )
}

export default App
