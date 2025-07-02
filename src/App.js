import './App.css';
import ImageUploader from './Components/ImageUploader';
import TextRecognition from './Components/textRecognition';
import { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      
      <header className="App-header">
       
        <h2>
          Optical Character Recognition....
        </h2>
        <ImageUploader setSelectedImage = {setSelectedImage}/>
        <TextRecognition selectedImage = {selectedImage}/>
      </header>

    </div>
  );
}

export default App;
