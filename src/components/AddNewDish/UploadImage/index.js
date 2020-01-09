import React, { useState } from 'react';
import './style.css'

const UploadImage = ({ onFileChosen, activeColor, baseColor, overlayColor }) => {
    const [active, setActive] = useState(false)
    const [imageSrc, setImageSrc] = useState('')
    const [loaded, setLoaded] = useState(false)
  
    const onDrop = e => {
        e.preventDefault();
        setActive(false)
        onFileChange(e, e.dataTransfer.files[0]);
    }
  
    const onFileChange = (e, file) => {
        file = file || e.target.files[0]
        const reader = new FileReader();
    
        if (!file) return;
        else if(!file.type.match(/image-*/)) return
        setLoaded(false)
        reader.onload = e => {
            setImageSrc(reader.result)
            setLoaded(true)
            onFileChosen(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const iconColor = active ? activeColor : loaded ? overlayColor : baseColor;
    
    return (
        <label 
            className={`uploader ${loaded ? 'loaded' : ''}`}
            onDrop={onDrop}
            style={{outlineColor: active ? activeColor : baseColor, marginLeft: '8px'}}>
            <img alt='temp' src={imageSrc} className={loaded ? 'loaded' : ''}/>
            <i className="icon icon-upload" style={{ color: iconColor }}></i>
            <input type="file" accept="image/*" onChange={onFileChange} ref="input" />
        </label>
    )
}

export default UploadImage;
