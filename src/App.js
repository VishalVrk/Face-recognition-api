/**
 * Name: Vishal Vaitheeswaran RK
 * Description: App.js 
 * Project: AI based face recognition
 * Dated: 05-04-2019
 */

import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import './App.css';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/facerecoginition/FaceRecognition';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
//import Clarifai from 'clarifai';

/*
 The line below are used for the particle js the changes made here will affect the particles
 it will increase or decrease the number of particles
 */
const particlesOptions ={
  particles:{
    number:{
      value:100,
      density: {
        enable:true,
        value_area:800
      }
    }
  }
}

/*
This is the API key for the clarifai 
*/
// const app = new Clarifai.App({
//   apiKey: '5f1ff4f2ab5845ad96effb16c2127e4c'
//  });

class App extends Component {
  constructor(){
    super();
    /**
     * Here the state is given 
     */
    this.state={
      input:'',
      imageUrl:'',
      route:'signin',
      isSignedIn:false
    }
  }


  onInputChange=(e)=>{
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    })
  }


  onButtonSubmit=()=>{
    console.log('click');
    
    this.setState({
      imageUrl: this.state.input
    })
  }

    onRouteChange=(routeAddress)=>{
      if(routeAddress==='signout'){
        this.setState({isSignedIn:false})
      }else if(routeAddress==='home')
      {
        this.setState({isSignedIn:true})
    }
      this.setState({route:routeAddress});
    }
    //The below code is for the predection model 

  //   app.models.predict("34ce21a40cc24b6b96ffee54aabff139","https://samples.clarifai.com/puppy.jpeg").then(
  // function(response) {
  //   // do something with response
  //   console.log(response);
  // },
  // function(err) {
  //   // there was an error
  // }



  render() {
    return (
      <div className="App">
        
        <Particles className='particles'
        params={particlesOptions}
        />        
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>

        {//Terniary operation condition for routing
          this.state.route==='home'?
        <div>
          <Logo/>
            <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>


        <FaceRecognition
        imageUrl={this.state.imageUrl}
      /> 
        </div>:
        (this.state.route==='signin'?
        <SignIn
          onRouteChange={this.onRouteChange}
        />
        :
        <Register 
        onRouteChange={this.onRouteChange}
        />
        )
      }
       
      
      </div>
    );
  }
}

export default App;



