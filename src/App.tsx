import React, {useState} from 'react';
import './styles/App.css';
import Scene from "./components/Scene";
import {Accelerometer} from "./components/Accelerometer";

function App() {

    const [permissionGranted, setPermissionGranted] = useState(false)

  return (
      <>
          {
              permissionGranted ?
                  ( <Scene /> ) :
                  (<Accelerometer permissionGranted={permissionGranted} setPermissionGranted={setPermissionGranted} /> )

          }
      </>
  );
}

export default App;
