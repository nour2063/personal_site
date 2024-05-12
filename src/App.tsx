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
      <>
          <main>
              <div className={'main'}>
                  <article data-glow>
                      <h1>Nour Elfangary</h1>
                  </article>
                  <article data-glow>
                      <h3>About Me</h3>
                      <hr/>
                      <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                          sit
                          amet
                          quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. </p>
                      <hr/>
                  </article>
              </div>
              <div className={'side'}>
                  <article data-glow>
                      CV
                  </article>
                  <article data-glow>
                      github
                  </article>
                  <article data-glow>
                      linkedin
                  </article>
                  <article data-glow>
                      instagram
                  </article>
              </div>
          </main>
      </>
  );
}
