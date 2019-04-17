import React from 'react'

const FaceRecognition=({imageUrl})=> {
  return (
    <div className='center'>
    <div className='absolute mt2'>
    <img alt='' src={imageUrl} style={{width:'500px',height:'auto'}}/>
    </div>
    </div>
  )
}
export default FaceRecognition;