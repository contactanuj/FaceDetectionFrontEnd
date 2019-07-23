import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn} ) => {
    if (isSignedIn) {
      return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p className = 'f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Sign Out {isSignedIn}</p>
    </nav>
  );
  }
  else {
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p className = 'f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign In {isSignedIn}</p>
      <p className = 'f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register {isSignedIn}</p>
    </nav>
  );
  }

}

export default Navigation;
