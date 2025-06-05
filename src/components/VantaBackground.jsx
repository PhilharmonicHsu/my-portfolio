import { useRef, useEffect } from 'react';
import Fog from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

export default function VantaBackground({children}) {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = Fog({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            highlightColor: 0xffc300,
            midtoneColor: 0x928cb3,
            lowlightColor: 0xff9bed,
            baseColor: 0x9b9b9b
          });
          
          return () => {
            if (vantaEffect) vantaEffect.destroy();
          };
    }, [])

    return <div ref={vantaRef}>
        {children}
    </div>
}