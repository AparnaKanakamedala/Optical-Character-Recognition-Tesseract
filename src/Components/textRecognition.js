import React, { useEffect, useState } from 'react';
// import ImageUploader from './ImageUploader';
import { RotatingLines } from 'react-loader-spinner';
import Tesseract from "tesseract.js";

 function Loader() {
    return(
    <RotatingLines 
    width='100'
    visible = {true}
    />
    )
};
const TextRecognition = ({selectedImage}) => {
    const [recognizedText, setRecognizedText] = useState('');
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        const recognizeText = async () => {
            if (selectedImage) {
                setisLoading(true);
                const result = await Tesseract.recognize(selectedImage);
                setRecognizedText(result.data.text);
                setisLoading(false);
                
            }
        };
        recognizeText();
    }, [selectedImage]
    );
    return(
        <div>
            
            {isLoading ? <Loader/> :<h2>Recognized Text</h2>}
            <p>{recognizedText}</p>
        </div>
    );
};
export default TextRecognition;