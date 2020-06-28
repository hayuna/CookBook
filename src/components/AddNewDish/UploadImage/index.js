import React, { useState, useRef } from 'react';
import clsx from 'classnames'
import './style.css'

const UploadImage = ({ onFileChosen }) => {
    const [imageSrc, setImageSrc] = useState('')
    const [loaded, setLoaded] = useState(false)
    const inputRef = useRef(null)

    const onDrop = e => {
        e.preventDefault();
        onFileChange(e, e.dataTransfer.files[0]);
    }

    const onFileChange = (e, file) => {
        file = file || e.target.files[0]
        const reader = new FileReader();

        if (!file) return;
        else if (!file.type.match(/image-*/)) return
        setLoaded(false)
        reader.onload = e => {
            setImageSrc(reader.result)
            setLoaded(true)
            onFileChosen(reader.result)
        }
        reader.readAsDataURL(file);
    }
    return (
        <label
            className={`uploader ${loaded && 'loaded'}`}
            onDrop={onDrop}
            style={{ marginLeft: '8px' }}>
            <img alt='temp' src={imageSrc} className={clsx({ 'loaded': loaded })} />
            <i className="icon icon-upload"></i>
            <input type="file" accept="image/*" onChange={onFileChange} ref={inputRef} />
        </label>
    )
}

export default UploadImage;
