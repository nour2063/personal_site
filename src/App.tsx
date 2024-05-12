import React, {useEffect} from 'react';
import './styles/App.css';

export function App() {

    interface Position {
        x: number
        y: number
    }

    useEffect(() => {
        const syncPointer = (props: Position) => {
            document.documentElement.style.setProperty('--x', props.x.toFixed(2))
            document.documentElement.style.setProperty(
                '--xp',
                (props.x / window.innerWidth).toFixed(2)
            )
            document.documentElement.style.setProperty('--y', props.y.toFixed(2))
            document.documentElement.style.setProperty(
                '--yp',
                (props.y / window.innerHeight).toFixed(2)
            )
        }
        document.body.addEventListener('pointermove', syncPointer)
    })

  return (
      <main>
          <article data-glow>
              <div data-glow></div>
          </article>
          <article data-glow>
              <div data-glow></div>
          </article>
      </main>
  );
}
