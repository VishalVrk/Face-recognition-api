import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm=({onInputChange,onButtonSubmit})=> {
  return (
      <div>
          <div>
      <p className="pa3" style={{color:'white'}}>
        {'This Magic Monkey will detect faces in your pictures. Git it a try'}
      </p>
    </div>
    <div className="center">
    <div className="pa4 br3 shadow-5 center form ">
    <input className="f4 pa2 w-70 center" type='tex'onChange={onInputChange}/>
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-navy" onClick={onButtonSubmit}>Detect</button>
    </div>
    </div>
      </div>
  )
}
export default ImageLinkForm;