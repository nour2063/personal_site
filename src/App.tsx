import React, {useState} from 'react';
import './styles/App.css';
import Scene from "./components/Scene";
import {Accelerometer} from "./components/Accelerometer";

function App() {

    const [permissionGranted, setPermissionGranted] = useState(false)

    const iOS =  [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  return (
      <>
          {
              permissionGranted || !iOS ?
                  (<Scene />) :
                  (<Accelerometer permissionGranted={permissionGranted} setPermissionGranted={setPermissionGranted} /> )
          }
      </>
  );
}

export default App;
