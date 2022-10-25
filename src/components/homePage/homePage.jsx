import './homePage.scss';
import FOG from "vanta/dist/vanta.fog.min";
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Header from '../header/header';

export default function HomePage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(
    () => {
      if (!vantaEffect) {
        setVantaEffect(
          FOG({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00
          }))
      }

      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect]);

  return (
    <div className='main' ref={vantaRef}>
      <Header />
    </div>
  )
}
