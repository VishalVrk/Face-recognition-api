import React from 'react'

const Navigation= ({onRouteChange, isSignedIn}) =>{
        if(isSignedIn){
            return( <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p className="f5 link dim black underline pa3 pointer" style={{color:'white'}}
            onClick={()=>onRouteChange('signout')}
            >Sign Out
            </p>
        </nav>)
        }
        else{ 
            return( <nav style={{display:'flex', justifyContent:'flex-end'}}>
            
            <p className="f5 link dim black underline pa3 pointer" style={{color:'white'}}
            onClick={()=>onRouteChange('signin')}>Sign In
            </p>

            <p className="f5 link dim black underline pa3 pointer" style={{color:'white'}}
            onClick={()=>onRouteChange('register')}>Register
            </p>
            </nav>)
           
    }
}
export default Navigation;