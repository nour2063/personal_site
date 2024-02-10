import React, { useState } from 'react';
import './styles/App.css';
import { Scene } from "./components/3D/Scene";
import { IOSPermission } from "./components/3D/iOSPermission";
import { FaLink } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import {ButtonBelt} from "./components/ButtonBelt";

function placeholder() {
    console.log('working');
}

export function App() {

    //TODO Add static website for phones with no accelerometer
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
      <div className={'content'}>
          {
              permissionGranted || !iOS ?
                  (
                      <>
                          <Scene/>
                          <h1>Nour Elfangary</h1>
                          <ButtonBelt buttons={[
                              [<FaLink/>, 'link', placeholder],
                              [<FaUser/>, 'about', placeholder],
                              [<FaUserFriends/>, 'friends', placeholder]
                          ]}/>
                      </>
                  ) :
                  (<IOSPermission permissionGranted={permissionGranted} setPermissionGranted={setPermissionGranted}/>)
          }
      </div>
  );
}
