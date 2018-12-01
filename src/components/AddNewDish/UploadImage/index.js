import React, { Component } from 'react';
import './style.css'

class UploadImage extends Component {
  state = {
    active: false,
    imageSrc: '',
    loaded: false
  }
  
  onDrop = e => {
    e.preventDefault();
    this.setState({ active: false });
    this.onFileChange(e, e.dataTransfer.files[0]);
  }
  onFileChange = (e, file) => {
    file = file || e.target.files[0]
    const reader = new FileReader();
    
    if (!file)return;
    else if(!file.type.match(/image-*/))return
    
    this.setState({ loaded: false });
    reader.onload = e => {
        this.setState({ 
            imageSrc: reader.result, 
            loaded: true 
        }); 
        this.props.onFileChosen(reader.result)
    }
    
    reader.readAsDataURL(file);
  }



  render() {
    const { loaded, active, imageSrc } = this.state
    const { activeColor, baseColor, overlayColor } = this.props
    const iconColor = active ? activeColor : loaded ? overlayColor : baseColor;
    return (
      <label 
        className={`uploader ${loaded ? 'loaded' : ''}`}
        onDrop={this.onDrop}
        style={{outlineColor: active ? activeColor : baseColor}}>
        
        <img alt='temp' src={imageSrc} className={loaded ? 'loaded' : ''}/>
        <i className="icon icon-upload" style={{ color: iconColor }}></i>
        <input type="file" accept="image/*" onChange={this.onFileChange} ref="input" />
      </label>
    )
  }
}

export default UploadImage;