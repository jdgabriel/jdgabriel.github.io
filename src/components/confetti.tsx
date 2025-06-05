import { useEffect, useState } from 'react';
import ReactConfetti, { type IConfettiOptions } from 'react-confetti';

export default function Confetti({
  width = 0,
  height = 0,
  recycle = false,
  numberOfPieces = 1000,
  tweenDuration = 10000,
  gravity = 0.15,
  ...props
}: Partial<IConfettiOptions>) {
  const [confettiWidth, setConfettiWidth] = useState(width);
  const [confettiHeight, setConfettiHeight] = useState(height);

  useEffect(() => {
    function handleResize() {
      setConfettiWidth(document.body.clientWidth);
      setConfettiHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactConfetti
      width={confettiWidth}
      height={confettiHeight}
      recycle={recycle}
      numberOfPieces={numberOfPieces}
      tweenDuration={tweenDuration}
      gravity={gravity}
      {...props}
    />
  );
}