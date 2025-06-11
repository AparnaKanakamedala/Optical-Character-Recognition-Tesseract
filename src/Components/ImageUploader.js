import './Imageuploader.css';
const ImageUploader = ({setSelectedImage}) =>{

const handleUpload = (event) => {
    const image = event.target.files[0];
    const imageURL = URL.createObjectURL(image);
    setSelectedImage(imageURL);
}
return(   
<div>
    <input type = "file" accept="image/*" onChange={handleUpload} />
    <br/>
</div>
);
};

export default ImageUploader;