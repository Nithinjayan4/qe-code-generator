
import './App.css';
import { useState } from 'react';
import { generateQrCode } from './generatorQrCode';

function App() {
   const [qrData,setQrData] = useState('example.com')
 const [qrSize, setQrSize] = useState('200x200')//
  return (
    <div className="App-container">
      <h1 className='app-title'> QR code Generator </h1>
      <div className='input-container'>
        <label className='input-label'>Qr Url:</label>
        <input
        type="text"
        value={qrData}
        onChange={(e)=>setQrData(e.target.value)}
        />
      </div>
      <div>
        <label>Qr size :</label>
        <input
        type="text"
        value={qrSize}
        onChange={(e)=> setQrSize(e.target.value)}

        />
      </div>
      <div>
        <img src={generateQrCode(qrData,qrSize) } alt='qr-code'/>
      </div>
    </div>
  );
}

export default App;
