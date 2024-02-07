import {useEffect} from "react"

interface  accelerometerProps {
    permissionGranted: boolean
    setPermissionGranted: (permission: boolean) => void
}

interface DeviceMotionEventiOS extends DeviceMotionEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>
}

const requestPermission =
    (DeviceMotionEvent as unknown as DeviceMotionEventiOS).requestPermission
const iOS = typeof requestPermission === 'function'

export function IOSPermission(props: accelerometerProps) {

    useEffect(() => {
        async function getPermission() {
            if (iOS) {
                const response = await requestPermission()
                if (response === 'granted') {
                    props.setPermissionGranted(true)
                }
            }
        }
        getPermission()
    })

    function handlePermissionGranted() {
        if (requestPermission) { // Check if requestPermission is defined
            requestPermission().then((response: string) => {
                if (response === 'granted') {
                    props.setPermissionGranted(true)
                    window.location.reload()
                }
            })
        }
    }

    return (
        <>
            {props.permissionGranted ? null : (
                <div className={'accelerometer-popup'}>
                    <div>
                        <h2>Allow access to device motion and orientation</h2>
                        <p>
                            This app requires access to device motion and orientation to function properly.
                        </p>
                        <button className={'button'} onClick={handlePermissionGranted}>
                            Grant Permission
                        </button>
                    </div>
                </div>
            )}
        </>
    )

}