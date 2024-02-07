import React, {useState} from 'react';
import './styles/App.css';
import Scene from "./components/Scene";
import {IOSPermission} from "./components/iOSPermission";

function App() {

    const [permissionGranted, setPermissionGranted] = useState(false)

    const iOS =  [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.userAgent)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  return (
      <>
          {
              permissionGranted || !iOS ?
                  (<Scene />) :
                  (<IOSPermission permissionGranted={permissionGranted} setPermissionGranted={setPermissionGranted} /> )
          }
      </>
  );
}

export default App;
